# 搜索、多标签与智能体索引

[项目首页](../README.md) · [使用指南](USAGE.md)

## 研究主题与图形分类

图形类型回答“这张图如何表达”，研究主题回答“关联论文研究什么”。一张图可同时带 RL、World Model、ICL 等主题。布局、用途、图号、来源和获奖标签仍是独立维度。

目前主题词包含 RL、World Model、WAM、ICL、大语言模型、视觉、多模态、机器人、智能体、图学习、检索、扩散、医学、视频、三维、音频、优化和知识编辑。固定 ID 与别名以 [src/research-topics.js](../src/research-topics.js) 和 [主题索引](../data/research_tags.json) 为准。

WAM 表示 World Action Model（世界动作模型）。参见正式论文 [DyWA](https://www.openaccess.thecvf.com/content/ICCV2025/papers/Lyu_DyWA_Dynamics-adaptive_World_Action_Model_for_Generalizable_Non-prehensile_Manipulation_ICCV_2025_paper.pdf)。ICL 表示 In-Context Learning（上下文学习），可参见 [ACL 论文](https://aclanthology.org/2023.findings-acl.527/)。缩写全称的支持不等于图库已收录相应论文；无明确命中时数量保持 0。

## 检索与组合

- `rl`、`reinforcement learning` 和 `强化学习` 使用相同主题。
- `world model`、`world-model`、`worldmodel`、复数写法和 `世界模型` 互通。
- `icl` 与 `in-context learning` 互通；短缩写按单词边界匹配，ICLR 不会被当成 ICL。
- `rl world model` 必须同时命中两个主题；还可以加年份，例如 `rl 2025`。
- 研究主题多选采用交集；其他字段继续在同一字段内取并集，在不同字段间取交集。
- 多选主题旁的计数表示与其他已选主题共同满足的候选数，卡片标签也可直接点击筛选。
- 查询与主题选择写入 URL；清除搜索、清除筛选和浏览器前进后退沿用现有行为。

## 标签依据

标签仅按 `paper.title`、可用的 `paper.abstract` 和已有 `classification.research_topics` 识别。不会仅从数据集生成的图像标题、通用说明、会议名称或模糊子串推断 RL / ICL。每个标签保存 `status: metadata_keyword_match` 与命中的字段、术语。

这是论文元数据主题检索，不能替代全文语义审核，也不保证论文内每张图都描绘同一主题。没有依据的条目保留空标签，不强行填满。标签不会升级图号、图片许可、prompt 或视觉核验状态。

## 供智能体读取

网站提供两个静态 JSON：

- `https://doczbs.github.io/Awesome-Academic-Figures/research-tags.json`
- `https://doczbs.github.io/Awesome-Academic-Figures/catalog.json`

主题索引包括 `topics` 词表、别名和当前图 / 论文数量，以及逐图 `figures` 列表。每图保存 `id`、`paper_id`、`paper_title`、`paper_url`、`asset_base`、`tag_ids`、`tags`。标签中的 `evidence` 指明命中的 `field` 与 `matched_terms`。

```python
import json
from urllib.request import urlopen

base = "https://doczbs.github.io/Awesome-Academic-Figures/"
with urlopen(base + "research-tags.json") as response:
    index = json.load(response)

wanted = {"rl", "world-model"}
matches = [f for f in index["figures"] if wanted <= set(f["tag_ids"])]
for figure in matches:
    print(figure["id"], figure["paper_title"], figure["paper_url"])
```

这段示例只读取 JSON；找到候选后，再按图 ID 连接完整目录，按需获取图片和 prompt。导出的参考包 `metadata.json` 同样携带 `research_tags` 与证据。

## 维护

词表由 `src/research-topics.js` 统一维护，供画廊、论文推荐、卡片与静态索引共用。修改词表后运行：

```sh
npm run tags:build
npm run check
npm run build
```

构建将 `data/research_tags.json` 同步到网站 `research-tags.json`；一致性检查拒绝运行时规则与提交的索引漂移。人工新增主题应附论文中的明确术语依据，而不是仅凭图片外观猜测。
