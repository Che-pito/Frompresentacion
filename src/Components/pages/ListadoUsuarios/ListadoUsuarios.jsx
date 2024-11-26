import { useState, useEffect } from "react";
import { buscarUsuario } from "../../../services/servicioUsuario.js";
import "../../Estilos/Style.css"


export function ListadoUsuarios(){
    
    const[datosApi, setDatosApi]=useState(null)
    const[estadoCarga,setEstadoCarga]=useState(true)

    // //Programas el useEfetc para garantizar que llamare al servicio y asegurar que traere los datos
    

    useEffect(function(){
        //Aca se llama al sevicio(back)
        buscarUsuario()
        .then(function(respuestaBack){
            //console.log(respuestaBack)
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
            <br /><br /><br /><br /><br />
            <h3 className="text-center mb-4 fw-bold fs-1 custom-font custom-color"> LISTADO DE USUARIOS</h3>
            <br /><br /><br />
            <div className="container">
                <div className="row row cols-1 row-cols-md-3 g-3">
                {
                //Renderizando un arreglo de objetos
                datosApi.map(function(usuario){
                    return(
                        <div className="col">
                            <div className="card h-100 shadow tarjeta">
                                <h5><span className="label">Nombre:</span>{usuario.nombre}</h5>
                                <h5><span className="label">Apellido:</span> {usuario.apellido}</h5>
                                <h6><span className="label">Ciudad:</span> {usuario.ciudad}</h6>
                                <h6><span className="label">Telefono:</span> {usuario.telefono}</h6>
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