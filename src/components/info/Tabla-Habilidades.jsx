import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
    {
        key: "1",
        name: "Python",
        Nivel: "Intermedio",
    },

    {
        key: "2",
        name: "Java",
        Nivel: "Intermedio",
    },

    {
        key: "3",
        name: "C++",
        Nivel: "Basico",
    },

    {
        key: "4",
        name: "Html",
        Nivel: "Intermedio",
    },

    {
        key: "5",
        name: "CSS",
        Nivel: "Intermedio",
    },

    { key: "6",
        name: "JavaScript",
        Nivel: "Intermedio"
    },

    { key: "7",
        name: "React",
        Nivel: "Basico"
    },

    { key: "8",
        name: "Docker",
        Nivel: "Basico"
    },

    { key: "9",
        name: "base de datos",
        Nivel: "Basico"
    },

        { key: "10",
            name: "Git",
            Nivel: "Intermedio"
        },


];

const columns = [
    {
        key: "name",
        label: "Habilidades",
    },
    {
        key: "Nivel",
        label: "nivel",
    },
];

const rows2 = [
    {
        key: "1",
        name: "Primaria",
        Nivel: "Finalizado",
    },

    {
        key: "2",
        name: "Segundaria",
        Nivel: "Finalizado",
    },

    {
        key: "3",
        name: "Universidad",
        Nivel: "En Proceso",
    },
];


const columns2 = [
    {
        key: "name",
        label: "Educacion",
    },
    {
        key: "Nivel",
        label: "Estado",
    },
];

const rows3 = [
    {
        key: "1",
        name: "Tecnico fotografía profesional",
        Nivel: "En Proceso",
    },

    {
        key: "2",
        name: "Comercio Digital",
        Nivel: "En Proceso",
    },

    {
        key: "3",
        name: "Fundamentos de Python 1",
        Nivel: "Finalizado",
    },
    {
        key: "4",
        name: "Fundamentos de Python 2",
        Nivel: "Finalizado",
    },
    {
        key: "5",
        name: "JavaScript Essentials 1",
        Nivel: "En Proceso",
    },
    {
        key: "6",
        name: "JavaScript Essentials 2",
        Nivel: "En Proceso",
    },
    {
        key: "7",
        name: "Introducción a la ciencia de datos",
        Nivel: "En Proceso",
    },
];

const columns3 = [
    {
        key: "name",
        label: "Cursos y certificados",
    },
    {
        key: "Nivel",
        label: "Estado",
    },
];
export default function Habilidades() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '122vh'
                }}>

                <Table className="w-[600px] h-[400px]">
                    <TableHeader columns={columns}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows}>
                        {(item) => (
                            <TableRow key={item.key}>
                                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

                <br/>

                    <Table className="w-[600px] h-[400px]">
                        <TableHeader columns={columns2}>
                            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={rows2}>
                            {(item) => (
                                <TableRow key={item.key}>
                                    {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                <Table className="w-[600px] h-[400px]">
                    <TableHeader columns={columns3}>
                        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                    </TableHeader>
                    <TableBody items={rows3}>
                        {(item) => (
                            <TableRow key={item.key}>
                                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

            </div>
        </>
    );
}