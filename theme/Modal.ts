import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { defineStyle } from "@chakra-ui/styled-system";

import { modalAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(modalAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  dialogContainer: {
    zIndex: 101,
  },
  overlay: {
    bg: "blackAlpha.800", //change the background
    zIndex: 100,
  },
  dialog: {
    // this will style the MenuList component
    bg: "#191919",
    color: "white",
    zIndex: 103,
    position: "relative",
    _dark: {
      bg: "#191919",
      color: "white",
    },
  },
  closeButton: {
    _hover: {
      bg: "blackAlpha.300",
    },
    zIndex: 104,
  },
});

const lg = defineStyle({
  px: 4,
  py: 4,
});

const sizes = {
  lg: definePartsStyle({ dialog: lg }),
};

export default defineMultiStyleConfig({ baseStyle, sizes });
