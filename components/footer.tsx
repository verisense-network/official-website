import Link from "next/link"
import Logo from "./logo"
import { FOOTER_LINKS } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row md:justify-center items-center gap-4">
          <Logo />
          <div className="flex gap-4">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.href} href={link.href} target="_blank" className="flex items-center gap-2">
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Verisense Network. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
