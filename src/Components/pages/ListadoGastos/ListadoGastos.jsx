import { useState, useEffect } from "react";
import { buscarGasto } from "../../../services/servicioGasto.js";
import "../../Estilos/Style.css"

export function ListadoGastos() {
    //Simulando gastos que vienen del back
   
    const [datosApi, setDatosApi] = useState(null)
    const [estadoCarga, setEstadoCarga] = useState(true)

    // //Programas el useEfetc para garantizar que llamare al servicio y asegurar que traere los datos
    

     useEffect(function(){ 
        //Aca se llama al sevicio(back)
        buscarGasto()
        .then(function(respuestaBack){
            //Se carga la variable de estado con los datos del servicio y se cambia la variable de estado de la carga
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
            return (
                <>                    
                    <br /><br /><br /><br /><br />
                    <h3 className="text-center mb-4 fw-bold fs-1 custom-font custom-color">LISTADO DE GASTOS</h3>
                    <br /><br /><br />
                    <div className="container">
                        <div className="row row cols-1 row-clos-md-3 g-3">
                            {
                                //Renderizando un arreglo de objetos
                                datosApi.map(function (gasto) {
                                    return (
                                        <div className="col">
                                            <div className="card h-100 shadow tarjeta">
                                                <h4><span className="label">Monto:</span> {gasto.monto}</h4>
                                                <h5><span className="label">Descripcion:</span> {gasto.descripcion}</h5>
                                                <h5><span className="label">Fecha:</span>: {gasto.fecha}</h5>
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

    