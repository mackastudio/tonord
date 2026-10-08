import type {
  Card,
  NavItem,
  NewsItem,
  Office,
  Person,
  Product,
  Stat,
} from "@/types";

const UPLOADS = "https://talgagroup.eu-central-1.linodeobjects.com/app/uploads";

export const img = (path: string) => `${UPLOADS}/${path}`;

export const INVESTORS_URL = "https://investors.talgagroup.com/";

export const navItems: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company", href: "/about" },
      { label: "Board & Management", href: "/about#leadership" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Operations",
    href: "/operations/lulea",
    children: [
      { label: "Luleå Anode Refinery", href: "/operations/lulea" },
      { label: "Vittangi Graphite Mine", href: "/operations/vittangi" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Battery Materials", href: "/products#battery-materials" },
      { label: "Advanced Materials", href: "/products#advanced-materials" },
    ],
  },
  { label: "Markets", href: "/markets" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "News", href: "/news" },
  { label: "Careers", href: "/careers" },
];

export const socials = [
  { label: "LinkedIn", href: "https://au.linkedin.com/company/talga-group-ltd" },
  { label: "X", href: "https://x.com/Talga_Ltd" },
  { label: "Facebook", href: "https://www.facebook.com/talgasverige" },
];

export const keyFigures: Stat[] = [
  { value: "2009", label: "Founded" },
  { value: "2010", label: "Listed on the ASX" },
  { value: "4", label: "Countries of operation" },
  { value: "3", label: "Graphite projects in Sweden" },
];

export const impactFigures: Stat[] = [
  { value: "92%", label: "Lower CO₂-eq than imported anode used in Europe*" },
  { value: "€70m", label: "EU Innovation Fund grant for the Luleå refinery" },
  { value: "100kt", label: "Graphite ore per year from Nunasvaara South" },
  { value: "2022", label: "EVA anode plant in production since" },
];

export const exploreTiles: Card[] = [
  {
    title: "Products",
    description:
      "Green battery anodes and graphene additives for more sustainable batteries and consumer products.",
    href: "/products",
    image: img("2021/09/21064355/products-1160x650.jpg"),
  },
  {
    title: "Markets",
    description:
      "Serving the markets at the centre of electric mobility and the green transition.",
    href: "/markets",
    image: img("2021/09/21064654/solutions-1160x650.jpg"),
  },
  {
    title: "Sustainability",
    description:
      "Not an add-on, but the core of our strategy and mission since day one.",
    href: "/sustainability",
    image: img("2023/12/13164415/Sustainability-news-item.jpg"),
  },
  {
    title: "Investors",
    description:
      "Announcements, presentations, company reports and investor news alerts.",
    href: INVESTORS_URL,
    image: img("2021/09/21072654/open-road-1160x650.jpg"),
  },
];

