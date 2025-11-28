// List Demo - Shows how to render lists with map()
function ListDemo() {
  // Array of team members
  const members = [
    { id: 1, name: 'Érica Gameiro', role: 'Presidente' },
    { id: 2, name: 'Maria Viegas', role: 'Vice-Presidente Interna' },
    { id: 3, name: 'Margarida Martins', role: 'Vice-Presidente Externa' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        2. Renderizar Listas
      </h3>
      
      <p className="text-gray-700 mb-4">
        Membros da equipa:
      </p>
      
      {/* Rendering list with map() */}
      <ul className="space-y-2 inline-block text-left">
        {members.map(member => (
          <li 
            key={member.id}
            className="p-3 bg-blue-50 rounded"
          >
            <strong>{member.name}</strong> - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListDemo;
