import React from 'react';

const SpotifyEmbed = () => {
  const trackId = "4BSR9I4ExlCJdXJo2GpBD5"; 

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <iframe
        src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`}
        width="500"
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