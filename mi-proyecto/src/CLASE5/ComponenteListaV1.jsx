import ItemListaDeTareas from "./ItemListaDeTareas";

function ComponenteListaV1(){

    return (
        <div>
            <h3>Lista de Pendientes</h3>
            <ol>
                <ItemListaDeTareas textoTarea={"Comprar Carne"} />
                <ItemListaDeTareas textoTarea={"Sacar turno con el dentista"} />
                <ItemListaDeTareas textoTarea={"Buscar nuevo departamento"} />
            </ol>
        </div>
    )
}

export default ComponenteListaV1;
