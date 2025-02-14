
import { extendTheme } from "@chakra-ui/react";
import Menu from "./Menu"; 
import Modal from "./Modal"; 
import Progress from "./Progress";
import Accordion from "./Accordion";
 
const Theme = extendTheme({
  components: {
    Modal,
    Menu,
    Progress,
    Accordion,
  }, 
  colors:{
    // green: "#ABF51D",
    brand: "#ff847c",
  },
  initialColorMode: "dark", // 'dark' | 'light'
  useSystemColorMode: false,
} );

export default Theme;
