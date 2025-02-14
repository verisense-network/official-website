"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Link from "next/link";

const HeaderMenus = () => {
  const pathname = usePathname();

  const LINKS = [
    {
      title: "New Applicability",
      children: [
        { title: "AI  (Aitonomy.world)", href: "https://aitonomy.world" },
        { title: "Rustcc.cn", href: "https://rustcc.cn" },
        { title: "Bitcoin (coming)", href: "" },
        { title: "Solana (coming)", href: "" },
        { title: "Ethereum (coming)", href: "" },
      ],
    },
    {
      title: "Learn",
      children: [
        { title: "Whitepaper", href: "https://github.com/verisense-network/papers/blob/main/whitepaper/verisense_whitepaper_20240818.pdf" },
        { title: "Research paper", href: "https://arxiv.org/pdf/2408.16094" },
        { title: "Blog", href: "https://verisense.medium.com/" },
      ],
    },
    {
      title: "Developer",
      children: [
        { title: "Docs", href: "https://docs.verisense.network" },
        { title: "Github", href: "https://github.com/verisense-network" },
      ],
    },
    {
      title: "Network",
      children: [
        { title: "SDK", href: "https://crates.io/crates/vrs-core-sdk" },
        { title: "Explorer", href: "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Falpha-devnet.verisense.network#/explorer" },
        { title: "Faucet", href: "" },
      ],
    },
    { title: "About", href: "/" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (link: string) => {
    window.open(link);
  };
  
  const toggleMenus = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className="flex items-center justify-center lg:hidden min-w-20">
        <Button onClick={toggleMenus} variant="ghost" color="brand" bgColor={menuOpen ? "#111" : ""} _hover={{ bgColor: "#111" }}>
          {pathname === "/"
              ? "About"
              : LINKS.find((item) => item.href === pathname)?.title}
            <ChevronDownIcon />
        </Button>
        <Box position="fixed" display={menuOpen ? "block" : "none"} top={0} left={0} right={0} bottom={0} zIndex={1000} bgColor="#191919" mt="75px" w="100vw" h="100vh">
          <Accordion defaultIndex={[0]}>
            {LINKS.map((link) => (
                <AccordionItem key={link.title} title={link.title} p={6}>
                  <AccordionButton color="white" fontSize={20} textColor={link.href === pathname ? "brand" : "#ddd"}>
                    {link.title}
                  </AccordionButton>
                  {link.children?.length && (
                    <AccordionPanel>
                      <Box mt={4} display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={4}>
                      {link.children?.map((child) => (
                        <Link
                          key={child.title}
                          {...(child.href ? { as: "a", target: "_blank", href: child.href } : { href: ""})}
                          style={{
                            display: "inline-block",
                            fontSize: 16,
                            color: !child.href ? "#666" : "#bbb",
                            whiteSpace: "nowrap",
                          }}
                          onClick={() => {
                            return child.href === "/" ? undefined : (child.href && handleClick(child.href));
                          }}
                        >
                          {child.title}
                        </Link>
                      ))}
                      </Box>
                  </AccordionPanel>
                  )}
                </AccordionItem>
            ))}
            </Accordion>
          </Box>
      </div>
      <div className="items-center justify-center hidden gap-6 lg:flex lg:gap-12 min-w-20">
        {LINKS.map((link) => {
          const isCurrentRoute = link.href === pathname;
          return (
            <div
              className="text-lg relative cursor-pointer"
              key={link.title}
              rel="noreferrer"
              onClick={() => {
                return link.href === "/" ? undefined : link.href && handleClick(link.href);
              }}
            >
              <Menu>
                <MenuButton className={isCurrentRoute ? "text-theme-color" : "!text-white/70"}>
                  {link.title}
                </MenuButton>
                {link.children?.length && (
                  <MenuList>
                    {link.children?.map((child) => (
                      <MenuItem
                        key={child.title}
                        {...(child.href ? { as: "a", target: "_blank", href: child.href } : {})}
                        textColor={!child.href ? "#666" : "#ddd"}
                      >
                        {child.title}
                      </MenuItem>
                  ))}
                </MenuList>
                )}
              </Menu>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(HeaderMenus);
