import React from "react";
import {Card, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

// Intereses creativos curados: muestran detalle visual, paciencia y composición.
export default function Hobby(){
    const highlights = [
        {
            title: "Butterfly",
            img: "https://scontent.fsjo15-1.fna.fbcdn.net/v/t39.30808-6/357695606_1668271937001854_3716361967027399568_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=OWWelteaTwEQ7kNvgFgLIio&_nc_ht=scontent.fsjo15-1.fna&oh=00_AYDVx_jdKb3zfwwqzdrf5vHeh4B7ei2q38QD8sX5pf5xTw&oe=66790C64",
            fecha: "Jun 27 2023",
            link: "https://www.instagram.com/p/CuAf9wkR5n2/"
        },
        {
            title: "Toucan",
            img: "https://scontent.fsjo15-1.fna.fbcdn.net/v/t39.30808-6/360154195_1676122229550158_3390695888814130946_n.jpg?stp=dst-jpg_p960x960&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lMVMhWqZ-_UQ7kNvgFRDO8s&_nc_ht=scontent.fsjo15-1.fna&oh=00_AYBHWDsWtBK94WmjG7K5QF0trNI5-ZFp41XzV66VinQdGQ&oe=66791753",
            fecha: "Jun 29 2023",
            link: "https://www.instagram.com/p/CuAhAWyxGfg/"
        },
        {
            title: "Hummingbird",
            img: "https://scontent.fsjo15-1.fna.fbcdn.net/v/t39.30808-6/362010427_1677362479426133_366790540398514135_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wzBb1hVmM0EQ7kNvgGxoB8R&_nc_ht=scontent.fsjo15-1.fna&oh=00_AYCyyLuK67EDy1zBWOl0mYlxN2gwQmcMqkkUFyGXHhOtDA&oe=6679308B",
            fecha: "Jun 30 2023",
            link: "https://www.instagram.com/p/CuFnFvZR5fE/"
        }
    ];
    return (
        <section className="container section" aria-labelledby="creative-title">
            <h2 id="creative-title" className="headline gradient-text">Intereses & Creatividad</h2>
            <p className="lead" style={{maxWidth:640}}>La fotografía de naturaleza fortalece mi observación de detalle, paciencia y composición; habilidades que traslado al diseño de interfaces limpias y accesibles.</p>
            <div className="grid-auto mt-5">
                {highlights.map(item => (
                    <Card key={item.title} shadow="sm" className="project-card" role="figure" aria-label={`Fotografía ${item.title}`}>
                        <CardBody className="overflow-visible">
                            <Image radius="lg" alt={item.title} className="w-full object-cover" height={240} loading="lazy" src={item.img} />
                        </CardBody>
                        <CardFooter className="text-small justify-between" style={{alignItems:"center"}}>
                            <strong>{item.title}</strong>
                            <span style={{fontSize:"0.7rem", color:"var(--muted)"}}>{item.fecha}</span>
                            <Button as={"a"} href={item.link} target="_blank" rel="noopener noreferrer" size="sm" radius="full" className="btn-primary" style={{padding:"4px 14px", fontSize:"0.65rem"}}>Ver</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <p className="muted mt-4" style={{maxWidth:600}}>Mantengo esta sección breve para enfocarme en el valor profesional, mostrando únicamente ejemplos que reflejan consistencia y enfoque visual.</p>
        </section>
    );
}
