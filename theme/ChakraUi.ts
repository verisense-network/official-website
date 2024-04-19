
import { extendTheme } from "@chakra-ui/react";
import Menu from "./Menu"; 
import Modal from "./Modal"; 
import Progress from "./Progress";
 
const Theme = extendTheme({
  components: {
    Modal,
    Menu,
    Progress
  }, 
  colors:{
    // green: "#ABF51D",
    brand: {
      100: "#f7fafc", 
      900: "#1a202c",
    },
  },
  initialColorMode: "dark", // 'dark' | 'light'
  useSystemColorMode: false,
} );

export default Theme;
