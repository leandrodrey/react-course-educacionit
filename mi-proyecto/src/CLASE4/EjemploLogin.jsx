import {useState} from "react";

function EjemploLogin(){

    //HOOK
    const [password, setPassword] = useState("vacio");

    const guardarPassword = (event) =>{
        let passwordIngresado = event.target.value
        setPassword(passwordIngresado)
    }

    return (
        <div>
            <input type="password" value={password} onChange={(e)=> {guardarPassword(e)}} />
            {`${password}`}
        </div>
    )
}

export default EjemploLogin;
