import { useState, useEffect } from "react";
import { buscarCategoria } from "../../../services/servicioCategoria.js";
import "../../Estilos/Style.css"

export function ListadoCategorias(){

    const [datosApi, setDatosApi]=useState(null)
    const [estadoCarga, setEstadoCarga]=useState(true)

    // //Programas el useEfetc para garantizar que llamare al servicio y asegurar que traere los datos
    useEffect(function(){
        //Aca se llama ak servicio(back)
        buscarCategoria()
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
                <br/><br/><br/><br />
                <h3 className="text-center mb-4 fw-bold fs-1 custom-font custom-color">LISTADO DE CATEGORIAS</h3>
                <br /><br />
                <div className="container">
                    <div className="row row cols-1 row-cols-md-3 g-3">{
                        //Renderizando un arreglo de objetos
                        datosApi.map(function(categoria){
                            return(
                                <div className="col">
                                    <div className="card h-100 shadow tarjeta">
                                        <h4><span className="label">Nombre Categoria:</span> {categoria.nombreCategoria}</h4>
                                        <h5><span className="label">Descripción:</span> {categoria.descripcion}</h5>
                                        <img src={categoria.fotoIcono} alt="img" />
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