import React from 'react';

// Import images
import coachImage from '../../assets/images/coach.jpg';
import kakImage from '../../assets/images/kak.webp';
import fansImage from '../../assets/images/fans.jpg';
import transferImage from '../../assets/images/transfer.jpg';

interface NewsItemProps {
  src: string;
  alt: string;
  text: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ src, alt, text }) => (
  <li className="flex items-center space-x-2">
    <img src={src} alt={alt} className="w-10 h-10 rounded" />
    <a href="#" className="text-blue-600 hover:underline">{text}</a>
  </li>
);

const LatestNews: React.FC = () => (
  <div className="latest-news mt-10">
    <h3 className="text-xl font-bold mb-4">Taarifa za Hivi Punde</h3>
    <ul className="space-y-3">
      <NewsItem src={coachImage} alt="Mahojiano na Kocha" text="Mahojiano Maalum na Kocha" />
      <NewsItem src={kakImage} alt="Ripoti ya Majeruhi" text="Ripoti ya Majeruhi: Wachezaji Muhimu" />
      <NewsItem src={fansImage} alt="Maoni ya Mashabiki" text="Maoni ya Mashabiki Baada ya Derby" />
      <NewsItem src={transferImage} alt="Habari za Usajili" text="Habari za Usajili wa Hivi Punde" />
    </ul>
  </div>
);

export default LatestNews;
