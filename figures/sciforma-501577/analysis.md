# Source record: Figure unresolved (hosted method figure; numbering/scope unverified)

TIMESAFE: Timing Interruption Monitoring and Security Assessment for Fronthaul Environments — arXiv 2024.

This record was imported from an external figure index. No figure-specific visual analysis has been written. Labels inherited from the index are retrieval hints, not a verified description of the image.

The index supplied no caption.

Paper: https://arxiv.org/abs/2412.13049

Index: https://datasets-server.huggingface.co/rows?dataset=microsoft%2FSciFormaData-700K&config=generation_1024&split=train&offset=501500&length=100

## Machine-generated source description

This is the dataset's generated description, not an author caption or independently reviewed visual analysis.

The figure illustrates four distinct synchronization plane topologies (LLS-C1, LLS-C2, LLS-C3, LLS-C4) for a fronthaul network connecting a Distributed Unit (DU) to a Radio Unit (RU), with emphasis on clock source placement and network switching impacts on timing synchronization. The global layout is structured horizontally into four parallel rows, each representing one topology. Each row contains a DU block on the left and an RU block on the right, connected by a blue line labeled 'Fronthaul'. Above the topmost row, a server icon with a database symbol represents the Clock Source, which is linked to the DU in LLS-C1. Below the bottom row, the label 'Switched Network' points to cloud-shaped icons placed between DU and RU in LLS-C2, LLS-C3, and LLS-C4, indicating packet-switched network segments.

Visual modules include rectangular boxes labeled 'DU' and 'RU', black clock icons denoting timing sources, and beige cloud shapes representing the switched network. In LLS-C1, the clock source is external and directly connected to the DU; this topology is shown above a red-bordered region that groups LLS-C2 and LLS-C3. In LLS-C2, the clock is located at the DU, but timing signals traverse the switched network to reach the RU. In LLS-C3, the clock is embedded within the switched network itself, between DU and RU. In LLS-C4, clocks are independently placed at both DU and RU, implying local timing sources. All clock icons are simple circular dials with hour and minute hands. The red border around LLS-C2 and LLS-C3 visually emphasizes these topologies as particularly vulnerable due to reliance on packet-switched networks for timing message transport.

Connections are represented by solid blue lines between DU and RU, symbolizing the fronthaul link. In LLS-C2 and LLS-C3, additional dashed or implied connections pass through the cloud icons, indicating timing signals routed via the switched network. The clock source in LLS-C1 connects directly to the DU via a thin black line. In LLS-C4, separate clocks connect locally to their respective DU and RU. The figure uses consistent labeling: 'LLS-C#' in bold red text to the left of each topology, and descriptive labels such as 'Clock Source' and 'Switched Network' with leader lines pointing to relevant components. The caption clarifies that topologies using switched networks for timing synchronization (LLS-C2 and LLS-C3) are especially susceptible to Precision Time Protocol (PTP) attacks, highlighting the security implications of network-based timing distribution.
