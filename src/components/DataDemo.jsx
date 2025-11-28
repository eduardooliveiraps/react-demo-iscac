// Displaying data
function DataDemo() {
  // Variables to display
  const companyName = 'ISCAC Junior Solutions';
  const yearFounded = 2012;
  const isActive = true;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        1. Mostrar Dados
      </h3>
      
      {/* Displaying variables with curly braces */}
      <p className="text-gray-700 mb-2">
        Nome: <strong>{companyName}</strong>
      </p>
      
      <p className="text-gray-700 mb-2">
        Fundada em: <strong>{yearFounded}</strong>
      </p>
      
      <p className="text-gray-700 mb-2">
        Anos de atividade: <strong>{2025 - yearFounded}</strong>
      </p>
      
      {/* Conditional rendering with ternary operator */}
      <p className="text-gray-700">
        Estado: {isActive ? 'Ativa' : 'Inativa'}
      </p>
    </div>
  );
}

export default DataDemo;