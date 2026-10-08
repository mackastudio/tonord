import type { Metadata } from "next";
import OperationPage from "@/components/sections/OperationPage";
import { img } from "@/data/site";

export const metadata: Metadata = {
  title: "Luleå Anode Refinery",
  description:
    "Building Europe's first natural graphite anode refinery in Luleå, Sweden.",
};

export default function LuleaPage() {
  return (
    <OperationPage
      eyebrow="Operations · Luleå, Sweden"
      title="Building Europe's first natural graphite anode refinery"
      intro="Renewable electricity, high-grade graphite and proprietary technology combine in Luleå to produce low-emission battery anode."
      heroImage={img("2023/12/05121539/Lulea-banner-2-1160x424.jpg")}
      overviewTitle="From the EVA Plant to commercial scale"
      overview={[
        "Our coated anode production facility in Luleå — the EVA Plant — began production in 2022. It produces anode material for customer qualification against each customer's technical specifications, with capacity of 50 tonnes per annum using stockpiled ore from trial mining at Vittangi.",
        "The Luleå Anode Refinery will be the first of its kind in Europe, refining high-grade natural graphite from Talga's deposits near Vittangi into anode for lithium-ion batteries.",
        "Luleå offers renewable electricity, direct transport routes to battery and automotive manufacturers, a leading science university and a skilled workforce.",
      ]}
      overviewImage={img("2026/02/26131529/Talga-1-1-1160x773.jpg")}
      factsTitle="The anode refinery"
      facts={[
        {
          label: "What",
          text: "Natural graphite anode for lithium-ion batteries in EVs, consumer electronics and energy storage.",
        },
        { label: "Size", text: "A total building area of roughly five football fields." },
        {
          label: "Emissions",
          text: "Up to 92% lower CO₂-eq than imported anode used in Europe, per our Life Cycle Assessment.",
        },
        {
          label: "Funding",
          text: "Selected for EUR 70 million from the EU Innovation Fund (project TalnodeONE).",
        },
        {
          label: "Status",
          text: "Granted Strategic Project status under the EU Net-Zero Industry Act.",
        },
        {
          label: "EVA Plant",
          text: "In production since 2022 with 50 tpa capacity for customer qualification.",
        },
      ]}
      eia={{
        text: "Baseline environmental studies — covering water management, biodiversity and community impacts — were submitted to the Land and Environment Court as part of the Environmental Permit application.",
        href: "https://www.talgagroup.com/lulea-anode-refinery-eia/",
      }}
      updates={[
        {
          title: "EU Net-Zero Strategic Project",
          description: "The refinery was granted Strategic Project status under the Net-Zero Industry Act.",
          href: img("sites/2/2025/04/16012639/20250416StrategicProjectNZIA_ASX.pdf"),
          image: img("2024/12/09121345/lulea2-1160x653.jpg"),
        },
        {
          title: "€70m Innovation Fund grant",
          description: "Selected for funding of the commercial-scale refinery.",
          href: img("2024/10/25105637/20241025InnovationFund_ASX.pdf"),
          image: img("2024/12/05141414/talga.jpg"),
        },
        {
          title: "Refinery groundbreaking",
          description: "Construction milestones on the road to commercial production.",
          href: img("2023/09/12160714/20230912ProjectUpdate_ASX.pdf"),
          image: img("2023/10/27103022/Groundbreaking-photo-1160x649.jpg"),
        },
      ]}
    />
  );
}
