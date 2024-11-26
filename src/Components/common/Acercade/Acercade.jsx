import "./Acercade.css"; // Importar el CSS
import Ahorrar1 from '/src/assets/img/Ahorrar1.jpg';
export function Acercade() {
  return (
    <>
      <section className="acercade-container">
        <div className="container">
          <div className="row acercade-row">
            <div className="col-12 col-md-6">
              <h2 className="acercade-title">
                ¿Por qué es importante ahorrar?
              </h2>
              <p className="acercade-text">
                "El ahorro es el primer paso hacia la libertad financiera. Es
                importante empezar hoy, no importa la cantidad. El futuro
                agradecerá tus esfuerzos."
              </p>
              <blockquote className="acercade-quote">
                "El dinero ahorrado hoy es el que te dará la libertad mañana."
              </blockquote>
              <div className="acercade-ideas">
                <h3>Ideas para empezar a ahorrar:</h3>
                <ul>
                  <li>Define metas claras y alcanzables.</li>
                  <li>Automatiza tus ahorros.</li>
                  <li>Elimina gastos innecesarios.</li>
                  <li>Invierte sabiamente.</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={Ahorrar1}
                alt="Foto de personas ahorrando"
                className="acercade-img img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

