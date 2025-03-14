import SEO from '../components/SEO'

const Home = () => {
  return (
    <>
      <SEO 
        title="Midas Training - Academia Líder en Formación Profesional"
        description="Descubre la excelencia en formación con Midas Training. Programas diseñados para transformar tu potencial en éxito profesional."
        keywords="formación profesional, academia, cursos, desarrollo profesional, Midas Training"
        canonicalUrl="/"
      />
      <div className="hero-section text-center">
        <h1>Midas Training</h1>
        <p className="lead">Transformando el conocimiento en oro</p>
        <p>Descubre el poder de una formación de excelencia</p>
      </div>

      <section className="features">
        <h2>¿Por qué elegir Midas Training?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3>Excelencia Garantizada</h3>
                <p>Metodología probada y resultados excepcionales</p>
              </div>
            </div>
          </div>
          {/* ... existing code ... */}
        </div>
      </section>
    </>
  )
}

export default Home 