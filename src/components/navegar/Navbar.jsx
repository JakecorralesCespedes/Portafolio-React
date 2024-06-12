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
                    <Link to={"/Projects"}>
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to={"/Info"}>
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
                <Link to={"https://github.com/JakecorralesCespedes"}>
                <Button color="secondary" variant="contained">
                <img src="https://i.pinimg.com/736x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg" width={70}/>
                </Button>
                </Link>
            </NavbarContent>
        </Navbar>
    );
}
