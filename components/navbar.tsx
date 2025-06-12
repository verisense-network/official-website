"use client"

import Logo from "./logo"
import { EXTERNAL_LINKS, NAV_LINKS } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const renderNavLinks = (isMobile: boolean) => (
    <>
      {NAV_LINKS.map((link) => (
        <Button variant="ghost" key={link.label} onClick={() => isMobile && setMobileMenuOpen(false)}>
          <Link href={link.href} target="_blank">{link.label}</Link>
        </Button>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            {EXTERNAL_LINKS.product.label} <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {EXTERNAL_LINKS.product.links.map((link) => (
            <DropdownMenuItem key={link.label} asChild>
              <Link href={link.href}>{link.label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            {EXTERNAL_LINKS.developer.label} <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {EXTERNAL_LINKS.developer.links.map((link) => (
            <DropdownMenuItem key={link.label} asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            {EXTERNAL_LINKS.community.label} <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {EXTERNAL_LINKS.community.links.map((link) => (
            <DropdownMenuItem key={link.label} asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="ghost" asChild>
        <a href={EXTERNAL_LINKS.betanet.href} target="_blank" rel="noopener noreferrer">
          {EXTERNAL_LINKS.betanet.label}
        </a>
      </Button>
    </>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-1">{renderNavLinks(false)}</nav>
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 p-4">
                <Logo />
                {renderNavLinks(true)}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
