import {useState} from "react";

function EjemploInput1(){

    //HOOK
    const [nombre, setNombre] = useState(0);

    const guardarNombre = (event) =>{
        let nombreIngresado = event.target.value
        setNombre(nombreIngresado)
    }

    return (
        <div>
            <input type="text" onChange={(event)=> {guardarNombre(event)}} />
                {`${nombre}`}
        </div>
    )
}

export default EjemploInput1;
