import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import {Logo} from "./Logo.jsx";
import {Link} from "react-router-dom";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import github from "../../assets/github.svg";
import youtube from "../../assets/youtube.svg";
export default function navbar() {
    return (
        <Navbar>
            <NavbarBrand>
                <Logo />
                <p className="font-bold text-inherit">REACT</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link to={"/"}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link to={"/Hobby"}>
                        Hobby
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link to={"/Info"}>
                        Info
                    </Link>
                </NavbarItem>

            </NavbarContent>
            <NavbarContent justify="end">
                <div id={"redes"}>
                    <Link
                        to={"https://www.linkedin.com/in/jake-corrales-39058a295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}>
                        <img src={linkedin} width={35}/>
                    </Link>
                </div>
                <div id={"redes"}>
                    <Link to={"https://github.com/JakecorralesCespedes"}>
                        <img src={github} width={40}/>
                    </Link>
                </div>
                <div id={"redes"}>
                    <Link to={"https://www.youtube.com/@itz_jakecr8286"}>
                        <img src={youtube} width={40}/>
                    </Link>
                </div>
                <div id={"redes"}>
                    <Link to={"https://www.instagram.com/corralesjake/"}>
                        <img src={instagram} width={40}/>
                    </Link>
                </div>
            </NavbarContent>
        </Navbar>
    );
}
