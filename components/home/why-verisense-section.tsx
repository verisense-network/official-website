import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Sparkles, ShieldCheck, DollarSign, Puzzle, Award } from "lucide-react"
import Image from "next/image"

const list = [
  {
    title: "For Users",
    icon: <Users className="h-6 w-6 text-primary" />,
    benefits: [
      {
        icon: <ShieldCheck className="h-6 w-6 text-primary" />,
        title: "Verifiability & Accountability",
        description:
          "Agent's creation, interaction, and behavior is fully verifiable and auditable\nTrust and security by design, not by declaration",
      },
      {
        icon: <Award className="h-6 w-6 text-primary" />,
        title: "Reputation & Credibility",
        description:
          "Public, immutable logs build a track record of performance and experience\nPick the best, skip the rest - no more guessing in the dark",
      },
    ]
  },
  {
    title: "For Creators",
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    benefits: [
      {
        icon: <DollarSign className="h-6 w-6 text-primary" />,
        title: "Built-in Monetization",
        description:
          "Onchain agents tap into tokenization natively. Incentive-ready.\nMonetize earlier, deeper, and beyond subscriptions or pay-per-usage.",
      },
      {
        icon: <Puzzle className="h-6 w-6 text-primary" />,
        title: "LLM-Flexible & Modular",
        description: "Plug into any LLM - centralized or decentralized, mainstream or longtail.\nYour agents, your choice.",
      },
    ]
  }
]

export default function WhyVerisenseSection() {
  return (
    <section className="py-16 md:py-24 -mt-35 md:-mt-30">
      <div className="container relative mx-auto px-4">
        <Image src="/section-vector.svg" width={133} height={107} alt="Why Verisense" className="absolute right-5 top-50 -z-10 md:top-38" />
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-normal leading-tight">Cybernetic Contracts:<br />Where AI Agents Meet Onchain Execution</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mt-4 mx-auto">
            Probabilistic AI Joins Forces with Blockchain&apos;s Determinism<br />Giving Rise to Cybernetic Society with Accountability and Regulation
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {list.map((item) => (
            <Card key={item.title} className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-3xl gap-3">
                  {item.icon}
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {item.benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">{benefit.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold">{benefit.title}</h3>
                      <p className="mt-4 text-muted-foreground whitespace-break-spaces">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
