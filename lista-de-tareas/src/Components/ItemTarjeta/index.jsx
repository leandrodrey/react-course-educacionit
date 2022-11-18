import {useState} from "react";
import './style.css';
import Paper from "../Paper";
import Contenedor from "../Contenedor";


function ItemTarjeta(props) {

    const [titulo, setTitulo] = useState(props.titulo)
    const [editable, setEditable] = useState(false)

    const actualizarTitulo = (event) => {
        let elInputTextTitle = event.target
        let tituloIngresado = elInputTextTitle.value
        setTitulo(tituloIngresado)
    }

    return (
        <Paper>
            <Contenedor direction="column" justify="content">
                <input
                    class="tarjeta__input"
                    className={editable === true ? "editable" : "no-editable"}
                    type="text"
                    value={titulo}
                    onChange={actualizarTitulo}
                    readOnly={editable === false}
                />

                <textarea
                    class="tarjeta__textarea"
                    className={editable === true ? "editable" : "no-editable"}
                    readOnly={editable === false}
                >
                    {props.detalle}
                </textarea>

                <Contenedor direction="column" justify="content">
                    {
                        editable === false
                            ?
                            <button onClick={() => (setEditable(true))}>Editable</button>
                            :
                            <button onClick={() => (setEditable(false))}>Guardar</button>
                    }
                    <button onClick={() => (setEditable(false))}>Eliminar</button>
                </Contenedor>

            </Contenedor>
        </Paper>
   )

}

export default ItemTarjeta;
