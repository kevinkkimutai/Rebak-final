import barbed from "@/public/assets/barbed2.jpg";
import concrete from "@/public/assets/concrete/concrete2.jpeg";
import concrete_r from "@/public/assets/concrete/concrete11.jpeg";
import gate from "@/public/assets/construct/gate2 (3).jpg"
import woodenfence from "@/public/assets/wood/woodenfence.jpg"
import woodenfence_r from "@/public/assets/wood/barb.jpg"
import chain from "@/public/assets/chainlink/cahinz1.jpg"
import chain_r from "@/public/assets/chainlink/sample chainlink 3.jpg"
import perimeter from "@/public/assets/perimeter/perimeterfenc.jpg"
import perimeter_r from "@/public/assets/services/razor-chain.jpg"
export const PHONE = "+254 707 414 664";
export const WHATSAPP = "https://wa.me/254707414664";

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  { title: "Barbed Fence", text: "Affordable and reliable security fencing.", img: barbed },
  { title: "Concrete Fence", text: "Strong, durable and long-lasting.", img: concrete },
  { title: "Gate Fence", text: "Stylish gates for added security.", img: gate },
  { title: "Wooden Fence", text: "Natural look with timeless appeal.", img: woodenfence },
  { title: "Chainlink Fence", text: "Cost-effective and versatile.", img: chain },
  { title: "Perimeter Fence", text: "Complete boundary protection.", img: perimeter },
];

export const WHY = [
  { icon: "shield", title: "High-Quality Materials", text: "We use durable, long-lasting materials for all our projects." },
  { icon: "users", title: "Experienced Team", text: "Skilled professionals with years of industry experience." },
  { icon: "settings", title: "Custom Solutions", text: "Tailored to your specific needs and property style." },
  { icon: "thumbs", title: "Affordable Pricing", text: "Competitive rates with no hidden costs." },
] as const;

export const PORTFOLIO = [
  { title: "Residential Concrete Fence", place: "Nakuru, Kenya", img: concrete_r },
  { title: "Chainlink Fence", place: "Kericho, Kenya", img: chain_r },
  { title: "Wooden Fence", place: "Nandi, Kenya", img: woodenfence_r },
  { title: "Perimeter Fence", place: "Kericho, Kenya", img: perimeter },
  { title: "Gate Fence", place: "Londiani, Kenya", img: gate },
  { title: "Barbed Wire Fence", place: "Ngong, Kenya", img: perimeter_r },
];

export const STEPS = [
  { title: "Consultation", text: "Discuss your needs and get expert advice." },
  { title: "Site Assessment", text: "We visit your location for accurate measurements." },
  { title: "Custom Quote", text: "Receive a detailed estimate within 24 hours." },
  { title: "Installation", text: "Our team installs your fence with precision and care." },
  { title: "Completion", text: "Final inspection and customer approval." },
];

export const TESTIMONIALS = [
  { name: "James Mwangi", role: "Homeowner, Nairobi", img: "/images/t1.jpg", quote: "Rebak Solutions did an amazing job on our perimeter fence. The team was professional, on time, and the quality is excellent." },
  { name: "Sarah Wanjiku", role: "Business Owner, Thika", img: "/images/t2.jpg", quote: "The chainlink fence installed on our farm is strong and well done. Great service and affordable pricing." },
  { name: "Daniel Kimani", role: "Homeowner, Ruiru", img: "/images/t3.jpg", quote: "Professional, reliable and easy to work with. They delivered exactly what we needed. Highly recommended!" },
];

export const FAQS = [
  { q: "What areas do you serve?", a: "We serve Nairobi and its surroundings, and take projects across Kenya." },
  { q: "How long does installation take?", a: "Most residential projects take a few days once materials are on site." },
  { q: "Do you offer a warranty?", a: "Yes. Ask us for the warranty terms for your chosen fence type." },
  { q: "What types of fencing do you offer?", a: "Barbed, concrete, gate, wooden, chainlink and full perimeter fencing." },
  { q: "How much does fencing cost?", a: "It depends on length, materials and site. Request a free quote for an estimate within 24 hours." },
  { q: "Can I customize the design?", a: "Yes. We tailor height, finish and gate style to your property." },
];

 
export const SERVICE_OPTIONS = SERVICES.map((s) => s.title);
 
