import React from "react";
import {Button, Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {Link} from "react-router-dom";

export default function Inicio() {

    const list = [

        {
            title: "butterfly",
            img: "https://scontent.fsjo15-1.fna.fbcdn.net/v/t39.30808-6/357695606_1668271937001854_3716361967027399568_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GiLuvsv7H1sQ7kNvgFudXyA&_nc_ht=scontent.fsjo15-1.fna&oh=00_AYAo5tuWh3PBuAgUZl1uAduUBzWDFnN9ycVyLSX-ArYn4g&oe=666C4DE4",
            fecha: "June 27, 2023",
            Link: "https://www.instagram.com/p/CuAf9wkR5n2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },

        {
            title: "hummingbird",
            img: "https://scontent.fsjo15-1.fna.fbcdn.net/v/t39.30808-6/362010427_1677362479426133_366790540398514135_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=5MHaYYmfIUEQ7kNvgEV7aRA&_nc_ht=scontent.fsjo15-1.fna&oh=00_AYB-XeNOQ5vTLpz6Kd0BCZYIRPkVwKp9ew8JkAD02uepQA&oe=666C720B",
            fecha: "June 29, 2023",
        },

        {
            title: "Lemon",
            img: "https://scontent.fsjo15-1.fna.fbcdn.net/v/t39.30808-6/360154195_1676122229550158_3390695888814130946_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Oa6I1EJNEmkQ7kNvgEbsXCK&_nc_ht=scontent.fsjo15-1.fna&oh=00_AYCAltbfCz9hYobZE9kmlIXioDxK_qokWK-7rMsDeY_m4g&oe=666C58D3",
            price: "$5.30",
        },
        {
            title: "Avocado",
            img: "https://scontent.fsjo15-1.fna.fbcdn.net/v/t39.30808-6/359804242_1676122206216827_437515063327366150_n.jpg?stp=dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=icyE9pVpcx8Q7kNvgGTLUrL&_nc_ht=scontent.fsjo15-1.fna&oh=00_AYAC5QBV_8F0AkMvzjc4QzgQaPck_497P83PBVCHGou7AA&oe=666C6989",
            price: "$15.70",
        },
        {
            title: "Lemon 2",
            img: "/images/fruit-6.jpeg",
            price: "$8.00",
        },
        {
            title: "Banana",
            img: "/images/fruit-7.jpeg",
            price: "$7.50",
        },
        {
            title: "Watermelon",
            img: "/images/fruit-8.jpeg",
            price: "$12.20",
        },
    ];
    return (
        <>

                   <div className="gap-3.5 grid grid-cols-12 sm:grid-cols-3">
               {list.map((item, index) => (
                   <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
        <CardBody className="overflow-visible p-">
            <Image
                shadow="sm"
                radius="lg"
                width="100"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}

            />
        </CardBody>
        <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.fecha}</p>
            <Link to={item.Link}>
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
                Instagram
            </Button>
            </Link>
        </CardFooter>
        </Card>
    ))}

</div>

</>
    );
}
