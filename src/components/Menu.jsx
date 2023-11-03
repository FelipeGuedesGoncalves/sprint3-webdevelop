import { Link } from "react-router-dom"
import PortoBikeLogo from "../assets/portobikelogo.png"

export default function Menu(){

    return(
        <nav id="navmenu">
            <Link className="homeLogo" to='/' ><img className="homeLogoHide" id="portoBikeLogo" src={PortoBikeLogo} alt="" /></Link>
            <Link className="iconHome" to='/' >Página Inicial</Link>
            <Link className="iconVistoria" to='/vistoria' >Vistoria</Link>
            <Link className="iconPlanos" to='/planos' >Planos</Link>
            <Link className="iconBike" to='/minhasbicicletas' >Minhas Bicicletas</Link>
            <Link className="iconPerfil" to='/perfil' >Meu Perfil</Link>
        </nav>
    )
}