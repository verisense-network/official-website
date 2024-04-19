import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

import { progressAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(progressAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  filledTrack: {
    // this will style the MenuButton component
    bg: "#ABF51D",
  },
  track: {
    bg: "#1E2224",
  },
});

export default defineMultiStyleConfig({ baseStyle });
