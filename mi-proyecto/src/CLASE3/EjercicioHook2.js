import {useState} from "react";

function EjercicioHook2(){

    //HOOK
    const [contadorHook, setContadorHook] = useState(0);

    return (
        <div onClick={setContadorHook}>
            Contador: {contadorHook}
            {contadorHook === 0 ? "pepe" : "pipo"}
            {contadorHook === 1 ? "pepe" : "pipo"}
            {contadorHook === 2 ? "pepe" : "pipo"}
        </div>
    )
}

export default EjercicioHook2;
