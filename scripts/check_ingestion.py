"""Check source parser safety and the public catalog's licensing invariants."""
import io
import json
import tarfile
import unittest
from pathlib import Path

from collect_arxiv_sources import archive_files, braced, command_args, flatten_tex, preview, figure_captions, source_download, main_body_tex


class SourceSafety(unittest.TestCase):
    def test_appendix_and_ignored_trailing_tex_excluded(self):
        main = r"\begin{document}\begin{figure}\caption{main}\end{figure}"
        extra = r"\begin{figure}\caption{appendix}\end{figure}"
        self.assertEqual(main_body_tex(main+r"\appendix"+extra), main)
        self.assertEqual(main_body_tex(main+r"\end{document}"+extra), main)
    def test_nested_caption_and_commented_figures(self):
        text = r"\caption{A \textbf{nested {caption}} with {braces}}"
        self.assertEqual(command_args(text, "caption"), [r"A \textbf{nested {caption}} with {braces}"])
        files = {"main.tex": b"\\begin{document}\n% \\begin{figure}fake\\end{figure}\n\\input{method}\n",
                 "method.tex": b"\\begin{figure}real\\end{figure}"}
        root, tex = flatten_tex(files)
        self.assertNotIn("fake", tex)
        self.assertIn("real", tex)

    def test_numbered_captions_and_subfigure_captions_differ(self):
        text = r"\begin{subfigure}\caption{panel a}\end{subfigure}\caption{main figure}"
        self.assertEqual(figure_captions(text), ["main figure"])
        self.assertEqual(figure_captions(r"\captionof{figure}{nested {caption}}"), ["nested {caption}"])
        self.assertEqual(figure_captions(r"\caption{first}\caption{second}"), ["first", "second"])

    def test_archive_traversal_and_links_rejected(self):
        for name, link in [("../evil.png", False), ("link.png", True)]:
            stream = io.BytesIO()
            with tarfile.open(fileobj=stream, mode="w") as tar:
                item = tarfile.TarInfo(name)
                if link:
                    item.type = tarfile.SYMTYPE; item.linkname = "/etc/passwd"
                tar.addfile(item)
            with self.assertRaises(ValueError):
                archive_files(stream.getvalue())

    def test_pdf_response_rejected(self):
        with self.assertRaisesRegex(ValueError, "only a paper PDF"):
            archive_files(b"%PDF-1.7 fake paper")

    def test_pdf_source_is_rejected_without_body_download(self):
        from unittest.mock import MagicMock, patch
        import tempfile
        response = MagicMock()
        response.headers = {"Content-Type":"application/pdf"}
        response.__enter__.return_value = response
        with tempfile.TemporaryDirectory() as folder, patch("urllib.request.urlopen",return_value=response):
            with self.assertRaisesRegex(ValueError, "download skipped"):
                source_download("1234.56789v1", Path(folder))
        response.read.assert_not_called()

    def test_transparent_original_has_white_preview(self):
        from PIL import Image
        data = io.BytesIO()
        Image.new("RGBA", (5, 5), (0, 0, 0, 0)).save(data, format="PNG")
        self.assertEqual(preview(data.getvalue(), ".png").getpixel((0, 0)), (255, 255, 255))

    def test_catalog_rights_and_versions(self):
        path = Path(__file__).resolve().parent.parent/"data/catalog.json"
        figures = json.loads(path.read_text())["figures"]
        self.assertTrue(figures)
        for f in figures:
            with self.subTest(figure=f["id"]):
                self.assertEqual(f["rights"]["publication_status"], "approved")
                self.assertIn(f["rights"]["source_license"], {"CC-BY-4.0", "CC0-1.0"})
                self.assertTrue(f["rights"]["license_evidence_url"].startswith("https://"))
                self.assertEqual(f["reuse"]["validation"]["visual_extraction"], "reviewed")
                self.assertIn(f["source"]["number"], [1, 2])
                if f["source"].get("method") == "arxiv_source_original":
                    self.assertRegex(f["source"]["arxiv_version"], r"v\d+$")
                    self.assertTrue(f["original_assets"])


if __name__ == "__main__":
    unittest.main()
