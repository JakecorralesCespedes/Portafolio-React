import React from "react";
import {Button, Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {Link} from "react-router-dom";

export default function Inicio() {

    const list = [

        {
            title: "SistemaGestionLibros",
            img: "src/assets/repositorio1.png",
            fecha: "Nov 11, 2023",
            Link: "https://github.com/JakecorralesCespedes/proyecto-final-programacion-2.git",
        },

        {
            title: "Uber Eats",
            img: "src/assets/repositorio2.png",
            fecha: "April 10, 2024",
            Link: "https://github.com/JakecorralesCespedes/Proyecto_final.git"
        },

        {
            title: "Phonebook",
            img: "src/assets/repositorio3.png",
            fecha: "May 16, 2024",
            Link: "https://github.com/JakecorralesCespedes/clase_3.git"
        },
        {
            title: "Color Flipper",
            img: "src/assets/repositorio4.png",
            fecha: "May 22, 2024",
            Link: "https://github.com/JakecorralesCespedes/EC3.git"
        },
        {
            title: "Alert msg",
            img: "src/assets/repositorio5.png",
            fecha: "May 23, 2024",
            Link: "https://github.com/JakecorralesCespedes/clase4.git"
        },
        {
            title: "Primer perfil personal HTML",
            img: "src/assets/repositorio6.png",
            fecha: "May 12, 2024",
            Link: "https://github.com/JakecorralesCespedes/HTML_perfil_personal.git"
        },
        {
            title: "Primer perfil personal HTML y Css",
            img: "src/assets/repositorio7.png",
            fecha: "May 15, 2024",
            Link: "https://github.com/JakecorralesCespedes/HTML_perfil_personal/tree/perfil_css"
        },
        {
            title: "Calculadora con implementacion localStorage",
            img: "src/assets/repositorio8.png",
            fecha: "May 30, 2024",
            Link: "https://github.com/JakecorralesCespedes/miniproyecto1.git"
        },
        {
            title: "todo-app-api",
            img: "src/assets/repositorio9.png",
            fecha: "Jun 13, 2024",
            Link: "https://github.com/JakecorralesCespedes/todo-app-api.git"
        },
        {
            title: "Cambio de moneda conexion con api",
            img: "src/assets/repositorio10.png",
            fecha: "Jun 13, 2024",
            Link: "https://github.com/JakecorralesCespedes/EC6.git"
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
                    github
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
