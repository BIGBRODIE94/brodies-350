export interface Stat {
  label: string;
  value: number;
  suffix: string;
  decimals?: number;
  caption: string;
}

export interface SpecRow {
  label: string;
  value: string;
}

export interface SpecGroup {
  title: string;
  rows: SpecRow[];
}

export interface GalleryShot {
  src: string;
  alt: string;
  caption: string;
}

export interface DesignDetail {
  index: string;
  title: string;
  body: string;
}

export const car = {
  badge: "BRODIES 350",
  make: "Lexus",
  model: "IS 350 F SPORT",
  generationNote: "Third-generation \u00b7 2021 facelift",
  tagline: "The last of the naturally aspirated V6 sport sedans.",
  heroSub: "311 HP \u00b7 3.5L V6 \u00b7 REAR-WHEEL DRIVE",
  plate: "UBE-8953",
  region: "VIRGINIA",
  color: "Cement Gray",
};

export const heroImage = "/car/front-three-quarter.png";
export const narrativeImage = "/car/rear-three-quarter.png";
export const designImagePrimary = "/car/night-front.png";
export const designImageSecondary = "/car/side-profile.png";

export const stats: Stat[] = [
  {
    label: "Horsepower",
    value: 311,
    suffix: "",
    caption: "@ 6,600 rpm",
  },
  {
    label: "Torque",
    value: 280,
    suffix: " lb-ft",
    caption: "@ 4,800 rpm",
  },
  {
    label: "0\u201360 mph",
    value: 5.6,
    suffix: "s",
    decimals: 1,
    caption: "rolling onto the V6 cam",
  },
  {
    label: "Top Speed",
    value: 143,
    suffix: " mph",
    caption: "manufacturer limited",
  },
];

export const narrative = {
  kicker: "The Engine",
  heading: "A naturally aspirated swan song.",
  paragraphs: [
    "No turbos. No lag. No apology. Beneath the hood lives the 2GR-FKS \u2014 a 3.5-liter, 24-valve V6 that breathes free and revs to a 6,600 rpm crescendo for all 311 horsepower.",
    "In an era of downsized, force-fed four-cylinders, the IS 350 F Sport holds the line as the only naturally aspirated V6 in its class. The power builds the old-fashioned way: linear, eager, and singing louder with every rising rev.",
    "An 8-speed automatic sends it all to the rear wheels. The result is 5.6 seconds to sixty, a 14.2-second quarter mile, and a soundtrack you don't get from a turbo. Enjoy it now \u2014 this is the end of the line.",
  ],
};

export const specGroups: SpecGroup[] = [
  {
    title: "Powertrain",
    rows: [
      { label: "Engine", value: "3.5L V6 (2GR-FKS)" },
      { label: "Aspiration", value: "Naturally aspirated" },
      { label: "Valvetrain", value: "DOHC 24-valve, dual VVT-i" },
      { label: "Fuel system", value: "Port + direct injection" },
      { label: "Displacement", value: "3,456 cc / 211 in\u00b3" },
    ],
  },
  {
    title: "Output",
    rows: [
      { label: "Horsepower", value: "311 hp @ 6,600 rpm" },
      { label: "Torque", value: "280 lb-ft @ 4,800 rpm" },
      { label: "Transmission", value: "8-speed automatic" },
      { label: "Drivetrain", value: "Rear-wheel drive" },
      { label: "Layout", value: "Front engine, 4-door sedan" },
    ],
  },
  {
    title: "Performance",
    rows: [
      { label: "0\u201360 mph", value: "5.6 sec" },
      { label: "Quarter mile", value: "14.2 sec @ 100 mph" },
      { label: "Top speed", value: "143 mph" },
      { label: "Braking 70\u20130", value: "155 ft" },
      { label: "Skidpad", value: "0.89 g" },
    ],
  },
  {
    title: "F Sport Chassis",
    rows: [
      { label: "Trim", value: "F SPORT" },
      { label: "Suspension", value: "Adaptive Variable" },
      { label: "Wheels", value: '19" gloss-black F Sport' },
      { label: "Fuel economy", value: "20 city / 28 hwy" },
      { label: "Exterior", value: "Cement Gray" },
    ],
  },
];

export const designDetails: DesignDetail[] = [
  {
    index: "01",
    title: "Cement Gray over the spindle",
    body: "A flat, architectural gray that reads concrete in daylight and liquid graphite at night \u2014 wrapped over the aggressive third-gen body.",
  },
  {
    index: "02",
    title: "Blacked-out spindle grille",
    body: "The signature Lexus spindle, finished in gloss black mesh, anchors a face full of intent and razor-edged F Sport intakes.",
  },
  {
    index: "03",
    title: "Gloss-black F Sport wheels",
    body: '19-inch staggered F Sport wheels in gloss black, filling the arches over a stance lowered by the adaptive variable suspension.',
  },
  {
    index: "04",
    title: "Ivory leather contrast",
    body: "Open the door to a light ivory cabin \u2014 a deliberate contrast to the murdered-out exterior, with F Sport seats and aluminum trim.",
  },
];

export const gallery: GalleryShot[] = [
  {
    src: "/car/front-three-quarter.png",
    alt: "Lexus IS 350 F Sport front three-quarter view",
    caption: "Front 3/4 \u00b7 golden hour",
  },
  {
    src: "/car/rear-three-quarter.png",
    alt: "Lexus IS 350 F Sport rear three-quarter view",
    caption: "Rear 3/4 \u00b7 full-width tail",
  },
  {
    src: "/car/side-profile.png",
    alt: "Lexus IS 350 F Sport side profile",
    caption: "Profile \u00b7 the long hood",
  },
  {
    src: "/car/front-on-lot.png",
    alt: "Lexus IS 350 F Sport front view",
    caption: "Head-on \u00b7 spindle grille",
  },
  {
    src: "/car/front-on-trees.png",
    alt: "Lexus IS 350 F Sport front view by the trees",
    caption: "Front \u00b7 winter light",
  },
  {
    src: "/car/night-front.png",
    alt: "Lexus IS 350 F Sport at night",
    caption: "Night \u00b7 ivory cabin glow",
  },
];
