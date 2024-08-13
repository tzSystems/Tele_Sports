

import React from 'react';
import Trending from './Trending';
import LatestNews from './LatestNews';
import AdvertHolder from './AdvertHolder';
import Scoreboard from './ScoreBoard';

const Sidebar: React.FC = () => (
  <aside className="sidebar p-4 w-full md:w-1/2 bg-gray-50 border-r border-gray-200">
    <Trending />
    <LatestNews />
    <Scoreboard />
    <AdvertHolder />
  </aside>
);

export default Sidebar;
