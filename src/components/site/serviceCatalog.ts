import {
  Bath,
  Droplets,
  Flame,
  Gauge,
  Search,
  ShowerHead,
  Siren,
  Utensils,
  Waves,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  text: string;
  intro: string;
  includes: string[];
  signs: string[];
  response: string;
};

export const SERVICES: Service[] = [
  {
    slug: "emergency-plumbing",
    icon: Siren,
    title: "Emergency Plumbing",
    text: "Urgent leaks, blockages, and failures handled calmly and quickly.",
    intro:
      "When water is where it should not be, the priority is control first and repair second. BroBax stabilises the situation, protects your home, then explains the fix before any work begins.",
    includes: [
      "Immediate isolation of the water or heating supply",
      "Burst and split pipe containment and repair",
      "Severe blockage and overflow clearance",
      "Failed valve, cistern, and connection replacement",
      "Damage-limiting clean-down before we leave",
    ],
    signs: [
      "Water running or spraying that you cannot stop",
      "A sudden drop or loss of pressure",
      "Sewage smell or waste backing up",
      "No heating or hot water in cold conditions",
    ],
    response: "Priority same-day attendance whenever the situation is unsafe or actively causing damage.",
  },
  {
    slug: "drain-cleaning",
    icon: Waves,
    title: "Drain Cleaning",
    text: "Slow or blocked drains cleared thoroughly, not just temporarily.",
    intro:
      "Most drains block again because only the surface obstruction was removed. We clear the full run and check flow properly so the problem does not quietly return.",
    includes: [
      "Mechanical clearance of sinks, baths, and showers",
      "Soil stack and external gully clearing",
      "Grease, scale, and debris build-up removal",
      "Flow testing after clearance",
      "Advice on preventing repeat blockages",
    ],
    signs: [
      "Water draining slowly or standing in the basin",
      "Gurgling sounds after the tap is turned off",
      "Recurring smells around plugholes",
      "More than one fixture draining poorly",
    ],
    response: "Usually booked within a day or two, sooner if waste water is backing up.",
  },
  {
    slug: "leak-detection-repair",
    icon: Search,
    title: "Leak Detection & Repair",
    text: "Careful diagnosis that finds the source with minimal disruption.",
    intro:
      "A visible damp patch is rarely where the leak starts. We trace it methodically, opening as little of your home as possible, then repair the actual cause.",
    includes: [
      "Systematic tracing of concealed and under-floor leaks",
      "Pressure and isolation testing",
      "Targeted access with minimal disturbance",
      "Permanent joint, pipe, or fitting repair",
      "Re-test and confirmation before sign-off",
    ],
    signs: [
      "Unexplained damp, staining, or bubbling paint",
      "A meter that moves with everything turned off",
      "Musty smell in one room only",
      "Warm or cold patches on a floor",
    ],
    response: "Booked promptly, with urgent priority where the leak is worsening.",
  },
  {
    slug: "water-heater-services",
    icon: Droplets,
    title: "Water Heater Services",
    text: "Repair, servicing, and replacement for consistent hot water.",
    intro:
      "Hot water should be predictable. We service, repair, or replace heaters and cylinders with the correct sizing so temperature and recovery stay steady.",
    includes: [
      "Fault diagnosis on electric and gas units",
      "Thermostat, element, and valve replacement",
      "Descaling and full service",
      "Correctly sized replacement and installation",
      "Safety and pressure checks",
    ],
    signs: [
      "Hot water running out quickly",
      "Fluctuating or lukewarm temperature",
      "Rumbling, knocking, or hissing from the unit",
      "Moisture or rust around the base",
    ],
    response: "Repairs typically same or next day; replacements scheduled to suit you.",
  },
  {
    slug: "boiler-heating-services",
    icon: Flame,
    title: "Boiler & Heating Services",
    text: "Heating systems tuned for steady, efficient warmth.",
    intro:
      "Heating faults are usually a system issue rather than a single part. We look at the whole circuit — pressure, circulation, and controls — so the fix holds.",
    includes: [
      "Boiler fault finding and repair",
      "System pressure and circulation correction",
      "Radiator balancing and bleeding",
      "Pump, valve, and control replacement",
      "Planned annual servicing",
    ],
    signs: [
      "Radiators cold at the top or the bottom",
      "Boiler locking out or losing pressure",
      "Noisy pipework or banging on start-up",
      "Rooms heating unevenly",
    ],
    response: "Heating loss in cold weather is treated as priority work.",
  },
  {
    slug: "pipe-repair-replacement",
    icon: Wrench,
    title: "Pipe Repair & Replacement",
    text: "Clean, durable pipework repairs finished to a high standard.",
    intro:
      "Pipework is the part of the job nobody sees, which is exactly why we finish it properly — correctly supported, cleanly routed, and pressure tested.",
    includes: [
      "Split, corroded, and failed section replacement",
      "Copper, plastic, and mixed-material jointing",
      "Re-routing around renovations",
      "Insulation against freezing",
      "Full pressure testing after work",
    ],
    signs: [
      "Repeated leaks in the same run",
      "Discoloured water or visible corrosion",
      "Persistent low pressure",
      "Pipework that rattles or moves in use",
    ],
    response: "Scheduled work with a clear plan, timeline, and cost agreed up front.",
  },
  {
    slug: "bathroom-plumbing",
    icon: Bath,
    title: "Bathroom Plumbing",
    text: "Refined installation and repair work for bathrooms of any scale.",
    intro:
      "Bathrooms show every shortcut. Levels, seals, and finish matter as much as the plumbing behind them, so we treat both with the same care.",
    includes: [
      "Basin, bath, shower, and WC installation",
      "Supply and waste pipework alterations",
      "Shower valve and pressure improvement",
      "Silicone sealing and finishing",
      "Leak and drainage testing",
    ],
    signs: [
      "Weak or fluctuating shower pressure",
      "Water escaping around trays or seals",
      "Fixtures loose or sitting unevenly",
      "A refit or upgrade being planned",
    ],
    response: "Repairs booked quickly; installations planned around your schedule.",
  },
  {
    slug: "kitchen-plumbing",
    icon: Utensils,
    title: "Kitchen Plumbing",
    text: "Sinks, supply lines, and appliance connections done precisely.",
    intro:
      "Kitchen plumbing sits behind cabinetry, so access and neatness are part of the job. We install and repair in a way that stays serviceable later.",
    includes: [
      "Sink, tap, and waste installation",
      "Dishwasher and washing machine connection",
      "Under-sink leak repair",
      "Waste re-routing for new units",
      "Water filter and boiling tap fitting",
    ],
    signs: [
      "Damp or swollen cabinet bases",
      "Slow draining sink or trapped odours",
      "Dripping or stiff taps",
      "A new appliance needing connection",
    ],
    response: "Straightforward jobs often completed in a single visit.",
  },
  {
    slug: "fixture-installation",
    icon: ShowerHead,
    title: "Fixture Installation",
    text: "Taps, showers, and fittings installed level, sealed, and tested.",
    intro:
      "Good fittings deserve a good installation. Everything is set level, sealed correctly, and tested under real use before we call it finished.",
    includes: [
      "Tap, mixer, and shower installation",
      "Radiator and towel rail fitting",
      "WC and cistern replacement",
      "Isolation valve additions for easier servicing",
      "Post-installation testing and adjustment",
    ],
    signs: [
      "New fittings waiting to be installed",
      "Existing fixtures dripping or seized",
      "Poor flow from a recently fitted tap",
      "Visible sealant failure or movement",
    ],
    response: "Booked at a convenient time, usually completed within one visit.",
  },
  {
    slug: "preventive-maintenance",
    icon: Gauge,
    title: "Preventive Maintenance",
    text: "Planned checks that catch small issues before they escalate.",
    intro:
      "The cheapest plumbing repair is the one you never needed. A planned check finds the early signs while they are still minor.",
    includes: [
      "Full visual inspection of visible pipework",
      "Pressure, flow, and drainage checks",
      "Heating and hot water performance review",
      "Seal, valve, and connection assessment",
      "Written summary of findings and priorities",
    ],
    signs: [
      "An older system with no recent service history",
      "A property being let or sold",
      "Small recurring drips or noises",
      "Wanting to avoid winter surprises",
    ],
    response: "Scheduled at your convenience, typically annually.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
