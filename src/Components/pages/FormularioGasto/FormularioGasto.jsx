import { useState, useEffect } from "react"
import { registrarGasto } from "../../../services/servicioGasto.js";
import "../../Estilos/Style.css"
export function FormularioGasto(){

const [monto, setMonto] = useState('');
const [fecha, setFecha] = useState('');
const [descripcion, setDescripcion] = useState('');
const [nombre, setNombre] = useState('');

const[formularioEnviado,setFormularioEnviado]=useState(false)
const[datosFormulario,setDatosFormulario]=useState(null)

const[errores, setErrores] = useState({})

//useEfect para controlar el llamado al api
useEffect(function(){
    if(formularioEnviado==true){
        console.log("Me voy para el back a consumir")
        //console.log(datosFormulario)
        registrarGasto(datosFormulario)
        .then(function(respuestaBack){
            console.log(respuestaBack)
        })
        setFormularioEnviado(false)

    }
},[formularioEnviado])

function procesarFormulario(evento) {
    evento.preventDefault();  

     //Validar campos 
     const nuevosErrores={};

     if (!monto.trim()) nuevosErrores.monto="El monto no puede estar vacio";
     if (!fecha.trim()) nuevosErrores.fecha="La fecha es obligatoria"
     if (!nombre.trim()) nuevosErrores.nombre="El nombre es obligatorio"

     setErrores(nuevosErrores);

    if(Object.keys(nuevosErrores).length===0){
        const datosGasto = {
            monto:monto,
            fecha:fecha,
            descripcion:descripcion,
            nombre:nombre
        }

        setDatosFormulario(datosGasto)
        setFormularioEnviado(true)  
    } 
}
return (
    <>
        <br />
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <br /><br /><br />
                    <h3 className="text-center mb-4 fw-bold fs-1 custom-font custom-color">Registro de Gastos</h3>
                    <br /><br /><br />
                    <form className="p-4 bg-light border rounded-3 shadow-lg" onSubmit={procesarFormulario}>
                        <div className="row g-3">
                            <div className="col-md-12">
                                <label className="form-label">Nombre: <span className="text-danger">*</span> </label>
                                <input 
                                    type="text"
                                    className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
                                    value={nombre}
                                    onChange={function(evento) { setNombre(evento.target.value) }}
                                />
                                {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label className="form-label">Descripción: </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={descripcion}
                                    onChange={function(evento) { setDescripcion(evento.target.value) }}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Monto: <span className="text-danger">*</span> </label>
                                <input 
                                    type="number"
                                    className={`form-control ${errores.monto ? "is-invalid" : ""}`}
                                    value={monto}
                                    onChange={function(evento) { setMonto(evento.target.value) }}
                                />
                                {errores.monto && <div className="invalid-feedback">{errores.monto}</div>}
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <label className="form-label">Fecha: <span className="text-danger">*</span> </label>
                                <input
                                    type="date"
                                    className={`form-control ${errores.fecha ? "is-invalid" : ""}`}
                                    value={fecha}
                                    onChange={function(evento) { setFecha(evento.target.value) }}
                                />
                                {errores.fecha && <div className="invalid-feedback">{errores.fecha}</div>}
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success w-100 btn-lg mt-4">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    </>
)
 



 }