import React from 'react';

const SpotifyEmbed = () => {
  const trackId = "0P23mAdy8Oda5cCk0eXoNj"; 
  const startTime = 0; // Starts at 0:07

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <iframe
        src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0&start=${startTime}`}
        width="400"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen ; picture-in-picture"
        loading="lazy"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default SpotifyEmbed;
