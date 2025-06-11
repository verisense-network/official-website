import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Layers, Shuffle, ShieldCheckIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

const applications = [
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Onchain Hosting &\n Execution",
    description:
      "Deploy and execute AI agents fully onchain with built-in verifiability and a seamless UX comparable to offchain serverless environments. Tap into rich LLM options - decentralized or centralized, mainstream or longtail. Your choice, your rules.",
    learnMoreLink: "/coming-soon",
  },
  {
    icon: <Shuffle className="h-8 w-8 text-primary" />,
    title: "Orchestration &\n Marketplace",
    description:
      "Discover, shop, and orchestrate agents into real-world utility with effortless interoperability. The first agent marketplace across hosting environments, platforms, and frameworks. No code, more fun. Real usage, real impact.",
    learnMoreLink: "/coming-soon",
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-primary" />,
    title: "Verification &\n Reputation",
    description:
      "With Verisense, AI agents become verifiable digital citizens—skilled, reliable, reputable, and backed by a proven track record. No black-box claims. Just immutable proof. Pick what you trust, and trust what you pick.",
    learnMoreLink: "https://dashboard.verisense.network/",
  },
]

export default function KeyApplicationsSection() {
  return (
    <section className="py-16 md:py-24 pb-30 md:pb-60">
      <div className="container relative mx-auto px-4">
        <Image src="/section-vector.svg" width={133} height={107} alt="Key Applications" className="absolute left-5 -bottom-25 md:-left-10 md:-bottom-40 -z-10" />
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Key Applications</h2>
          <p className="mt-4 text-muted-foreground">Tackling Three Fundamental Value Blocks</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {applications.map((app) => (
            <Card key={app.title} className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="items-center">
                <div className="p-3 bg-muted rounded-full mb-4 mx-auto">{app.icon}</div>
                <CardTitle className="text-3xl whitespace-break-spaces">{app.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base whitespace-break-spaces">{app.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <Button>
                  <Link
                    href={app.learnMoreLink}
                    target={app.learnMoreLink.includes("http") ? "_blank" : undefined}
                    rel={app.learnMoreLink.includes("http") ? "noopener noreferrer" : undefined}
                  >
                    Learn More
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