export const news: NewsItem[] = [
  {
    title: "Talga and Japan's Hanwa sign strategic investment & offtake LOI",
    href: "https://docs.relait.com.au/Japan-s-Hanwa-Signs-Strategic-Investment-and-Offtake-LOI-1785105840.pdf",
    image: img("2025/10/17085612/Industriklivet-ASX-Release-Link-1160x649.jpg"),
  },
  {
    title: "Talga and Dainen execute Offtake LOI for Japan anode supply",
    href: "https://docs.relait.com.au/Talga-and-Dainen-Execute-Offtake-LOI-for-Japan-Anode-Supply-1784158620.pdf",
    image: img("2026/07/16135933/Talga-03.png"),
  },
  {
    title: "Talga and Mitsubishi Chemical execute anode supply LOI",
    href: "https://docs.relait.com.au/Talga-and-Mitsubishi-Chemical-Execute-Anode-Supply-LOI-1783291140.pdf",
    image: img("2026/07/06090349/Talga-01.jpg"),
  },
  {
    title: "Talga anode sales commence under Nyobolt offtake",
    href: "https://docs.relait.com.au/Talga-Anode-Sales-Commence-Under-Nyobolt-Offtake-Updated-1783068144.pdf",
    image: img("2022/03/23085511/EVAImage15h1000-e1648025792905-1160x649.jpg"),
  },
  {
    title: "Swedish Government adopts Detailed Plan for Graphite Mine",
    href: img("2026/01/27083617/3015212.pdf"),
    image: img("2024/04/29102325/3.jpg"),
  },
  {
    title: "Talga and V4Smart enter battery anode development agreement",
    href: img("2026/01/19074337/3012911.pdf"),
    image: img("2025/10/17085612/Industriklivet-ASX-Release-Link-1160x649.jpg"),
  },
  {
    title: "2025 Annual Report to Shareholders",
    href: img("2025/10/15094520/2965302.pdf"),
    image: img("2025/10/15112512/Web-Annual-Report-Link-1160x649.jpg"),
  },
  {
    title: "Talga granted US patents amid China supply chain controls",
    href: img("2025/10/14091103/2964350.pdf"),
    image: img("2025/10/15113340/Web-ASX-Release-Link-1160x649.jpg"),
  },
  {
    title: "Talga secures key mine permit",
    href: img("2025/06/12072639/20250612ExploitationConcessionAppealsDecision.pdf"),
    image: img("2023/04/06151754/3D_Vittangi_DAY-I-e1680765507603-1160x653.jpg"),
  },
  {
    title: "Talga secures Swedish Government grant",
    href: img("2025/10/17071558/2966773.pdf"),
    image: img("2024/11/29204134/Talga-Flag-470x263-1.jpg"),
  },
  {
    title: "Anode offtake agreement signed with fast-charge pioneer Nyobolt",
    href: img("2025/05/14085155/20250514NyoboltOfftake_ASX.pdf"),
    image: img("2025/04/16174911/Lulea-Hero_V6_600x336.jpg"),
  },
  {
    title: "Anode refinery designated EU Net-Zero Strategic Project",
    href: img("sites/2/2025/04/16012639/20250416StrategicProjectNZIA_ASX.pdf"),
    image: img("2024/12/09121345/lulea2-1160x653.jpg"),
  },
  {
    title: "Talga awarded EU Strategic Project status",
    href: img("2025/03/26094343/20250326StrategicProject_ASX.pdf"),
    image: img("2025/03/26165844/Image-2-1160x665.jpeg"),
  },
  {
    title: "Supreme Court dismisses mine environmental appeals",
    href: img("2024/10/31092117/20241031Permit_AppealsDismissed_InForce_ASX.pdf"),
    image: img("2025/03/26170530/man-with-rock-1-1160x649.png"),
  },
  {
    title: "Talga awarded EU Innovation Fund grant for Luleå Anode Refinery",
    href: img("2024/10/25105637/20241025InnovationFund_ASX.pdf"),
    image: img("2024/12/02114058/Untitled-design.jpg"),
  },
  {
    title: "Talga and SQM enter lithium partnership agreement",
    href: img("2024/06/21063431/20240621SQMTalga_ASX.pdf"),
    image: img("2025/03/26170928/SQM-2-1160x649.jpg"),
  },
  {
    title: "Vittangi Anode Project FEED Study delivers strong results",
    href: img("2024/04/15091050/20240415FeedCompleted_ASX.pdf"),
    image: img("2025/03/26171109/feed2-1-1160x649.jpg"),
  },
  {
    title: "Vittangi Project Milestones",
    href: img("2023/09/12160714/20230912ProjectUpdate_ASX.pdf"),
    image: img("2023/10/27103022/Groundbreaking-photo-1160x649.jpg"),
  },
  {
    title: "Environmental permit approved for commercial anode refinery",
    href: img("2023/06/22083258/20230622RefineryPermitDecision_ASX.pdf"),
    image: img("2023/03/31184553/Screenshot-2023-03-31-at-12.45.18-e1688006784825-1160x653.png"),
  },
  {
    title: "Talga battery anode project receives EIB funding approval",
    href: img("2023/06/20092357/20230620EIBApproval_ASX.pdf"),
    image: img("2022/03/25015501/shutterstock_1024452661-e1648173388667-1160x649.jpg"),
  },
  {
    title: "Environmental permit approved for Talga's natural graphite mine",
    href: img("2023/04/06083317/20230406PermitDecision_ASX.pdf"),
    image: img("2023/04/06151754/3D_Vittangi_DAY-I-e1680765507603-1160x653.jpg"),
  },
  {
    title: "Verkor signs non-binding LOI for Talga anode supply",
    href: img("2023/01/11084551/20230111LetterOfIntentVerkor_ASX.pdf"),
    image: img("2023/01/11115237/IMG_0593-e1673409249906.jpg"),
  },
];

