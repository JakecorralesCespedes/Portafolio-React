import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Hero from "../ui/Hero.jsx";
import Skills from "../ui/Skills.jsx";
import repositorio1 from "../../assets/repositorio1.png";
import repositorio2 from "../../assets/repositorio2.png";
import repositorio3 from "../../assets/repositorio3.png";
import repositorio4 from "../../assets/repositorio4.png";
import repositorio5 from "../../assets/repositorio5.png";
import repositorio6 from "../../assets/repositorio6.png";
import repositorio7 from "../../assets/repositorio7.png";
import repositorio8 from "../../assets/repositorio8.png";
import repositorio9 from "../../assets/repositorio9.png";
import repositorio10 from "../../assets/repositorio10.png";

export default function Inicio() {
  const list = [
    {
      title: "SistemaGestionLibros",
      img: repositorio1,
      fecha: "Nov 11, 2023",
      Link: "https://github.com/JakecorralesCespedes/proyecto-final-programacion-2.git",
    },

    {
      title: "Uber Eats",
      img: repositorio2,
      fecha: "April 10, 2024",
      Link: "https://github.com/JakecorralesCespedes/Proyecto_final.git",
    },

    {
      title: "Phonebook",
      img: repositorio3,
      fecha: "May 16, 2024",
      Link: "https://github.com/JakecorralesCespedes/clase_3.git",
    },
    {
      title: "Color Flipper",
      img: repositorio4,
      fecha: "May 22, 2024",
      Link: "https://github.com/JakecorralesCespedes/EC3.git",
    },
    {
      title: "Alert msg",
      img: repositorio5,
      fecha: "May 23, 2024",
      Link: "https://github.com/JakecorralesCespedes/clase4.git",
    },
    {
      title: "Primer perfil personal HTML",
      img: repositorio6,
      fecha: "May 12, 2024",
      Link: "https://github.com/JakecorralesCespedes/HTML_perfil_personal.git",
    },
    {
      title: "Primer perfil personal HTML y Css",
      img: repositorio7,
      fecha: "May 15, 2024",
      Link: "https://github.com/JakecorralesCespedes/HTML_perfil_personal/tree/perfil_css",
    },
    {
      title: "Calculadora con implementacion localStorage",
      img: repositorio8,
      fecha: "May 30, 2024",
      Link: "https://github.com/JakecorralesCespedes/miniproyecto1.git",
    },
    {
      title: "todo-app-api",
      img: repositorio9,
      fecha: "Jun 13, 2024",
      Link: "https://github.com/JakecorralesCespedes/todo-app-api.git",
    },
    {
      title: "Cambio de moneda conexion con api",
      img: repositorio10,
      fecha: "Jun 13, 2024",
      Link: "https://github.com/JakecorralesCespedes/EC6.git",
    },
  ];
  return (
    <>
      <Hero />
      <Skills />
      <section className="container section" id="projects" aria-labelledby="projects-title">
        <h2 id="projects-title" className="headline gradient-text">Proyectos Destacados</h2>
        <p className="lead" style={{maxWidth:620}}>Selección de trabajos y ejercicios que reflejan aprendizaje continuo, buenas prácticas y uso de APIs, patrones y animaciones.</p>
        <div className="projects-wrapper gap-5 grid-auto mt-5">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-">
              <Image
                shadow="sm"
                radius="lg"
                width="100"
                alt={item.title}
                className="w-full object-cover"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <Link to={item.Link}>
                <Button radius="full" className="btn-primary" style={{padding:"6px 14px"}}>
                  GitHub
                </Button>
              </Link>
              <p className="text-default-500">{item.fecha}</p>
            </CardFooter>
          </Card>
        ))}
        </div>
      </section>
    </>
  );
}
