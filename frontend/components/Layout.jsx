const Layout = ({ children }) => {
  return (
    <div className="dark-theme">
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/midas-logo.png" alt="Midas Training" height="40" />
            Midas Training
          </a>
          {/* ... existing navigation items ... */}
        </div>
      </nav>
      <main className="container py-4">
        {children}
      </main>
      <footer className="footer mt-auto py-3">
        <div className="container text-center">
          <span>© 2024 Midas Training - Transformando conocimiento en oro</span>
        </div>
      </footer>
    </div>
  )
}

export default Layout 