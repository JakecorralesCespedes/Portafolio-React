import React from "react";
import {ScrollShadow} from "@nextui-org/react";
import {Image} from "@nextui-org/react";
import {Contenido} from "./Contenido.jsx";
import Habilidades from "./Tabla-Habilidades.jsx";






export default function Info() {
    return (
        <>
            <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60vh'
        }}>
        <Image
            width={500}
            height={400}
            src="https://app.requestly.io/delay/5000/https://scontent.fsjo15-1.fna.fbcdn.net/v/t39.30808-6/448196222_1864616757367370_8688498997027796851_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=w2jCMapGElkQ7kNvgH6RL1e&_nc_ht=scontent.fsjo15-1.fna&oh=00_AYC3g8DbGqV5Cf9tVOIFoFQ_lMjRhJXLslL6sFBXbKhvBA&oe=666C89CC"/>
        </div>

    <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '75vh'
        }}>
            <ScrollShadow size={250} className="w-[600px] h-[400px]">
                <Contenido />
            </ScrollShadow>
        </div>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '120vh'
            }}>
                <Habilidades />
            </div>
    </>
    );
}