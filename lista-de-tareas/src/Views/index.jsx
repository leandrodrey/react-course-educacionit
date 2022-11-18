import ItemTarjeta from "../Components/ItemTarjeta";

function MainView() {

    const json = [
        {id: "1", titulo : "Titulo 1", detalle: "Detalle 1"},
        {id: "2", titulo : "Titulo 2", detalle: "Detalle 2"},
        {id: "3", titulo : "Titulo 3", detalle: "Detalle 3"}
    ]

    return (
        <div>

            {json.map((item) => (
                <ItemTarjeta
                    key={`itemTarjeta-${item.id}`}
                    titulo={item.titulo}
                    detalle={item.detalle}
                    id={item.id}
                />
            ))}

        </div>
    )

}

export default MainView;
