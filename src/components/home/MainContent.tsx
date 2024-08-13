import React from 'react';
import Sidebar from './Sidebar';
import Article from './Article'; // Import the Article component
import simbaWins from '../../assets/images/simba-wins.jpg';
import simbaYanga from '../../assets/images/simba-yanga.jpg';
import azizKi from '../../assets/images/aziz-ki.jpg';

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col md:flex-row gap-4 p-4">
      {/* Main Articles Section */}
      <section className="content flex-1">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Habari za Hivi Punde</h2>
        <Article
          src={simbaWins}
          alt="Simba SC Imeshinda Ligi"
          title="Simba SC Imeshinda Ligi"
          content="Simba SC imeshinda Ligi Kuu ya Tanzania baada ya mechi ya kusisimua..."
        />
        <Article
          src={simbaYanga}
          alt="Simba vs Yanga"
          title="Simba vs Yanga Hapatoshi"
          content="Presha, presha, presha..."
        />
        <Article
          src={azizKi}
          alt="Usajili Mpya wa Young Africans"
          title="Usajili Mpya wa Young Africans"
          content="Young Africans wametangaza usajili wao mpya kwa msimu ujao..."
        />
      </section>

      {/* Sidebar Section */}
      <Sidebar />
    </main>
  );
};

export default MainContent;
