import { Link } from 'react-router-dom';

// Header component - demonstrates simple component creation
function Header() {
  return (
    <header className="bg-blue-600 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-6 mb-6">
          <img 
            src="/images/logo_ijs.jpg" 
            alt="ISCAC Junior Solutions" 
            className="w-16 h-16 rounded-full"
          />
          <h1 className="text-3xl font-bold">ISCAC Junior Solutions</h1>
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-col items-center mt-4 gap-3">
          <Link 
            to="/" 
            className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="px-4 py-2 bg-blue-700 rounded hover:bg-blue-800 transition-colors"
          >
            Sobre Nós
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;