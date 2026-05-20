import { LOCATION_ITEMS } from "./locationData";
import { getLocationGallery } from "./locationDetailGalleries";

const defaultDescription = [
  "Set in Mumbai's corporate core, this workspace offers everything a growing business needs, minus the friction. Modern architecture, smart interiors, and flexible floor plans make it ideal for fast-moving teams. You're surrounded by big names, which means your clients get a better first impression.",
  "Support facilities like banks, hospitals, and premium hotels are all close by. Additionally, it has excellent connectivity via rail and road. Here, your location adds to your competitive edge.",
];

const defaultAmenities = [
  "24/7 Office Access",
  "Call Rooms",
  "Housekeeping Services",
  "Adjustable Standing Desks",
  "Secure Keyless Locking System",
  "Lockers",
  "Airport Transfer Service",
  "2 Meeting Rooms",
  "High-Speed Wi-Fi",
  "Business Concierge Support",
  "Parking Services",
  "Function Rooms",
  "Mini Data Centres",
  "IT Support Services",
  "Dedicated Desks",
  "Event Spaces",
  "Coworking Library",
  "Members Lounge",
  "Serviced Barista Bar",
  "Pantry Refreshments",
  "Outdoor Area",
  "Nursing Rooms",
  "Prayer Rooms",
  "Community & Networking Events",
];

const defaultGettingThere = [
  {
    title: "By Airport",
    description: "A half an hour drive from the Kempegowda International Airport",
  },
  {
    title: "By Rail",
    description:
      "Nearest railway station is Cantonment Railway Station, 1 Km from the Center. Nearest metro is the Cubbon Park Metro Station, 5 min or the Vidhana Soudha Metro Station a 5 min walk from the Center",
  },
  {
    title: "By Road",
    description:
      "Shivajinagar Bus Station - 5 min walk, and the Indian Express Circle Bus Stop - very close to the center, are the two main transit points where buses connect to any part of the city.",
  },
  {
    title: "Hotels",
    description: "Close to top 5-star stays like Four Seasons, Shangri-La, and ITC Grand Central.",
  },
];

const defaultPlans = [
  {
    title: "Complete Office",
    description: "Smart, fully equipped offices with professional support built in.",
    image: "/images/location/detail_page/detail_gallery1.webp",
  },
  {
    title: "Shared Office",
    description: "Designed for start-ups, SMEs, freelancers and small firms.",
    image: "/images/location/detail_page/detail_gallery1.webp",
  },
  {
    title: "Customise Office",
    description: "Fully managed, branded floors tailored for global enterprises and large domestic firms.",
    image: "/images/location/detail_page/detail_gallery1.webp",
  },
  {
    title: "Virtual Office",
    description: "Fully managed, branded floors tailored for global enterprises and large domestic firms.",
    image: "/images/location/detail_page/detail_gallery1.webp",
  },
];

/** FAQ body copy (Figma 1834:7788 — two Body 16px paragraphs). */
const defaultFaqParagraphs = [
  "Set in Mumbai's corporate core, One World Centre offers everything a growing business needs, minus the friction. Modern architecture, smart interiors, and flexible floor plans make it ideal for fast-moving teams. You're surrounded by big names such as Deloitte and Cipla, which means your clients get a better first impression.",
  "Support facilities like banks, hospitals, and premium hotels are all close by. Additionally, it has excellent connectivity via rail and road. Here, your location adds to your competitive edge.",
];

const defaultFaqs = [
  {
    question: "What makes Align powered by DBS Workspace unique?",
    paragraphs: defaultFaqParagraphs,
    open: true,
  },
  {
    question: "What makes DBS Workspace different from a regular office?",
    paragraphs: defaultFaqParagraphs,
    open: false,
  },
  {
    question: "What's included in the rent?",
    paragraphs: defaultFaqParagraphs,
    open: false,
  },
  {
    question: "Can I move in immediately?",
    paragraphs: defaultFaqParagraphs,
    open: false,
  },
  {
    question: "Where are DBS Workspace offices located in Andheri?",
    paragraphs: defaultFaqParagraphs,
    open: false,
  },
];

const cityLabels = {
  mumbai: "Mumbai",
  delhi: "New Delhi",
  kolkata: "Kolkata",
  hyderabad: "Hyderabad",
  chennai: "Chennai",
  bengaluru: "Bengaluru",
};

const areaById = {
  andheri: "Andheri East",
  fort: "Fort",
  "one-world-center": "Lower Parel",
  "nariman-point": "Nariman Point",
  "donear-one-twelve": "Andheri East",
  "peninsula-business-park": "Lower Parel",
};

/** Full detail records keyed by location id (Figma: 1.0 LOCATION-DETAILS). */
export const LOCATION_DETAILS = Object.fromEntries(
  LOCATION_ITEMS.map((item) => {
    const emailSlug = item.id.replace(/-/g, "");
    return [
      item.id,
      {
        ...item,
        cityLabel: cityLabels[item.city] || "Mumbai",
        areaLabel: areaById[item.id] || item.title.split(",").pop()?.trim() || "Mumbai",
        isNew: item.id === "andheri",
        email: `${emailSlug}@dbsworkspace.com`,
        hours: "Mon - Fri: 08:30 - 18:00, Sat: 08:30 - 13:00",
        capacity: "20+ capacity",
        transitLandmarks: ["6 mins from Churchgate Station", "4 mins from CST Station"],
        description: defaultDescription,
        photoCount: 11,
        amenities: defaultAmenities,
        gettingThere: defaultGettingThere,
        plans: defaultPlans,
        faqs: defaultFaqs.map((faq, index) =>
          index === 4
            ? { ...faq, question: `Where are DBS Workspace offices located in ${areaById[item.id] || "this area"}?` }
            : faq
        ),
        mapImage: "/images/location/mumbai-map.svg",
        mapInset: "/images/location/detail_page/explore-location_1.webp",
      },
    ];
  })
);

/** Default location for the static detail page (Figma reference: Andheri). Swap this when wiring an API. */
export const STATIC_DETAIL_LOCATION_ID = "andheri";

export function getStaticLocationDetail() {
  return LOCATION_DETAILS[STATIC_DETAIL_LOCATION_ID];
}

/** For future dynamic routing / API — includes hero `gallery` from static gallery data. */
export function getLocationDetail(slug) {
  const base = LOCATION_DETAILS[slug];
  if (!base) return null;
  return { ...base, gallery: getLocationGallery(slug) };
}

export function getOtherLocations(currentId) {
  return LOCATION_ITEMS.filter((item) => item.id !== currentId).slice(0, 3);
}
