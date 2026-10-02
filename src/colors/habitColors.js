const habitColors = {
  coral: {
    name: "Corail",
    base: "#F54927",
    accent: "#FFB4A6",
    completed: "#FFD8D1",
    completedAccent: "#FFF0ED",
  },

  blue: {
    name: "Bleu",
    base: "#3478F6",
    accent: "#A8C7FF",
    completed: "#D9E7FF",
    completedAccent: "#F0F5FF",
  },

  green: {
    name: "Vert",
    base: "#2F9E63",
    accent: "#A8DFC0",
    completed: "#D9F1E3",
    completedAccent: "#F0FAF4",
  },

  purple: {
    name: "Violet",
    base: "#8057C7",
    accent: "#C8B3EA",
    completed: "#E6DCF7",
    completedAccent: "#F6F2FC",
  },

  amber: {
    name: "Ambre",
    base: "#D98216",
    accent: "#F3C987",
    completed: "#F9E4BF",
    completedAccent: "#FEF7EA",
  },

  pink: {
    name: "Rose",
    base: "#D94F83",
    accent: "#EFB0C8",
    completed: "#F7DCE7",
    completedAccent: "#FDF2F6",
  },

  teal: {
    name: "Turquoise",
    base: "#168C8C",
    accent: "#91D3D3",
    completed: "#D3EEEE",
    completedAccent: "#EFF9F9",
  },

  indigo: {
    name: "Indigo",
    base: "#5865C7",
    accent: "#AFB5E7",
    completed: "#DDE0F5",
    completedAccent: "#F2F3FB",
  },

  // ─────────────────────────────
  // ROUGES & ORANGES
  // ─────────────────────────────

  ruby: {
    name: "Rubis",
    base: "#C6284F",
    accent: "#EE9AAF",
    completed: "#F8D5DE",
    completedAccent: "#FDF0F3",
  },

  cherry: {
    name: "Cerise",
    base: "#E11D48",
    accent: "#FDA4AF",
    completed: "#FFE4E6",
    completedAccent: "#FFF1F2",
  },

  crimson: {
    name: "Cramoisi",
    base: "#B91C1C",
    accent: "#FCA5A5",
    completed: "#FEE2E2",
    completedAccent: "#FEF2F2",
  },

  scarlet: {
    name: "Écarlate",
    base: "#E23D28",
    accent: "#FF9E91",
    completed: "#FFD9D4",
    completedAccent: "#FFF0EE",
  },

  tomato: {
    name: "Tomate",
    base: "#F15B3A",
    accent: "#FFB59F",
    completed: "#FFE0D7",
    completedAccent: "#FFF3EF",
  },

  tangerine: {
    name: "Mandarine",
    base: "#F97316",
    accent: "#FDBA74",
    completed: "#FFEDD5",
    completedAccent: "#FFF7ED",
  },

  pumpkin: {
    name: "Citrouille",
    base: "#E86A17",
    accent: "#F6B26B",
    completed: "#FBE1C3",
    completedAccent: "#FFF5E8",
  },

  peach: {
    name: "Pêche",
    base: "#F28C6B",
    accent: "#FFC7B5",
    completed: "#FFE5DC",
    completedAccent: "#FFF5F1",
  },

  // ─────────────────────────────
  // JAUNES & DORÉS
  // ─────────────────────────────

  sunflower: {
    name: "Tournesol",
    base: "#EAB308",
    accent: "#FDE68A",
    completed: "#FEF3C7",
    completedAccent: "#FFFBEB",
  },

  lemon: {
    name: "Citron",
    base: "#C9D329",
    accent: "#E8ED8A",
    completed: "#F2F4C9",
    completedAccent: "#FAFBEA",
  },

  gold: {
    name: "Or",
    base: "#C58A18",
    accent: "#EBCB7A",
    completed: "#F7E8BE",
    completedAccent: "#FEF9E9",
  },

  saffron: {
    name: "Safran",
    base: "#D97706",
    accent: "#FBBF72",
    completed: "#FDE7C2",
    completedAccent: "#FFF6E8",
  },

  honey: {
    name: "Miel",
    base: "#B7791F",
    accent: "#E7C47A",
    completed: "#F5E5C3",
    completedAccent: "#FCF7EB",
  },

  // ─────────────────────────────
  // VERTS
  // ─────────────────────────────

  emerald: {
    name: "Émeraude",
    base: "#059669",
    accent: "#6EE7B7",
    completed: "#D1FAE5",
    completedAccent: "#ECFDF5",
  },

  mint: {
    name: "Menthe",
    base: "#26A69A",
    accent: "#8DDED5",
    completed: "#D5F3EF",
    completedAccent: "#EFFBF9",
  },

  lime: {
    name: "Citron vert",
    base: "#65A30D",
    accent: "#BEF264",
    completed: "#E9F7C8",
    completedAccent: "#F5FBEA",
  },

  olive: {
    name: "Olive",
    base: "#71851B",
    accent: "#C3CE7B",
    completed: "#E8ECCB",
    completedAccent: "#F6F8EA",
  },

  forest: {
    name: "Forêt",
    base: "#166534",
    accent: "#86C69A",
    completed: "#D7EBDD",
    completedAccent: "#F0F8F2",
  },

  moss: {
    name: "Mousse",
    base: "#5F7D32",
    accent: "#B6C98D",
    completed: "#E1E9D2",
    completedAccent: "#F4F7ED",
  },

  sage: {
    name: "Sauge",
    base: "#78947A",
    accent: "#BFD0C0",
    completed: "#DFE9DF",
    completedAccent: "#F3F7F3",
  },

  pistachio: {
    name: "Pistache",
    base: "#82A83D",
    accent: "#C9DFA1",
    completed: "#E8F0D6",
    completedAccent: "#F5F9EC",
  },

  // ─────────────────────────────
  // BLEUS
  // ─────────────────────────────

  sky: {
    name: "Ciel",
    base: "#0EA5E9",
    accent: "#7DD3FC",
    completed: "#DDF4FE",
    completedAccent: "#F0FAFE",
  },

  cyan: {
    name: "Cyan",
    base: "#0891B2",
    accent: "#67E8F9",
    completed: "#CFFAFE",
    completedAccent: "#ECFEFF",
  },

  ocean: {
    name: "Océan",
    base: "#0369A1",
    accent: "#7CC4E8",
    completed: "#D8EEF9",
    completedAccent: "#EFF8FC",
  },

  navy: {
    name: "Bleu nuit",
    base: "#1E3A8A",
    accent: "#93A9E8",
    completed: "#DDE4F8",
    completedAccent: "#F1F4FC",
  },

  royal: {
    name: "Bleu royal",
    base: "#4338CA",
    accent: "#A5B4FC",
    completed: "#E0E7FF",
    completedAccent: "#EEF2FF",
  },

  azure: {
    name: "Azur",
    base: "#2563EB",
    accent: "#93B9FF",
    completed: "#DCE8FF",
    completedAccent: "#F0F5FF",
  },

  steel: {
    name: "Acier",
    base: "#64748B",
    accent: "#B7C1CD",
    completed: "#E2E7ED",
    completedAccent: "#F5F7F9",
  },

  // ─────────────────────────────
  // VIOLETS
  // ─────────────────────────────

  violet: {
    name: "Violet vif",
    base: "#7C3AED",
    accent: "#C4B5FD",
    completed: "#EDE9FE",
    completedAccent: "#F5F3FF",
  },

  lavender: {
    name: "Lavande",
    base: "#8B7CC8",
    accent: "#CFC7EE",
    completed: "#E7E3F6",
    completedAccent: "#F6F4FC",
  },

  plum: {
    name: "Prune",
    base: "#7E3F8F",
    accent: "#C89BD1",
    completed: "#EBD8EE",
    completedAccent: "#F8F0F9",
  },

  grape: {
    name: "Raisin",
    base: "#6D3FA0",
    accent: "#BFA1D8",
    completed: "#E5D9F0",
    completedAccent: "#F5F0F9",
  },

  mauve: {
    name: "Mauve",
    base: "#9F6B9B",
    accent: "#D7B8D3",
    completed: "#EEDFEA",
    completedAccent: "#FAF4F8",
  },

  amethyst: {
    name: "Améthyste",
    base: "#9333EA",
    accent: "#D8B4FE",
    completed: "#F3E8FF",
    completedAccent: "#FAF5FF",
  },

  // ─────────────────────────────
  // ROSES
  // ─────────────────────────────

  fuchsia: {
    name: "Fuchsia",
    base: "#C026D3",
    accent: "#F0ABFC",
    completed: "#FAE8FF",
    completedAccent: "#FDF4FF",
  },

  magenta: {
    name: "Magenta",
    base: "#DB2777",
    accent: "#F9A8D4",
    completed: "#FCE7F3",
    completedAccent: "#FDF2F8",
  },

  raspberry: {
    name: "Framboise",
    base: "#BE185D",
    accent: "#F08AB7",
    completed: "#F8D7E5",
    completedAccent: "#FDF0F5",
  },

  bubblegum: {
    name: "Bubblegum",
    base: "#EC6AA8",
    accent: "#F8B9D6",
    completed: "#FCE1ED",
    completedAccent: "#FFF3F8",
  },

  rosewood: {
    name: "Bois de rose",
    base: "#9F4F5F",
    accent: "#D9A1AA",
    completed: "#EEDADE",
    completedAccent: "#FAF1F3",
  },

  // ─────────────────────────────
  // COULEURS ORIGINALES
  // ─────────────────────────────

  periwinkle: {
    name: "Pervenche",
    base: "#7187D8",
    accent: "#B9C5EF",
    completed: "#DEE4F8",
    completedAccent: "#F2F5FD",
  },

  denim: {
    name: "Denim",
    base: "#3F5F9E",
    accent: "#9EB5DF",
    completed: "#DCE5F4",
    completedAccent: "#F1F5FB",
  },

  lagoon: {
    name: "Lagon",
    base: "#159A9C",
    accent: "#83D5D5",
    completed: "#D4EEEE",
    completedAccent: "#EFFBFB",
  },

  jade: {
    name: "Jade",
    base: "#238B72",
    accent: "#8CCFBE",
    completed: "#D8EEE8",
    completedAccent: "#F0F9F6",
  },

  eucalyptus: {
    name: "Eucalyptus",
    base: "#4F8A78",
    accent: "#A8CDC2",
    completed: "#DCECE7",
    completedAccent: "#F1F8F6",
  },

  caramel: {
    name: "Caramel",
    base: "#B96F3D",
    accent: "#DEB08D",
    completed: "#EFDFD2",
    completedAccent: "#FAF4EF",
  },

  terracotta: {
    name: "Terracotta",
    base: "#B95C45",
    accent: "#DCA394",
    completed: "#ECD9D4",
    completedAccent: "#F9F1EF",
  },

  cinnamon: {
    name: "Cannelle",
    base: "#A85D32",
    accent: "#D7A77F",
    completed: "#EEDDCF",
    completedAccent: "#FAF4EE",
  },

  mocha: {
    name: "Moka",
    base: "#795548",
    accent: "#BCA69F",
    completed: "#E2D8D4",
    completedAccent: "#F5F1EF",
  },

  cocoa: {
    name: "Cacao",
    base: "#704214",
    accent: "#C09A6B",
    completed: "#E8DCCB",
    completedAccent: "#F7F2EA",
  },

  sand: {
    name: "Sable",
    base: "#A98B65",
    accent: "#D7C5A8",
    completed: "#EBE2D4",
    completedAccent: "#F8F5EF",
  },

  desert: {
    name: "Désert",
    base: "#C47B44",
    accent: "#E2B48A",
    completed: "#F1DDCC",
    completedAccent: "#FAF4EE",
  },

  dustyBlue: {
    name: "Bleu poudré",
    base: "#6B8FA3",
    accent: "#B5CBD5",
    completed: "#DCE9EE",
    completedAccent: "#F2F7F9",
  },

  storm: {
    name: "Tempête",
    base: "#536878",
    accent: "#AAB9C2",
    completed: "#DCE3E7",
    completedAccent: "#F2F5F7",
  },

  midnight: {
    name: "Minuit",
    base: "#293B5F",
    accent: "#8295BB",
    completed: "#D8DFEB",
    completedAccent: "#F0F3F8",
  },

  aurora: {
    name: "Aurore",
    base: "#568F8B",
    accent: "#A7D2CD",
    completed: "#DCEDEA",
    completedAccent: "#F2F9F8",
  },

  cactus: {
    name: "Cactus",
    base: "#527A4E",
    accent: "#A9C69F",
    completed: "#DEEAD9",
    completedAccent: "#F2F8EF",
  },

  seafoam: {
    name: "Écume",
    base: "#5DB7A5",
    accent: "#A9DDD3",
    completed: "#DDF1ED",
    completedAccent: "#F1FAF8",
  },

  orchid: {
    name: "Orchidée",
    base: "#A855C7",
    accent: "#D9A6E8",
    completed: "#EDDDF4",
    completedAccent: "#F8F1FA",
  },

  iris: {
    name: "Iris",
    base: "#635BBA",
    accent: "#AAA5DD",
    completed: "#E1DFF2",
    completedAccent: "#F3F2FA",
  },

  cottonCandy: {
    name: "Barbe à papa",
    base: "#D88DB8",
    accent: "#EFC5DD",
    completed: "#F6E3EE",
    completedAccent: "#FCF5F9",
  },

  flamingo: {
    name: "Flamant",
    base: "#E76F8A",
    accent: "#F4B4C2",
    completed: "#F9DDE3",
    completedAccent: "#FEF3F5",
  },

  melon: {
    name: "Melon",
    base: "#F39B6D",
    accent: "#F9C7A8",
    completed: "#FBE6D8",
    completedAccent: "#FFF5EF",
  },

  apricot: {
    name: "Abricot",
    base: "#EFA35A",
    accent: "#F6CAA0",
    completed: "#F9E8D4",
    completedAccent: "#FFF6EC",
  },

  matcha: {
    name: "Matcha",
    base: "#7D9B4D",
    accent: "#BFD19A",
    completed: "#E5EDD4",
    completedAccent: "#F4F8EA",
  },

  bamboo: {
    name: "Bambou",
    base: "#6C8C52",
    accent: "#B3C79E",
    completed: "#E0E9D8",
    completedAccent: "#F3F7EF",
  },

  glacier: {
    name: "Glacier",
    base: "#62A9C2",
    accent: "#A9D5E2",
    completed: "#DDEFF4",
    completedAccent: "#F1F9FB",
  },

  electricBlue: {
    name: "Bleu électrique",
    base: "#2563EB",
    accent: "#8DB4FF",
    completed: "#DCE8FF",
    completedAccent: "#F0F5FF",
  },

  electricPurple: {
    name: "Violet électrique",
    base: "#6D28D9",
    accent: "#B99AF5",
    completed: "#E9DEFC",
    completedAccent: "#F6F2FE",
  },

  electricGreen: {
    name: "Vert électrique",
    base: "#16A34A",
    accent: "#86EFAC",
    completed: "#DCFCE7",
    completedAccent: "#F0FDF4",
  },

  electricPink: {
    name: "Rose électrique",
    base: "#E6007E",
    accent: "#F58FC7",
    completed: "#FBD8EA",
    completedAccent: "#FEF0F7",
  },

  // ─────────────────────────────
  // GRIS & NEUTRES
  // ─────────────────────────────

  charcoal: {
    name: "Anthracite",
    base: "#374151",
    accent: "#9CA3AF",
    completed: "#E5E7EB",
    completedAccent: "#F3F4F6",
  },

  slate: {
    name: "Ardoise",
    base: "#475569",
    accent: "#94A3B8",
    completed: "#E2E8F0",
    completedAccent: "#F1F5F9",
  },

  graphite: {
    name: "Graphite",
    base: "#4B5563",
    accent: "#9CA3AF",
    completed: "#E5E7EB",
    completedAccent: "#F3F4F6",
  },

  silver: {
    name: "Argent",
    base: "#6B7280",
    accent: "#B6BCC7",
    completed: "#E5E7EB",
    completedAccent: "#F5F6F8",
  },

  ash: {
    name: "Cendre",
    base: "#737373",
    accent: "#B8B8B8",
    completed: "#E5E5E5",
    completedAccent: "#F5F5F5",
  },

  stone: {
    name: "Pierre",
    base: "#78716C",
    accent: "#B8B1AC",
    completed: "#E7E5E4",
    completedAccent: "#F5F5F4",
  },

  smoke: {
    name: "Fumée",
    base: "#52525B",
    accent: "#A1A1AA",
    completed: "#E4E4E7",
    completedAccent: "#F4F4F5",
  },

  pewter: {
    name: "Étain",
    base: "#64748B",
    accent: "#AEB8C4",
    completed: "#E2E7ED",
    completedAccent: "#F5F7F9",
  },

  iron: {
    name: "Fer",
    base: "#3F4650",
    accent: "#8E98A5",
    completed: "#DDE1E6",
    completedAccent: "#F1F3F5",
  },

  silverGray: {
    name: "Gris argent",
    base: "#858B94",
    accent: "#C1C5CB",
    completed: "#E8EAED",
    completedAccent: "#F6F7F8",
  },

  coolGray: {
    name: "Gris froid",
    base: "#59636E",
    accent: "#AAB3BC",
    completed: "#DEE3E8",
    completedAccent: "#F2F4F6",
  },

  warmGray: {
    name: "Gris chaud",
    base: "#6B625D",
    accent: "#B8ADA6",
    completed: "#E8E3DF",
    completedAccent: "#F6F3F1",
  },

  neutralGray: {
    name: "Gris neutre",
    base: "#666666",
    accent: "#AAAAAA",
    completed: "#E5E5E5",
    completedAccent: "#F5F5F5",
  },

  concrete: {
    name: "Béton",
    base: "#707070",
    accent: "#B5B5B5",
    completed: "#E6E6E6",
    completedAccent: "#F4F4F4",
  },

  graphiteDark: {
    name: "Graphite foncé",
    base: "#30343B",
    accent: "#858B95",
    completed: "#D9DCE1",
    completedAccent: "#EFF1F3",
  },

  black: {
    name: "Noir",
    base: "#1F2937",
    accent: "#6B7280",
    completed: "#D1D5DB",
    completedAccent: "#F3F4F6",
  },

  // ─────────────────────────────
  // BLANCS
  // ─────────────────────────────

  white: {
    name: "Blanc",
    base: "#FFFFFF",
    accent: "#D9D9D9",
    completed: "#F2F2F2",
    completedAccent: "#FAFAFA",
  },

  snow: {
    name: "Neige",
    base: "#FAFAFA",
    accent: "#D6D6D6",
    completed: "#F0F0F0",
    completedAccent: "#F8F8F8",
  },

  ivory: {
    name: "Ivoire",
    base: "#FFFFF0",
    accent: "#DCDCC8",
    completed: "#F4F4E8",
    completedAccent: "#FAFAF2",
  },

  pearl: {
    name: "Perle",
    base: "#F5F5F5",
    accent: "#CCCCCC",
    completed: "#EAEAEA",
    completedAccent: "#F9F9F9",
  },

  cloud: {
    name: "Nuage",
    base: "#F1F3F5",
    accent: "#C5CAD0",
    completed: "#E6E9EC",
    completedAccent: "#F8F9FA",
  },

  cream: {
    name: "Crème",
    base: "#FFFDF5",
    accent: "#E5DFC9",
    completed: "#F7F3E5",
    completedAccent: "#FCFAF2",
  }
};

export default habitColors;