export const batteryProducts: Product[] = [
  {
    name: "Talnode™-C",
    tagline: "Power & EV series",
    description:
      "Coated natural graphite anode made from high-grade Swedish graphite with a proprietary coating — engineered for fast charging and strong low-temperature performance.",
    features: [
      "Low ohmic resistance and low swelling",
      "Tunable for high-rate use or blending",
      "For EVs, hybrids and consumer electronics",
    ],
    image: img("2021/09/15152629/TLG_039-1160x773.jpg"),
  },
  {
    name: "Talnode™-R",
    tagline: "Recycled series",
    description:
      "Recycled graphite anode produced in Europe from production scrap or black mass using a proprietary process.",
    features: [
      "Supports a circular battery value chain",
      "Strengthens European self-reliance",
      "Lower emissions than synthetic graphite",
    ],
    image: img("2021/10/14050406/talnode-e-1160x773.jpg"),
  },
  {
    name: "Talnode™-Si",
    tagline: "Silicon-carbon composite",
    description:
      "A silicon-carbon composite that lifts the energy density of commercial graphite anodes as a drop-in addition.",
    features: [
      "Drop-in design with low swelling",
      "Compatible with commercial calendaring pressures",
      "Low-cost, scalable manufacturing",
    ],
    image: img("2021/09/15152657/TLG_009-1160x773.jpg"),
  },
];

export const advancedProducts: Product[] = [
  {
    name: "Talphite™",
    tagline: "Graphitic materials",
    description:
      "High-purity micro-graphite made from Swedish natural graphite through a proprietary concentration process, supplied as a dry powder of graphene flakes and nanoplatelets.",
    features: [
      "For battery anode and cathode products",
      "Precursor for graphene production",
    ],
    image: img("2021/10/13070538/graphene-quality-control.png"),
  },
  {
    name: "Talphene™",
    tagline: "Graphene additives",
    description:
      "A range of graphene products from nanoplatelets to few-layer graphene, functionalised with Talga technology and available as powder or dispersion.",
    features: [
      "Very high surface area flakes",
      "Tailored to customer material goals",
      "Low-cost, scalable process",
    ],
    image: img("2021/09/23072023/lca-1160x650.jpg"),
  },
];

export const markets: Card[] = [
  {
    title: "Electric Vehicles",
    description:
      "Anode makes up 40–50% of a battery's active material. Green anode cuts the footprint of the cars, buses and trucks driving emission-free transport.",
    image: img("2023/12/13163257/EV-news-item.jpg"),
  },
  {
    title: "Consumer Electronics",
    description:
      "Higher-performing, lower-carbon batteries for the phones, laptops and wearables we use every day.",
    image: img("2023/12/13163318/Consumer-electronics-news-item.jpg"),
  },
  {
    title: "Energy Storage Systems",
    description:
      "Stationary batteries for industrial-scale and home storage that balance a grid running on renewables.",
    image: img("2023/12/13163349/ESS-news-item.jpg"),
  },
  {
    title: "Consumer Goods",
    description:
      "Sustainable outcomes that reach all the way down to the material level of everyday products.",
    image: img("2023/12/13163837/Consumer-goods-news-item.jpg"),
  },
  {
    title: "Industrial Applications",
    description:
      "Graphene additives that make concrete, coatings and plastics stronger, longer-lasting, more conductive and lighter.",
    image: img("2023/12/13164252/Industrial-applications-news-items.jpg"),
  },
];

export const projects: Card[] = [
  {
    title: "Vittangi",
    description:
      "Home to the Nunasvaara South deposit — one of the highest-grade graphite resources in Europe and the feedstock for Talga's anode.",
    href: img("2025/07/31114532/06.B-Mineral-Resource-Fact-Sheet-Vittangi_FINAL.pdf"),
    image: img("2022/03/21090852/TalgaVittangi-12-scaled-e1647853808679-1160x650.jpg"),
  },
  {
    title: "Jalkunen",
    description:
      "Natural graphite project in northern Sweden, adding long-term resource depth to the Talga portfolio.",
    href: img("2022/03/29114942/06.C-Mineral-Resource-Fact-Sheet-Jalkunen_FINAL.pdf"),
    image: img("2022/03/23090230/jalkunen_b-scaled-e1648026234868-1160x649.jpg"),
  },
  {
    title: "Raitajärvi",
    description:
      "Natural graphite project in northern Sweden within Talga's vertically integrated resource base.",
    href: img("2022/03/22023830/06.D_Mineral_Resource_Fact_Sheet_Raitajarvi.pdf"),
    image: img("2021/09/21072654/open-road-1160x650.jpg"),
  },
];

