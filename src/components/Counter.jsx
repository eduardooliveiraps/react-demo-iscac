import { useState } from 'react';

// Counter - Demonstrates useState and event handlers
function Counter() {
  // State: current number of members
  const [members, setMembers] = useState(25);

  // Event handler: add member
  function handleAdd() {
    setMembers(members + 1);
  }

  // Event handler: remove member
  function handleRemove() {
    if (members > 0) {
      setMembers(members - 1);
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        3. useState e Eventos
      </h3>
      
      <p className="text-gray-700 mb-4">
        Número de membros na equipa:
      </p>
      
      <p className="text-5xl font-bold text-blue-600 text-center my-6">
        {members}
      </p>
      
      <div className="flex gap-4 justify-center">
        <button 
          onClick={handleRemove}
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          - Remover
        </button>
        <button 
          onClick={handleAdd}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          + Adicionar
        </button>
      </div>
    </div>
  );
}

export default Counter;
