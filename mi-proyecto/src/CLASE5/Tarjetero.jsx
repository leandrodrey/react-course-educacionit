import TarjetaDeUnaImagenV2 from "./TarjetaDeUnaImagenV2";

function Tarjetero() {

    return (
        <div>
            <TarjetaDeUnaImagenV2
                detalle="Pepito"
                precio="50"
                imagen="https://picsum.photos/200/300/?random=1"
            />

            <TarjetaDeUnaImagenV2
                detalle="Pepito"
                precio="2220"
                imagen="https://picsum.photos/200/300?random=2"
            />

            <TarjetaDeUnaImagenV2
                detalle="Pepito"
                precio="880"
                imagen="https://picsum.photos/200/300?random=3"
            />
        </div>
    )
}

export default Tarjetero;
