"use client";
import React, { useCallback } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const linksToProduction = [
  { title: "About", href: "/" },
  { title: "Restaking", href: "/restaking" },
  { title: "Marketplace", href: "/marketplace" },
  { title: "Ecosystem", href: "/ecosystem" },
];
const linksToTest = [
  { title: "About", href: "/" },
  { title: "Restaking", href: "/restaking/" },
  { title: "Marketplace", href: "/marketplace/" },
  { title: "Ecosystem", href: "/ecosystem/" },
];

const HeaderMenus = () => {
  const pathname = usePathname();
  const links =
    process.env.NODE_ENV !== "production" ? linksToTest : linksToProduction;
  const toast = useToast();
  const addToast = useCallback(() => {
    toast({
      title: "Coming Soon",
      position: "top",
      isClosable: true,
      duration: 3000,
      status: "success",
    });
  }, [toast]);
  return (
    <>
      <div className="flex items-center justify-center md:hidden min-w-20">
        <Menu>
          <MenuButton className="text-theme-color text-[14px] md:text-[20px]">
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
                onClick={link.href === "/" ? undefined : addToast}
              >
                {link.title}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
      <div className="items-center justify-center hidden gap-6 md:flex md:gap-12 min-w-20">
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
              onClick={link.href === "/" ? undefined : addToast}
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
