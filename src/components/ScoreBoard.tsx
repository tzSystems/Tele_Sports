import React from 'react';

interface ScoreboardItemProps {
  team1: string;
  team2: string;
  score: string;
  date: string;
}

const ScoreboardItem: React.FC<ScoreboardItemProps> = ({ team1, team2, score, date }) => (
  <li className="flex justify-between items-center border-b py-3 px-2">
    <div className="flex flex-col">
      <span className="font-medium text-gray-800">{team1} vs {team2}</span>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
    <span className="font-semibold text-gray-900">{score}</span>
  </li>
);

const Scoreboard: React.FC = () => (
  <div className="scoreboard bg-white p-6 shadow-lg rounded-lg border border-gray-200">
    <h3 className="text-2xl font-semibold mb-6 text-gray-900">Matokeo</h3>
    <ul className="space-y-4">
      <ScoreboardItem team1="Simba SC" team2="Yanga SC" score="2 - 1" date="12 Agosti 2024" />
      <ScoreboardItem team1="Young Africans" team2="Prisons FC" score="3 - 0" date="11 Agosti 2024" />
      <ScoreboardItem team1="Kagera Sugar" team2="Mtibwa Sugar" score="1 - 1" date="10 Agosti 2024" />
    </ul>
  </div>
);

export default Scoreboard;
