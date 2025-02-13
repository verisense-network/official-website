"use client";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  // useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const HeaderMenus = () => {
  const pathname = usePathname();

  const LINKS = [
    {
      title: "New Applicability",
      children: [
        { title: "AI  (Aitonomy.world)", href: "https://aitonomy.world" },
        { title: "Rustcc.cn", href: "https://rustcc.cn" },
        { title: "Bitcoin", href: "https://bitcoin.com" },
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

  const handleClick = (link: string) => {
    window.open(link);
  };

  return (
    <>
      <div className="flex items-center justify-center lg:hidden min-w-20">
        <Menu>
          <MenuButton className="text-theme-color text-[14px] lg:text-[20px]">
            {pathname === "/"
              ? "About"
              : LINKS.find((item) => item.href === pathname)?.title}
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            {LINKS.map((link) => (
              link.children?.length ? (
                <MenuGroup key={link.title} title={link.title} color={"#999"}>
                  {link.children.map((child) => (
                    <MenuItem
                      key={child.title}
                      {...(child.href ? { as: "a", target: "_blank", href: child.href } : {})}
                      textColor={!child.href ? "#666" : "#ddd"}
                      onClick={() => {
                        return child.href === "/" ? undefined : (child.href && handleClick(child.href));
                      }}
                    >
                      {child.title}
                    </MenuItem>
                  ))}
                </MenuGroup>
              ) : (
                <MenuItem
                  className={clsx({ "text-theme-color": link.href === pathname })}
                  key={link.href}
                  onClick={() => {
                    return link.href === "/" ? undefined : (link.href && handleClick(link.href));
                  }}
                >
                  {link.title}
                </MenuItem>
              )
            ))}
          </MenuList>
        </Menu>
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
