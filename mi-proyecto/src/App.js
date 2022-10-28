import './App.css';
import ComponenteTituloH1 from "./CLASE2/ComponenteTituloH1";
import ComponenteLista from "./CLASE2/ComponenteLista";
import ComponenteTituloConParrafo from "./CLASE2/ComponenteTituloConParrafo";
import TituloH1ConEstilo from "./CLASE2/TituloH1ConEstilo";
import Ejercicio3 from "./CLASE2/Ejercicio3";
import Ejercicio4 from "./CLASE2/Ejercicio4";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ComponenteTituloH1></ComponenteTituloH1>
                <ComponenteLista></ComponenteLista>
                <ComponenteTituloConParrafo></ComponenteTituloConParrafo>
                <TituloH1ConEstilo></TituloH1ConEstilo>
                <Ejercicio3></Ejercicio3>

                <Ejercicio4></Ejercicio4>
            </header>
        </div>
    );
}

export default App;
