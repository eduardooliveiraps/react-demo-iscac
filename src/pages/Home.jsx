import DataDemo from '../components/DataDemo';
import ListDemo from '../components/ListDemo';
import Counter from '../components/Counter';
import EffectDemo from '../components/EffectDemo';

// Home page - demonstrates all React basics
function Home() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">
        Bem-vindos à Formação React
      </h2>
      
      <hr className="border-gray-300" />
      
      <DataDemo />
      
      <hr className="border-gray-300" />
      
      <ListDemo />
      
      <hr className="border-gray-300" />
      
      <Counter />
      
      <hr className="border-gray-300" />
      
      <EffectDemo />
    </div>
  );
}

export default Home;
