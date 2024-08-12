

import React from 'react';

const MainContent: React.FC = () => {
  return (
    <main className="container">
      <section className="content">
        <h2>Habari za Hivi Punde</h2>
        <article>
          <img src="./images/simba-wins.jpg" alt="Simba SC Imeshinda Ligi" />
          <h3>Simba SC Imeshinda Ligi</h3>
          <p>Simba SC imeshinda Ligi Kuu ya Tanzania baada ya mechi ya kusisimua...</p>
        </article>
        <article>
          <img src="./images/simba-yanga.jpg" alt="Simba vs Yanga" />
          <h3>Simba vs Yanga Hapatoshi</h3>
          <p>Presha, presha, presha...</p>
        </article>
        <article>
          <img src="./images/aziz-ki.jpg" alt="Usajili Mpya wa Young Africans" />
          <h3>Usajili Mpya wa Young Africans</h3>
          <p>Young Africans wametangaza usajili wao mpya kwa msimu ujao...</p>
        </article>
      </section>
    </main>
  );
};

export default MainContent;
