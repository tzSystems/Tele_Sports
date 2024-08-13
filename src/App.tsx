import React from 'react';
import Header from './components/home/Header';
import MainContent from './components/home/MainContent';
import Footer from './components/home/Footer';
import VideoHighlights from './components/home/VideoHighlights';

const App: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <MainContent />
      <VideoHighlights />
      <Footer />
    </div>
  );
};

export default App;
