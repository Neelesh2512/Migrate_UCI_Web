import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
} from "@chakra-ui/react";

import styles from "/src/components/Navbar/index.module.css";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button } from "react-bootstrap";
import { forwardRef, useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";



const wallpaper_1 = "https://cdn.wallpapersafari.com/98/39/9My6KE.jpg";
const wallpaper_2 = "https://c4.wallpaperflare.com/wallpaper/459/528/47/faces-syringe-piling-up-figures-wallpaper-preview.jpg";



const wallpaper1 = () => {
  var wallpaper = document.getElementsByClassName("chat-body") as HTMLCollectionOf<HTMLElement>;
  wallpaper[0].style.backgroundImage = "url("+wallpaper_1+")";
  // setTheme("green");
  // localStorage.setItem("theme", "green");
}

const wallpaper2 = () => {
  var wallpaper = document.getElementsByClassName("chat-body") as HTMLCollectionOf<HTMLElement>;
  wallpaper[0].style.backgroundImage = "url("+wallpaper_2+")";
  // setTheme("red");
  // localStorage.setItem("theme", "red");
}

const original = () => {
  var wallpaper = document.getElementsByClassName("chat-body") as HTMLCollectionOf<HTMLElement>;
  wallpaper[0].style.backgroundImage = "none";
  wallpaper[0].style.backgroundColor = "white";
}

const SecNavbar = () => {
  // const [theme, setTheme] = useState(null);
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     setTheme(localStorage.getItem("theme"));
  //   }
    
  // },[])
  
const router = useRouter();
return (

  <Flex p="2" borderBottom="1px">
    <Box>
    <Menu>
        <MenuButton className={styles.menuBox}
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
          style={{width: "60px", height: "20px"}}
        />
        <MenuList className={styles.navbar}>
          <Link href="/">
          <MenuItem className={styles.item} >
            Home
          </MenuItem>
          </Link>
          <Link href="/profilepage">
          <MenuItem className={styles.item} >
            Profile Page
          </MenuItem>
          </Link>
          <MenuItem as={Submenu} />
        </MenuList>
    </Menu>
    </Box>

    
  </Flex>

  
)};

const Submenu = forwardRef((props, ref) => (
    <Menu>
      <MenuButton className={styles.item} style={{width:"100px"}}  >
        Wallpapers <ChevronDownIcon />
      </MenuButton>
      <MenuList className={styles.sublist}>
        <MenuItem className={styles.subitem}>
        <div onClick={original}  className={styles.wallbtn2}>Default wallpaper</div>
        </MenuItem>
        <MenuItem className={styles.subitem}>
        <div onClick={wallpaper1} className={styles.wallbtn1}>wallpaper 1</div>
        </MenuItem>
        <MenuItem className={styles.subitem}>
        <div onClick={wallpaper2} className={styles.wallbtn3}>wallpaper 2</div>
        </MenuItem>
      </MenuList>
    </Menu>
  ))

export default SecNavbar;
