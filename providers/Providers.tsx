"use client";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Theme from "@/theme/ChakraUi";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider
      theme={Theme}
      toastOptions={{
        defaultOptions: {
          position: "bottom-right",
          duration: 30 * 60 * 1000,
          isClosable: true,
        },
      }}
    >
      {children}
    </ChakraProvider>
  );
}
