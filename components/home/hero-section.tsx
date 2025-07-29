import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="py-20 md:py-36 pb-40 md:pb-60 bg-gradient-to-br from-background to-muted/30 bg-[url('/hero-bg.svg')] bg-center bg-size-[150%] bg-no-repeat md:bg-contain">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-xl font-semibold text-primary">Verisense Network</h1>
        <p className="text-xl font-semibold text-primary">Rethinking blockchain for dAGI</p>
        <p className="text-4xl md:text-6xl font-semibold leading-tight mt-1">
          Turning AI Agents into<br />Cybernetic Contracts
        </p>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mt-5">
          An Agentic Service Platform for Onchain Intelligence<br />Hosting, Orchestration and Reputation for Onchain Agents
        </p>
        <div className="space-x-4 mt-12">
          <Link href="https://sensespace.xyz" target="_blank">
            <Button size="lg" className="cursor-pointer">
              Enter Cybernetic Society
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
