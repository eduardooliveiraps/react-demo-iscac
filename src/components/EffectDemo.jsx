import { useState, useEffect } from 'react';

// Effect Demo - Demonstrates useEffect hook
function EffectDemo() {
  const [message, setMessage] = useState('Carregando...');

  // useEffect runs after component renders
  useEffect(() => {
    console.log('Componente renderizado!');
    
    // Simulate loading data
    setTimeout(() => {
      setMessage('Dados carregados com sucesso!');
    }, 2000);
  }, []); // Empty array = run only once

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        4. useEffect
      </h3>
      
      <p className="text-gray-700 mb-2">
        Este componente usa <code className="bg-gray-200 px-2 py-1 rounded">useEffect</code> para 
        simular o carregamento de dados.
      </p>
      
      <p className="text-gray-700 mb-4">
        Abre a consola do browser (F12) para veres a mensagem!
      </p>
      
      <div className="p-4 bg-green-50 rounded text-center">
        <p className="text-lg font-semibold text-green-800">
          {message}
        </p>
      </div>
    </div>
  );
}

export default EffectDemo;
