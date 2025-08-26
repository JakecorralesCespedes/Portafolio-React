import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

const skillData = [
    { key:"1", name:"HTML", nivel:"Intermedio" },
    { key:"2", name:"CSS", nivel:"Intermedio" },
    { key:"3", name:"JavaScript", nivel:"Intermedio" },
    { key:"4", name:"React", nivel:"Intermedio" },
    { key:"5", name:"Python", nivel:"Intermedio" },
    { key:"6", name:"Git", nivel:"Intermedio" },
    { key:"7", name:"C++", nivel:"Básico" },
    { key:"8", name:"Docker", nivel:"Básico" },
    { key:"9", name:"Bases de Datos", nivel:"Básico" }
];

const educationData = [
    { key:"1", name:"Primaria", estado:"Completado" },
    { key:"2", name:"Secundaria", estado:"Completado" },
    { key:"3", name:"Universidad (Ing. Sistemas)", estado:"En curso" }
];

const courseData = [
    { key:"1", name:"Técnico Fotografía Profesional", estado:"En curso" },
    { key:"2", name:"Comercio Digital", estado:"En curso" },
    { key:"3", name:"Fundamentos de Python 1", estado:"Completado" },
    { key:"4", name:"Fundamentos de Python 2", estado:"Completado" },
    { key:"5", name:"JavaScript Essentials 1", estado:"En curso" },
    { key:"6", name:"JavaScript Essentials 2", estado:"En curso" },
    { key:"7", name:"Introducción Ciencia de Datos", estado:"En curso" }
];

function SimpleTable({ title, data, cols }){
    return (
        <div className="panel fade-up" style={{padding:"20px 20px 12px"}}>
            <h3 className="headline" style={{marginTop:0, fontSize:"1rem"}}>{title}</h3>
            <Table aria-label={title} removeWrapper>
                <TableHeader>
                    {cols.map(c => <TableColumn key={c.key}>{c.label}</TableColumn>)}
                </TableHeader>
                <TableBody>
                    {data.map(row => (
                        <TableRow key={row.key}>
                            {cols.map(c => <TableCell key={c.key}>{row[c.key]}</TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default function Habilidades(){
    return (
        <section className="container section" aria-labelledby="skills-edu-title">
            <h2 id="skills-edu-title" className="headline gradient-text">Resumen estructurado</h2>
            <p className="lead" style={{maxWidth:720}}>Capacidades técnicas y formación presentadas de forma clara. Priorizo fortalecer bases sólidas (lógica, patrones, pruebas) y avanzar hacia mayor profundidad en arquitectura frontend.</p>
            <div className="grid-auto mt-5" style={{alignItems:"start"}}>
                <SimpleTable title="Habilidades técnicas" data={skillData} cols={[{key:"name",label:"Habilidad"},{key:"nivel",label:"Nivel"}]} />
                <SimpleTable title="Educación" data={educationData} cols={[{key:"name",label:"Programa"},{key:"estado",label:"Estado"}]} />
                <SimpleTable title="Cursos / Certificados" data={courseData} cols={[{key:"name",label:"Curso"},{key:"estado",label:"Estado"}]} />
            </div>
        </section>
    );
}