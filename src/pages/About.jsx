// About page with information about ISCAC Junior Solutions
function About() {
  const companyInfo = {
    name: 'ISCAC Junior Solutions',
    founded: 2012,
    mission: 'Promover uma experiência única que permita o desenvolvimento dos nossos membros como também uma prestação de serviços de alto valor para os nossos clientes.'
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Sobre a {companyInfo.name}
      </h2>
      
      <div className="space-y-4 text-gray-700">
        <p className="text-lg">
          A <strong>{companyInfo.name}</strong> é uma júnior empresa 
          fundada em {companyInfo.founded}.
        </p>
        
        <p className="text-lg">
          <strong>Missão:</strong> {companyInfo.mission}
        </p>
        
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-xl font-bold text-blue-800 mb-3">
            O que fazemos?
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Marketing Digital</li>
            <li>Consultoria de Marketing</li>
            <li>Organização de Eventos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
