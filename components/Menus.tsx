"use client";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  // useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const linksToProduction = [
  { title: "Papers", href: "https://github.com/verisense-network/papers" },
  { title: "Github", href: "https://github.com/verisense-network" },
  { title: "Docs", href: "https://docs.verisense.network" },
  { title: "About", href: "/" },
];
const linksToTest = [
  { title: "Papers", href: "https://github.com/verisense-network/papers" },
  { title: "Github", href: "https://github.com/verisense-network" },
  { title: "Docs", href: "https://docs.verisense.network" },
  { title: "About", href: "/" },
];

const HeaderMenus = () => {
  const pathname = usePathname();
  const links =
    process.env.NODE_ENV !== "production" ? linksToTest : linksToProduction;

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
              : links.find((item) => item.href === pathname)?.title}
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
            {links.map((link) => (
              <MenuItem
                className={clsx({ "text-theme-color": link.href === pathname })}
                key={link.href}
                onClick={() => {
                  return link.href === "/" ? undefined : handleClick(link.href);
                }}
              >
                {link.title}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
      <div className="items-center justify-center hidden gap-6 lg:flex lg:gap-12 min-w-20">
        {links.map((link) => {
          const isCurrentRoute = link.href === pathname;

          return (
            <div
              className={clsx(
                "text-lg relative cursor-pointer",
                isCurrentRoute ? "text-theme-color" : "!text-white/70",
              )}
              key={link.title}
              rel="noreferrer"
              // onClick={link.href === "/" ? undefined : addToast}
              onClick={() => {
                return link.href === "/" ? undefined : handleClick(link.href);
              }}
            >
              <span>{link.title}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(HeaderMenus);
