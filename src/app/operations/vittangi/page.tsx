import type { Metadata } from "next";
import OperationPage from "@/components/sections/OperationPage";
import { img } from "@/data/site";

export const metadata: Metadata = {
  title: "Vittangi Graphite Mine",
  description:
    "High-grade natural graphite for Europe's green transition from the Nunasvaara South mine near Vittangi, Sweden.",
};

export default function VittangiPage() {
  return (
    <OperationPage
      eyebrow="Operations · Vittangi, Sweden"
      title="High-grade natural graphite for Europe's green transition"
      intro="The Nunasvaara South deposit near Vittangi is one of the highest-grade graphite resources in Europe."
      heroImage={img("2023/12/01142620/Vittangi-community-1-1160x416.png")}
      overviewTitle="The Nunasvaara South mine"
      overview={[
        "Talga's Nunasvaara South graphite mine lies near Vittangi in northern Sweden. Its high-grade natural graphite is ideal for producing lithium-ion battery anode for electric vehicles.",
        "Graphite extracted at Vittangi is concentrated on site and then refined into anode material at our refinery in Luleå — keeping the whole value chain in Sweden.",
      ]}
      overviewImage={img("2022/03/21083712/TalgaVittangi-42-scaled-e1647851894497-1160x650.jpg")}
      factsTitle="The mine"
      facts={[
        {
          label: "Output",
          text: "About 100,000 tonnes of high-grade natural graphite ore per year, concentrated on site.",
        },
        {
          label: "Seasonal operation",
          text: "Mining runs six months a year to reduce impact on reindeer herding; the concentrator runs year-round.",
        },
        {
          label: "Waste & environment",
          text: "Integrated waste facility with continuous dust and noise monitoring.",
        },
        {
          label: "Water",
          text: "Wastewater treatment and monitoring to keep water quality and groundwater levels unaffected.",
        },
        {
          label: "Biodiversity",
          text: "High-value areas avoided and protected, with offsets targeting a net 15% gain using the CLIMB methodology.",
        },
        { label: "Jobs", text: "Around 60 jobs in the local community." },
      ]}
      eia={{
        text: "Baseline studies covering water management, biodiversity, reindeer husbandry and dust management were submitted to the Land and Environment Court and the Mining Inspectorate as part of permitting.",
        href: "https://www.talgagroup.com/nunasvaara-south-mine-eia/",
      }}
      updates={[
        {
          title: "Exploitation Concession approved",
          description: "The mine exploitation concession for Nunasvaara South.",
          href: img("2024/10/18062701/20241018ExploitationConcession_ASX.pdf"),
          image: img("2024/04/29102325/3.jpg"),
        },
        {
          title: "Environmental Permit in force",
          description: "Appeals against the mine environmental permit dismissed.",
          href: img("2024/10/31092117/20241031Permit_AppealsDismissed_InForce_ASX.pdf"),
          image: img("2024/10/31131734/man-with-rock.png"),
        },
        {
          title: "Vittangi graphite ore genesis",
          description: "Video: how the exceptional Vittangi graphite was formed.",
          href: "https://www.youtube.com/watch?v=d3-GRuNGZYI",
          image: img("2022/03/24024743/ore-genesis-1160x653.jpeg"),
        },
      ]}
    />
  );
}
