import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
  
import { menuAnatomy } from '@chakra-ui/anatomy' 

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

  // define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
    fontWeight: 'medium', 
  },
  list: {
    // this will style the MenuList component 
    border: 'none',
    bg: '#191919', 
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: 'white',
    bg: "#00000000",
    _hover: {  
      bg: "blackAlpha.700"
    },
    _focus: {  
      bg: "blackAlpha.100"
    },
  },
  
})

export default defineMultiStyleConfig({ baseStyle })