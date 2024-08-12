import React from 'react';

interface ArticleProps {
  src: string;
  alt: string;
  title: string;
  content: string;
}

const Article: React.FC<ArticleProps> = ({ src, alt, title, content }) => (
  <article className="relative bg-white p-4 rounded-lg shadow-md mb-6 overflow-hidden">
    <div className="relative w-full h-64">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <div className="absolute inset-0 flex flex-col justify-end p-4">
      <div className="bg-white/50 p-4 backdrop-blur-sm ">
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-800">{content}</p>
      </div>
    </div>
  </article>
);

export default Article;
