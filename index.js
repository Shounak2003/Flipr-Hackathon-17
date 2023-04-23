import React, { useState } from 'react';
import axios from 'axios';

function PodcastForm() {
  const [podcastName, setPodcastName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [artistId, setArtistId] = useState('');
  const [podcastType, setPodcastType] = useState('');
  const [podcastFile, setPodcastFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new FormData object to store the form data
    const formData = new FormData();
    formData.append('podcastName', podcastName);
    formData.append('artistName', artistName);
    formData.append('artistId', artistId);
    formData.append('podcastType', podcastType);
    formData.append('podcastFile', podcastFile);

    // Make a POST request to the backend to store the data in MongoDB
    axios.post('/api/podcasts', formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Podcast Name:
        <input type="text" value={podcastName} onChange={(e) => setPodcastName(e.target.value)} />
      </label>
      <br />
      <label>
        Artist Name:
        <input type="text" value={artistName} onChange={(e) => setArtistName(e.target.value)} />
      </label>
      <br />
      <label>
        Artist ID (Google ID):
        <input type="text" value={artistId} onChange={(e) => setArtistId(e.target.value)} />
      </label>
      <br />
      <label>
        Podcast Type:
        <select value={podcastType} onChange={(e) => setPodcastType(e.target.value)}>
          <option value="audio">Audio</option>
          <option value="video">Video</option>
        </select>
      </label>
      <br />
      <label>
        Podcast File:
        <input type="file" accept="audio/*,video/*" onChange={(e) => setPodcastFile(e.target.files[0])} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PodcastForm;