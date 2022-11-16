import LogoStream from "./LogoStream";
import logo from './images/hbo-max-logo.png';
import Caja from "./Caja";
import Titulo from "./Titulo";
import './css/styles.css'

function ComponenteML(props) {

    return (
        <div className="mainCaja">
            <div className="mainCaja--item">
                <LogoStream logo = {logo} logoAlt = "Pepito Alt" />
                <Titulo dias="3 Dias" titulo="Mengano" empresa="Paramount" />
            </div>

            <div className="mainCaja--item">
                <LogoStream logo = {logo} logoAlt = "Pepito Alt" />
                <Titulo dias="77 Dias" titulo="Mengano" empresa="HBO" />
            </div>

            <div className="mainCaja--item">
                <LogoStream logo = {logo} logoAlt = "Pepito Alt" />
                <Titulo dias="8 Dias" titulo="Mengano" empresa="Paramount" />
            </div>
        </div>
    )
}

export default ComponenteML;
