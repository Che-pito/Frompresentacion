import { useState, useEffect } from "react";
import { registrarMetodoPago } from "../../../services/servicioMetodoPago.js";
import "../../Estilos/Style.css"

export function FormularioMetodoPago() {
  const [nombreMetodo, setNombreMetodo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  

  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState(null);

  const[errores, setErrores] = useState({})

  // useEffect para controlar el envío de datos al backend
  useEffect(() => {
    if (formularioEnviado === true) {
      console.log("Enviando datos al backend...");
      registrarMetodoPago(datosFormulario)
        .then((respuestaBack) => {
          console.log(respuestaBack);
        })
        .catch((error) => {
          console.error("Error al registrar metodo de pago:", error);
        });
      setFormularioEnviado(false);
    }
  }, [formularioEnviado]);

  function procesarFormulario(evento) {
    evento.preventDefault();

    //Validar campos 
    const nuevosErrores={};

    if (!nombreMetodo.trim()) nuevosErrores.nombreMetodo="El nombre es obligatorio"

    setErrores(nuevosErrores);

    if(Object.keys(nuevosErrores).length===0){
    const datosMetodoPago = {
      nombreMetodo,
      descripcion
    };
    setDatosFormulario(datosMetodoPago);
    setFormularioEnviado(true);

  }
}

  return (
    <>
      <br />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
          <br /><br /><br />
            <h3 className="text-center mb-4 fw-bold fs-1 custom-font custom-color">Registro de metodos de pago</h3>
            <br /><br /><br />
            <form className="p-4 bg-light border rounded-3 shadow-lg" onSubmit={procesarFormulario}>
              <div className="row g-3">
                <div className="col-md-12">
                  <label className="form-label">Nombre del metodo de pago:<span className="text-danger">*</span> </label>
                  <input
                    type="text"
                    className={`form-control ${errores.nombreMetodo ? "is-invalid" : ""}`}
                    value={nombreMetodo}
                    onChange={(evento) => setNombreMetodo(evento.target.value)}
                  />
                  {errores.nombreMetodo && <div className="invalid-feedback">{errores.nombreMetodo}</div>}
                  
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <label className="form-label">Descripción:</label>
                  <textarea
                    className="form-control"
                    value={descripcion}
                    onChange={(evento) => setDescripcion(evento.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-success w-100 btn-lg mt-4">
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}