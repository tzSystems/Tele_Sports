

import React from 'react';

interface VideoItemProps {
  title: string;
  src: string;
}

const VideoItem: React.FC<VideoItemProps> = ({ title, src }) => (
  <div className="video-item bg-white p-4 rounded-lg shadow-md mb-6">
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <iframe
      width="360"
      height="240"
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full h-full rounded"
    />
  </div>
);

const VideoHighlights: React.FC = () => (
  <section className="video-ad-container p-4">
    <div className="videos">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Video Highlights</h2>
      <div id="video-container" className="flex flex-wrap gap-4">
        <VideoItem
          title="Azam Fc 1 - 4 Young Africans"
          src="https://www.youtube.com/embed/l30skWGJYH4"
        />
        <VideoItem
          title="Mahojiano Maalum na Kocha"
          src="https://www.youtube.com/embed/NOXXOOCYsD8"
        />
        <VideoItem
          title="Sakata la Kagoma bado kizungumkuti"
          src="https://www.youtube.com/embed/lHi3h8EFclc"
        />
      </div>
    </div>
  </section>
);

export default VideoHighlights;
