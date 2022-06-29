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

import styles from "./index.module.css";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button } from "react-bootstrap";
import { forwardRef } from "react";
import { useRouter } from "next/router";



const Navbar = () => {

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
        </MenuList>
    </Menu>
    </Box>
  </Flex>
)};

export default Navbar;



{/* <Menu>
              <MenuButton className={styles.item} style={{width: "100px"}}>
              Wallpaper
              </MenuButton>
              <MenuList>
                <MenuItem className={styles.item} >
                <button onClick={wallpaper1} className={styles.wallbtn}>wallpaper 1</button>
                </MenuItem>{/* <Menu>
              <MenuButton className={styles.item} style={{width: "100px"}}>
              Wallpaper
              </MenuButton>
              <MenuList>
                <MenuItem className={styles.item} >
                <button onClick={wallpaper1} className={styles.wallbtn}>wallpaper 1</button>
                </MenuItem>
                <MenuItem className={styles.item}>
                <button onClick={original} className={styles.wallbtn}>Default wallpaper</button>
                </MenuItem>
              </MenuList>
            </Menu>
                <MenuItem className={styles.item}>
                <button onClick={original} className={styles.wallbtn}>Default wallpaper</button>
                </MenuItem>
              </MenuList>
            </Menu> */}