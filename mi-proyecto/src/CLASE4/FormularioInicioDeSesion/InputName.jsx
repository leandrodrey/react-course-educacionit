import React, {useState} from "react";

function InputName(){

    //HOOK
    const [nombre, setNombre] = useState("");
    const [cumpleConOchoCaracteres, setCumpleConOchoCaracteres] = useState(false);

    const guardarName = (event) =>{
        let nameIngresado = event.target.value
        setNombre(nameIngresado)
        tieneOchoCaracteresOMas()
    }

    const tieneOchoCaracteresOMas = () => {
        if (nombre.length <= 8) {
            setCumpleConOchoCaracteres(false)
        } else {
            setCumpleConOchoCaracteres(true)
        }
    }

    return (
        <React.Fragment>
            <input type="text" placeholder="Ingresar Usuario" value={nombre} onChange={(e)=> {guardarName(e)}} />
            {cumpleConOchoCaracteres ? "" : "Tiene que tener ocho caracteres"}
        </React.Fragment>
    )
}

export default InputName;
