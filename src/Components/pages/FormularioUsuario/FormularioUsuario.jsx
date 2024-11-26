import { useState, useEffect } from "react";
import { registrarUsuario } from "../../../services/servicioUsuario.js";
import "../../Estilos/Style.css";

export function FormularioUsuario() {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [apellidoUsuario, setApellidoUsuario] = useState('');
    const [edadUsuario, setEdadUsuario] = useState('');
    const [telefonoUsuario, setTelefonoUsuario] = useState('');
    const [correoUsuario, setCorreoUsuario] = useState('');
    const [contraseñaUsuario, setContraseñaUsuario] = useState('');
    const [fechaUsuario, setFechaUsuario] = useState('');
    const [ciudadUsuario, setCiudadUsuario] = useState('');

    const [formularioEnviado, setFormularioEnviado] = useState(false);
    const [datosFormulario, setDatosFormulario] = useState(null);

    const [errores, setErrores] = useState({});
    const [alertaRegistrado, setAlertaRegistrado] = useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    useEffect(() => {
        console.log("FormularioEnviado Effect Triggered");
        if (formularioEnviado) {
            registrarUsuario(datosFormulario)
                .then((respuesta) => {
                    console.log("Promesa resuelta:", respuesta);
                    
                })
                .catch((error) => {
                    console.error("Error:", error);
                })
                .finally(() => {
                    setFormularioEnviado(false);
                });
        }
    }, [formularioEnviado]);

   

    function procesarFormulario(evento) {
        evento.preventDefault();

        const nuevosErrores = {};

        // Validar campos obligatorios
        if (!nombreUsuario.trim()) nuevosErrores.nombreUsuario = "El nombre es obligatorio";
        if (!emailRegex.test(correoUsuario)) nuevosErrores.correoUsuario = "El correo no es válido";
        if (!contraseñaUsuario.trim()) {
            nuevosErrores.contraseñaUsuario = "La contraseña es obligatoria";
        } else if (contraseñaUsuario.length < 8) {
            nuevosErrores.contraseñaUsuario = "La contraseña debe tener al menos 8 caracteres";
        } else if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(contraseñaUsuario)) {
            nuevosErrores.contraseñaUsuario = "La contraseña debe incluir al menos una letra, un número y un carácter especial";
        }

        // Validar edad
        if (edadUsuario && (edadUsuario <= 0 || edadUsuario > 120)) {
            nuevosErrores.edadUsuario = "Ingresa una edad válida entre 1 y 120";
        }

        // Validar teléfono (formato numérico y longitud)
        if (telefonoUsuario && !/^\d{7,15}$/.test(telefonoUsuario)) {
            nuevosErrores.telefonoUsuario = "El teléfono debe ser numérico y tener entre 7 y 15 dígitos";
        }

        // Validar fecha de registro
        if (fechaUsuario && new Date(fechaUsuario) > new Date()) {
            nuevosErrores.fechaUsuario = "La fecha de registro no puede ser futura";
        }

        setErrores(nuevosErrores);

        // Si hay errores, no enviar
        if (Object.keys(nuevosErrores).length > 0) {
            return;
        }

        
        // Preparar datos y enviar
        const datosUsuario = {
            nombre: nombreUsuario,
            apellido: apellidoUsuario,
            edad: edadUsuario,
            telefono: telefonoUsuario,
            correo: correoUsuario,
            contraseña: contraseñaUsuario,
            fechaRegistro: fechaUsuario,
            ciudad: ciudadUsuario,
        };
        setAlertaRegistrado(true);
        setDatosFormulario(datosUsuario);
        setFormularioEnviado(true);
    }

    return (
        <>
            {alertaRegistrado && (
                <div className="alert alert-success" role="alert">
                    Usuario registrado correctamente
                </div>
            )}
            <br />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        <br /><br /><br />
                        <h3 className="text-center mb-4 fw-bold fs-1 custom-font custom-color">Registro Usuario</h3>
                        <br /><br /><br />
                        <form className="p-4 bg-light border rounded-3 shadow-lg" onSubmit={procesarFormulario}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Nombre: <span className="text-danger">*</span></label>
                                    <input 
                                        type="text" 
                                        className={`form-control ${errores.nombreUsuario ? "is-invalid" : ""}`} 
                                        value={nombreUsuario} 
                                        onChange={function(evento){setNombreUsuario(evento.target.value)}}   
                                    />
                                    {errores.nombreUsuario && <div className="invalid-feedback">{errores.nombreUsuario}</div>}
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Apellido:</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        value={apellidoUsuario} 
                                        onChange={function(evento){setApellidoUsuario(evento.target.value)}} 
                                    />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label className="form-label">Edad:</label>
                                    <input 
                                        type="number" 
                                        className={`form-control ${errores.edadUsuario ? "is-invalid" : ""}`} 
                                        value={edadUsuario} 
                                        onChange={function(evento){setEdadUsuario(evento.target.value)}}  
                                    />
                                    {errores.edadUsuario && <div className="invalid-feedback">{errores.edadUsuario}</div>}
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Teléfono:</label>
                                    <input 
                                        type="number" 
                                        className={`form-control ${errores.telefonoUsuario ? "is-invalid" : ""}`} 
                                        value={telefonoUsuario} 
                                        onChange={function(evento){setTelefonoUsuario(evento.target.value)}} 
                                    />
                                    {errores.telefonoUsuario && <div className="invalid-feedback">{errores.telefonoUsuario}</div>}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label className="form-label">Correo: <span className="text-danger">*</span></label>
                                    <input 
                                        type="text" 
                                        className={`form-control ${errores.correoUsuario ? "is-invalid" : ""}`} 
                                        value={correoUsuario} 
                                        onChange={function(evento){setCorreoUsuario(evento.target.value)}} 
                                    />
                                    {errores.correoUsuario && <div className="invalid-feedback">{errores.correoUsuario}</div>}
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Contraseña: <span className="text-danger">*</span></label>
                                    <input 
                                        type="password" 
                                        className={`form-control ${errores.contraseñaUsuario ? "is-invalid" : ""}`} 
                                        value={contraseñaUsuario} 
                                        onChange={function(evento){setContraseñaUsuario(evento.target.value)}} 
                                    />
                                    {errores.contraseñaUsuario && <div className="invalid-feedback">{errores.contraseñaUsuario}</div>}
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6">
                                    <label className="form-label">Fecha Registro:</label>
                                    <input 
                                        type="date" 
                                        className={`form-control ${errores.fechaUsuario ? "is-invalid" : ""}`} 
                                        value={fechaUsuario} 
                                        onChange={function(evento){setFechaUsuario(evento.target.value)}} 
                                    />
                                    {errores.fechaUsuario && <div className="invalid-feedback">{errores.fechaUsuario}</div>}
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Ciudad:</label>
                                    <input 
                                        list="ciudades" 
                                        className="form-control" 
                                        value={ciudadUsuario} 
                                        onChange={function(evento){setCiudadUsuario(evento.target.value)}} 
                                    />
                                    <datalist id="ciudades">
                                        <option value="Medellín"></option>
                                        <option value="Cali"></option>
                                        <option value="Bogotá"></option>
                                        <option value="New York"></option>
                                    </datalist>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success w-100 btn-lg mt-4">Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}