export const board: Person[] = [
  {
    name: "Terry Stinson",
    role: "Non-Executive Chair",
    bio: "35+ years of executive and non-executive leadership at global innovation companies, including international collaborations and joint ventures.",
  },
  {
    name: "Mark Thompson",
    role: "Managing Director & Founder",
    bio: "35+ years in geoscience and the mineral industries across discovery, development, technology and management.",
  },
  {
    name: "Grant Mooney",
    role: "Non-Executive Director",
    bio: "Chartered accountant with a corporate advisory background in equity capital markets, governance and M&A.",
  },
  {
    name: "Eva Nordmark",
    role: "Non-Executive Director · Chair, Talga AB",
    bio: "Former Swedish Minister of Employment and Gender Equality and Member of Parliament.",
  },
];

export const management: Person[] = [
  {
    name: "Martin Phillips",
    role: "Chief Executive Officer",
    bio: "25+ years in metals and mining, building and running operations and delivering growth strategies.",
  },
  {
    name: "Anna Motta",
    role: "Chief Technology Officer",
    bio: "Chemist with 20+ years in carbon nanomaterials, leading Talga's technology and advanced materials unit.",
  },
  {
    name: "Sascha Keen",
    role: "Group Director Corporate Development",
    bio: "30+ years in banking, project finance and strategy across mining, energy and infrastructure.",
  },
  {
    name: "Niklas Karlsson",
    role: "Group Finance Director",
    bio: "30+ years of finance leadership in technology-driven growth companies, most recently CFO of Studsvik Group.",
  },
];

export const offices: Office[] = [
  {
    city: "Luleå",
    country: "Sweden",
    entity: "Talga AB",
    note: "Registered office & principal place of business",
    address: ["Södra Kungsgatan 5B", "972 35 Luleå, Sweden"],
    phone: "+46 (0) 10-303 71 00",
    email: "info.se@talgagroup.com",
  },
  {
    city: "Perth",
    country: "Australia",
    entity: "Talga Group Ltd",
    note: "Group headquarters",
    address: ["Suite 3.03, Level 3", "46 Colin Street", "West Perth, WA 6005"],
    phone: "+61 8 9481 6667",
    email: "info@talgagroup.com",
  },
  {
    city: "Cambridge",
    country: "United Kingdom",
    entity: "Talga Technologies Limited",
    note: "UK Battery Centre of Excellence",
    address: ["Conqueror House, Chivers Way", "Histon, Cambridge CB24 9ZR"],
    phone: "+44 1223 420416",
    email: "info.uk@talgagroup.com",
  },
  {
    city: "Rudolstadt",
    country: "Germany",
    entity: "Talga Advanced Materials GmbH",
    address: ["Prof.-Hermann-Klare-Str. 6", "07407 Rudolstadt, Germany"],
    email: "info.de@talgagroup.com",
  },
];

export const sustainabilityResources: Card[] = [
  {
    title: "Nunasvaara South Environmental Impact Assessment",
    description: "Baseline studies for the Vittangi mine.",
    href: "https://www.talgagroup.com/nunasvaara-south-mine-eia/",
    image: img("2023/04/06151754/3D_Vittangi_DAY-I-e1680765507603-1160x653.jpg"),
  },
  {
    title: "Luleå Refinery Environmental Impact Assessment",
    description: "Baseline studies for the anode refinery.",
    href: "https://www.talgagroup.com/lulea-anode-refinery-eia/",
    image: img("2023/03/31184553/Screenshot-2023-03-31-at-12.45.18-e1688006784825-1160x653.png"),
  },
  {
    title: "Environmental Policy",
    description: "Our commitments, updated 2025.",
    href: "https://www.talgagroup.com/sustainability/",
    image: img("2022/03/21084017/IMG_8489-scaled-e1647852104445-1160x650.jpg"),
  },
  {
    title: "Indigenous Peoples Recognition Statement",
    description: "Our statement on the rights of Indigenous peoples (2024).",
    href: "https://www.talgagroup.com/sustainability/",
    image: img("2024/04/19141449/Stockholm-1.jpg"),
  },
  {
    title: "Sustainability & People Report",
    description: "Our 2025 performance and people report.",
    href: "https://www.talgagroup.com/sustainability/",
    image: img("2025/10/15115851/Web-Sustainability-Report-Link-1160x649.jpg"),
  },
];
