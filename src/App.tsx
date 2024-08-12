
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import VideoHighlights from './components/VideoHighlights';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainContent />
      <VideoHighlights />
      <Footer />
    </>
  );
};

export default App;
