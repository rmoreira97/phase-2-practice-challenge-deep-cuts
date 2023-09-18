import React, { useState, useEffect } from 'react';
import Search from './Search';
import AddTrackForm from './AddTrackForm';
import TracksList from './TracksList';
import EditModeButton from './EditModeButton';

function TracksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [tracks, setTracks] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  // Function to handle search term changes
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Function to add a new track to the list of tracks and send a POST request to the backend
  const addNewTrack = (newTrack) => {
    // Send a POST request to your backend API
    fetch('http://localhost:8001/tracks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTrack),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the new track returned from the server
        setTracks([...tracks, data]);
      })
      .catch((error) => console.error('Error adding new track:', error));
  };

  // Function to delete a track
  const deleteTrack = (trackId) => {
    // Send a DELETE request to your backend API
    fetch(`http://localhost:8001/tracks/${trackId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Remove the deleted track from the state
        const updatedTracks = tracks.filter((track) => track.id !== trackId);
        setTracks(updatedTracks);
      })
      .catch((error) => console.error('Error deleting track:', error));
  };

  useEffect(() => {
    // Fetch data from the backend API when the component mounts
    fetch('http://localhost:8001/tracks')
      .then((response) => response.json())
      .then((data) => setTracks(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Search onSearch={handleSearch} />
      <AddTrackForm onAddTrack={addNewTrack} />
      <EditModeButton
        onClick={() => setIsEditMode(!isEditMode)}
        isEditMode={isEditMode}
      />
      <TracksList
        tracks={tracks}
        searchTerm={searchTerm}
        isEditMode={isEditMode}
        onDeleteTrack={deleteTrack}
      />
    </div>
  );
}

export default TracksPage;
