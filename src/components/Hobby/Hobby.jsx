import React from "react";
import {Button, Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {Link} from "react-router-dom";

export default function Hobby() {

    const list = [

        {
            title: "Butterfly",
            img: "https://scontent.fsjo15-1.fna.fbcdn.net/v/t39.30808-6/357695606_1668271937001854_3716361967027399568_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OWWelteaTwEQ7kNvgFgLIio&_nc_ht=scontent.fsjo15-1.fna&oh=00_AYDVx_jdKb3zfwwqzdrf5vHeh4B7ei2q38QD8sX5pf5xTw&oe=66790C64",
            fecha: "June 27, 2023",
            Link: "https://www.instagram.com/p/CuAf9wkR5n2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },

        {
            title: "Toucan",
            img: "https://scontent.fsjo15-1.fna.fbcdn.net/v/t39.30808-6/360154195_1676122229550158_3390695888814130946_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lMVMhWqZ-_UQ7kNvgFRDO8s&_nc_ht=scontent.fsjo15-1.fna&oh=00_AYBHWDsWtBK94WmjG7K5QF0trNI5-ZFp41XzV66VinQdGQ&oe=66791753",
            fecha: "June 29, 2023",
            Link: "https://www.instagram.com/p/CuAhAWyxGfg/"
        },

        {
            title: "Toucan",
            img: "https://scontent.fsjo15-1.fna.fbcdn.net/v/t39.30808-6/359804242_1676122206216827_437515063327366150_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eUeYZELzYKUQ7kNvgH78-2C&_nc_ht=scontent.fsjo15-1.fna&oh=00_AYB4uKtgC4J2Svzqn19mI8zVLNi_m-xqU3lymlp2csDTiA&oe=66792809",
            fecha: "June 27, 2023",
            Link: "https://www.instagram.com/p/CuAhAWyxGfg/"
        },
        {
            title: "Hummingbird",
            img: "https://scontent.fsjo15-1.fna.fbcdn.net/v/t39.30808-6/362010427_1677362479426133_366790540398514135_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wzBb1hVmM0EQ7kNvgGxoB8R&_nc_ht=scontent.fsjo15-1.fna&oh=00_AYCyyLuK67EDy1zBWOl0mYlxN2gwQmcMqkkUFyGXHhOtDA&oe=6679308B",
            fecha: "June 27, 2023",
            Link: "https://www.instagram.com/p/CuFnFvZR5fE/"

        },
    ];
    return (
        <>

            <div className="gap-3.5 grid grid-cols-10 sm:grid-cols-2">
                {list.map((item, index) => (
                    <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100"
                                alt={item.title}
                                className="w-full object-cover h-[450px]"
                                src={item.img}

                            />
                        </CardBody>
                        <CardFooter className="text-small justify-between">
                            <b>{item.title}</b>
                            <Link to={item.Link}>
                                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                                    Instagram
                                </Button>
                            </Link>
                            <p className="text-default-500">{item.fecha}</p>

                        </CardFooter>
                    </Card>
                ))}

            </div>

        </>
    );
}
