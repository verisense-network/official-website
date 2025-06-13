import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Network } from "lucide-react"

const technologies = [
  {
    icon: <Network className="h-10 w-10 mb-4 text-primary" />,
    title: "Active Blockchain",
    subtitle: "This is not an upgrade. It’s a paradigm shift of blockchain for dAGI.",
    points: [
      "Most blockchains are passive, relying on data feed via oracles, unsuitable for autonomous AI agents and real-world interaction.",
      "Active blockchain enables active data I/O: fetch, verify, and act on real-world data with guaranteed execution.",
      "For the first time, blockchains can natively host and run AI agents as cybernetic contracts.",
    ],
  },
  {
    icon: <Cpu className="h-10 w-10 mb-4 text-primary" />,
    title: "Cybernetic Contract Runtime",
    subtitle: "This is not just necessary. This is inevitable.",
    points: [
      "Off-chain agents are opaque and fragile — no audit trail, platform-dependent, and autonomy can be revoked.",
      "On-chain agents are verifiable and autonomous with cryptographic identity and immutable histories.",
      "Cybernetic contract enables AI as digital citizens with transparent behavior, operating within provable, tamper-proof boundaries.",
    ],
  },
]

export default function KeyTechnologySection() {
  return (
    <section className="py-16 md:py-24 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Key Technology</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {technologies.map((tech) => (
            <Card key={tech.title} className="flex relative flex-col shadow-lg">
              <div className="absolute top-8 left-5">{tech.icon}</div>
              <CardHeader className="items-center text-center">
                <CardTitle className="flex items-center text-2xl max-w-2/3 md:max-w-full mx-auto min-h-18 md:text-3xl">{tech.title}</CardTitle>
                <p className="text-muted-foreground mt-1 font-light">{tech.subtitle}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3 text-muted-foreground">
                  {tech.points.map((point, index) => (
                    <li key={index} className="flex items-start text-lg">
                      <span className="text-primary mr-2 mt-1">・</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
