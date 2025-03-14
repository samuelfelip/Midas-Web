import SEO from '../../components/SEO'

const Curso = ({ curso }) => {
  return (
    <>
      <SEO 
        title={`${curso.nombre} | Midas Training`}
        description={curso.descripcion}
        keywords={`${curso.categoria}, formación, curso profesional, Midas Training`}
        canonicalUrl={`/cursos/${curso.id}`}
        ogImage={curso.imagen}
      />
      {/* ... existing code ... */}
    </>
  )
} 