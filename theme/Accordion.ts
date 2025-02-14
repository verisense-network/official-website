import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

import { accordionAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    borderColor: "gray.700",
  },
});

export default defineMultiStyleConfig({ baseStyle });
