import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

// Main App component with routing
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        {/* Header with navigation */}
        <Header />

        {/* Main content area */}
        <main className="container mx-auto px-6 py-8 max-w-4xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-6 mt-12">
          <p>ISCAC Junior Solutions © 2025</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
