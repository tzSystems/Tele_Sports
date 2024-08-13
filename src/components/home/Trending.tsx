import React from 'react';

// Import images
import princeDubeImage from '../../assets/images/prince-dube.jpg';
import fixturesImage from '../../assets/images/fixtures.jpg';
import interviewImage from '../../assets/images/interview.jpg';
import saImage from '../../assets/images/sa.jpg';

interface TrendingItemProps {
  src: string;
  alt: string;
  text: string;
}

const TrendingItem: React.FC<TrendingItemProps> = ({ src, alt, text }) => (
  <li className="flex items-center space-x-4 p-2 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
    <img src={src} alt={alt} className="w-12 h-12 rounded-full border-2 border-gold shadow-sm" />
    <a href="#" className="text-dark-blue hover:text-gold transition-colors duration-300">{text}</a>
  </li>
);

const Trending: React.FC = () => (
  <div className="trending mt-10">
    <h3 className="text-2xl font-bold text-dark-blue mb-6 border-b-2 border-gold pb-2">Zinazovuma</h3>
    <ul className="space-y-4">
      <TrendingItem src={princeDubeImage} alt="Wafungaji Bora" text="Wafungaji Bora wa Msimu" />
      <TrendingItem src={fixturesImage} alt="Mechi Zijazo" text="Mechi Zijazo" />
      <TrendingItem src={interviewImage} alt="Mahojiano ya Wachezaji" text="Mahojiano ya Wachezaji" />
      <TrendingItem src={saImage} alt="Msimamo wa Ligi" text="Msimamo wa Ligi" />
    </ul>
  </div>
);

export default Trending;
