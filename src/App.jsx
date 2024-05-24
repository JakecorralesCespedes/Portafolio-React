
import './App.css'
import Inicio from "./Inicio/Inicio.jsx";
import Proyectos from "./proyectos/Proyectos.jsx";
import InfoPersonal from "./InfoPersonal/InfoPersonal.jsx";
import Menu from "./Menu/Menu.jsx";




export default function App() {
  return (
      <div>
          <Menu />
          <Inicio />
          <Proyectos />
          <InfoPersonal />
      </div>


  );
}



