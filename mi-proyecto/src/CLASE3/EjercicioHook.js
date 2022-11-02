import {useState} from "react";

function EjercicioHook(){

    //HOOK
    const [contadorHook, setContadorHook] = useState(0);

    const funcionContadora = () =>{
        setContadorHook(contadorHook + 1)
    }

    const funcionRestadora = () =>{
        setContadorHook(contadorHook - 1)
    }

    return (
        <div onClick={funcionContadora} onContextMenu={funcionRestadora}>
            Contador: {contadorHook}
        </div>
    )
}

export default EjercicioHook;