export const SERVICE_DETAILS: Record<string, { description: string; features: string[]; bestFor: string }> = {
  "Barbed Fence": {
    description: "A budget-friendly deterrent for large plots, farms and boundaries. Galvanized barbed wire is strung tight between sturdy posts.",
    features: ["Galvanized wire that resists rust", "Concrete or steel posts", "Fast installation over long distances", "Optional razor wire upgrade"],
    bestFor: "Farms, plots and large boundaries",
  },
  "Concrete Fence": {
    description: "Precast concrete panels give you a solid, private wall that lasts for decades with almost no maintenance.",
    features: ["Precast panels, quick to install", "Strong privacy and noise reduction", "Choice of finishes and colours", "Low maintenance"],
    bestFor: "Homes, estates and commercial compounds",
  },
  "Gate Fence": {
    description: "Sliding, swing and pedestrian gates in steel or wrought iron, built to match your fence and fitted for smooth daily use.",
    features: ["Sliding and swing options", "Powder-coated steel finish", "Automation-ready", "Custom sizes and designs"],
    bestFor: "Driveways, estates and offices",
  },
  "Wooden Fence": {
    description: "Treated timber fencing with a warm, natural look. It gives privacy and suits gardens and residential properties.",
    features: ["Treated, weather-resistant timber", "Solid or slatted styles", "Custom heights", "Stain or varnish finish"],
    bestFor: "Gardens and residential plots",
  },
  "Chainlink Fence": {
    description: "A practical, low-cost option that keeps the view open. Ideal for enclosing farms, schools, sports areas and yards.",
    features: ["Galvanized or PVC-coated mesh", "Strong tubular posts", "Quick and cost-effective", "Easy to repair"],
    bestFor: "Farms, schools and sports fields",
  },
  "Perimeter Fence": {
    description: "Complete boundary protection combining walls, wire and gates, planned around your whole property.",
    features: ["Site survey and layout planning", "Combined wall, wire and gate systems", "Options for electric fencing", "Built for long-term security"],
    bestFor: "Compounds, industrial and commercial sites",
  },
};
 
export const GALLERY_CATEGORIES = ["All", "Concrete", "Chainlink", "Wooden", "Barbed", "Perimeter", "Gates"] as const;
import residential from "@/public/gallery/residential-concrete.jpg";
import farmchainlink from "@/public/gallery/farm-chainlink.jpg";
import gardenwooden from "@/public/gallery/garden-wooden.jpg";
import estateperimeter from "@/public/gallery/estate-parimeter.jpg";
import slidingsteel from "@/public/gallery/sliding-steel.jpg";
import plotbarbed from "@/public/gallery/plot-barbed.jpg";
import cancreteboundary from "@/public/gallery/concrete-boundary.jpg";
import schoolchainlink from "@/public/gallery/school.jpg";
import timberprivacy from "@/public/gallery/sample-wooden-fence.jpeg";
import commercial from "@/public/gallery/commercial.jpg";
import driveway from "@/public/gallery/driveway.jpg";
import farmbarbed from "@/public/gallery/farm-barbed.jpg";
 
export const GALLERY = [
  { title: "Residential Concrete Fence", place: "Nairobi", category: "Concrete", img: residential },
  { title: "Farm Chainlink Fence", place: "Kericho", category: "Chainlink", img: farmchainlink },
  { title: "Garden Wooden Fence", place: "Kapsoit", category: "Wooden", img: gardenwooden },
  { title: "Estate Perimeter Wall", place: "Chepsir", category: "Perimeter", img: estateperimeter },
  { title: "Sliding Steel Gate", place: "Kabsabet", category: "Gates", img: slidingsteel },
  { title: "Plot Barbed Wire Fence", place: "Chemosot", category: "Barbed", img: plotbarbed },
  { title: "Concrete Boundary Wall", place: "Kipkelion", category: "Concrete", img: cancreteboundary },
  { title: "School Chainlink Fence", place: "Kipchimchim", category: "Chainlink", img: schoolchainlink },
  { title: "Timber Privacy Fence", place: "Awasi", category: "Wooden", img: timberprivacy },
  { title: "Commercial Perimeter", place: "Kericho", category: "Perimeter", img: commercial },
  { title: "Driveway Swing Gate", place: "Kapkatunga", category: "Gates", img: driveway },
  { title: "Farm Barbed Fence", place: "Kabianga", category: "Barbed", img: farmbarbed },
];

export const ABOUT_STATS = [
  { value: "4.9/5", label: "Average rating from 50+ customers" },
  { value: "24 hrs", label: "To receive your detailed quote" },
  { value: "6+", label: "Fencing types, from barbed wire to gates" },
  { value: "Kenya", label: "Wide service, homes to large compounds" },
];
 
export const VALUES = [
  { title: "Built to last", text: "We choose materials for Kenyan weather and security needs, and we install them properly the first time." },
  { title: "Honest pricing", text: "You get a detailed estimate before work starts, with no hidden costs added afterwards." },
  { title: "On time", text: "We agree a timeline up front and keep to it, so you are not left with an open boundary." },
  { title: "Made for your property", text: "Height, finish and gate style are tailored to your plot, budget and how you use the space." },
];
 
export const AREAS = ["Nairobi", "Kiambu", "Ruiru", "Thika", "Juja", "Machakos", "Athi River", "Kitengela", "Kajiado", "Naivasha"];
 
