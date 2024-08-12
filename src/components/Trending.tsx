import React from 'react';

// Import images
import princeDubeImage from '../assets/images/prince-dube.jpg';
import fixturesImage from '../assets/images/fixtures.jpg';
import interviewImage from '../assets/images/interview.jpg';
import saImage from '../assets/images/sa.jpg';

interface TrendingItemProps {
  src: string;
  alt: string;
  text: string;
}

const TrendingItem: React.FC<TrendingItemProps> = ({ src, alt, text }) => (
  <li className="flex items-center space-x-2">
    <img src={src} alt={alt} className="w-10 h-10 rounded" />
    <a href="#" className="text-blue-600 hover:underline">{text}</a>
  </li>
);

const Trending: React.FC = () => (
  <div className="trending">
    <h3 className="text-xl font-bold mb-4">Mada Zinazovuma</h3>
    <ul className="space-y-3">
      <TrendingItem src={princeDubeImage} alt="Wafungaji Bora" text="Wafungaji Bora wa Msimu" />
      <TrendingItem src={fixturesImage} alt="Mechi Zijazo" text="Mechi Zijazo" />
      <TrendingItem src={interviewImage} alt="Mahojiano ya Wachezaji" text="Mahojiano ya Wachezaji" />
      <TrendingItem src={saImage} alt="Msimamo wa Ligi" text="Msimamo wa Ligi" />
    </ul>
  </div>
);

export default Trending;
