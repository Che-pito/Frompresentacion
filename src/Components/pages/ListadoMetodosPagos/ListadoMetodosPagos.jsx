import { useState, useEffect } from "react";
import { buscarMetodoPago } from "../../../services/servicioMetodoPago.js";
import "../../Estilos/Style.css"

export function ListadoMetodosPagos(){

    const [datosApi, setDatosApi]=useState(null)
    const [estadoCarga, setEstadoCarga]=useState(true)

    // //Programas el useEfetc para garantizar que llamare al servicio y asegurar que traere los datos
    useEffect(function(){
        //Aca se llama ak servicio(back)
        buscarMetodoPago()
        .then(function(respuestaBack){
            setDatosApi(respuestaBack)
            setEstadoCarga(false)
        })
    }, [])
        if(estadoCarga==true){
            return(
                <>
                    <h3>Estamos Cargando</h3>
                </>
            )
        }else{
            return(
                <>
                <br/><br/><br/><br /><br />
                <h3 className="text-center mb-4 fw-bold fs-1 custom-font custom-color">LISTADO DE METODOS DE PAGO</h3>
                <br /><br /><br />
                <div className="container">
                    <div className="row row cols-1 row-cols-md-3 g-3">{
                        //Renderizando un arreglo de objetos
                        datosApi.map(function(metodopago){
                            return(
                                <div className="col">
                                    <div className="card h-100 shadow tarjeta">
                                        <h4><span className="label">Metodo Pago:</span>{metodopago.nombreMetodo}</h4>
                                        <h5><span className="label">Descripción:</span>{metodopago.descripcion}</h5>
                                    </div>
                                </div>
                            )
                        })
                        }                       
                    </div>
                </div>
                </>
            )
        }
}