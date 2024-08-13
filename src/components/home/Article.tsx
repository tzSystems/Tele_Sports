import React from 'react';

interface ArticleProps {
  src: string;
  alt: string;
  title: string;
  content: string;
}

const Article: React.FC<ArticleProps> = ({ src, alt, title, content }) => (
  <article className="content">
    <img
      src={src}
      alt={alt}
      className=" rounded-md"
    />
   
     
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-800">{content}</p>
    
   
  </article>
);

export default Article;
