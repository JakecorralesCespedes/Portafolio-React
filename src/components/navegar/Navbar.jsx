import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {AcmeLogo} from "./AcmeLogo.jsx";
import {Link} from "react-router-dom";
export default function navbar() {
    return (
        <Navbar>
            <NavbarBrand>
                <AcmeLogo />
                <p className="font-bold text-inherit">REACT</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link to={"/"}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/src/" color="#page">
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Info
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <img src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg" width={50}/>
                <Link src="https://avatars.githubusercontent.com/u/91326972?v=4" alt="JakecorralesCespedes" href="https://github.com/JakecorralesCespedes"></Link>

            </NavbarContent>
        </Navbar>
    );
}
