import React from 'react';




const podcastData = [
  {
    title: 'Podcast Episode 1',
    audioUrl: 'https://example.com/podcast-episode-1.mp3',
    videoUrl: 'https://example.com/podcast-episode-1.mp4'
  },
  {
    title: 'Podcast Episode 2',
    audioUrl: 'https://example.com/podcast-episode-2.mp3',
    videoUrl: 'https://example.com/podcast-episode-2.mp4'
  }
];

const Podcast = () => {
  return (
    <div>
      <h1>Podcasts</h1>
      <ul>
        {podcastData.map((podcast, index) => (
          <li key={index}>
            <h2>{podcast.title}</h2>
            <audio controls>
              <source src={podcast.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <video controls>
              <source src={podcast.videoUrl} type="video/mp4" />
              Your browser does not support the video element.
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Podcast;
