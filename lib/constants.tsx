import { SiGithub, SiMedium, SiX, SiDiscord, SiTelegram } from "@icons-pack/react-simple-icons"

export const NAV_LINKS = [
  { href: "https://dashboard.verisense.network", label: "Dashboard" },
]

export const EXTERNAL_LINKS = {
  product: {
    label: "Product",
    links: [
      { href: "/coming-soon", label: "Sense Home" },
      { href: "https://sensespace.xyz", label: "Sense Space" },
      { href: "https://aitonomy.world", label: "Aitonomy" },
    ],
  },
  developer: {
    label: "Developer",
    links: [
      { href: "https://docs.verisense.network", label: "Docs" },
      { href: "https://docs.verisense.network/advanced_guides/course.html", label: "Course" },
      { href: "https://github.com/verisense-network", label: "GitHub" },
      { href: "https://crates.io/crates/vrs-core-sdk", label: "SDK" },
      { href: "https://t.me/verisense_faucet_bot", label: "Faucet" },
    ],
  },
  community: {
    label: "Community",
    links: [
      {
        href: "https://github.com/verisense-network/papers/blob/main/whitepaper/verisense_whitepaper_20250426.pdf",
        label: "2025 Whitepaper",
      },
      {
        href: "https://github.com/verisense-network/papers/blob/main/whitepaper/verisense_whitepaper_20240818.pdf",
        label: "2024 Whitepaper",
      },
      { href: "https://arxiv.org/pdf/2408.16094", label: "2024 Research Paper" },
      { href: "https://blog.verisense.network", label: "Blog" },
    ],
  },
  betanet: { href: "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.beta.verisense.network#/explorer", label: "Beta Network Explorer" },
}

export const BACKED_BY_LOGOS = [
  { name: "EigenLayer", src: "/brand/eigen-layer.svg", alt: "EigenLayer Logo" },
  { name: "Google", src: "/brand/google.svg", alt: "Google Logo" },
  { name: "Taisu Venture", src: "/brand/taisu-venture.png", alt: "Taisu Venture Logo" },
  { name: "Web3 Foundation", src: "/brand/w3f.png", alt: "Web3 Foundation Logo" },
  // { name: "ElizaOS", src: "/brand/eliza-os.svg", alt: "ElizaOS Logo" },
  { name: "Wintermute Angels", src: "/brand/wintermute.svg", alt: "Angels from Wintermute Logo" },
  { name: "Polkadot Angels", src: "/brand/polkadot.svg", alt: "Angels from Polkadot Logo" },
  { name: "P2P.org Angels", src: "/brand/p2p.svg", alt: "Angels from P2P.org Logo" },
]

export const FOOTER_LINKS = [
  { href: "https://x.com/veri_sense", label: "Twitter", icon: <SiX className="w-4 h-4" /> },
  { href: "https://github.com/verisense-network", label: "GitHub", icon: <SiGithub className="w-4 h-4" /> },
  { href: "https://verisense.medium.com/", label: "Blog", icon: <SiMedium className="w-4 h-4" /> },
  { href: "https://discord.gg/cvQQe7ne", label: "Discord", icon: <SiDiscord className="w-4 h-4" /> },
  { href: "https://t.me/verisense_official", label: "Telegram", icon: <SiTelegram className="w-4 h-4" /> },
]
