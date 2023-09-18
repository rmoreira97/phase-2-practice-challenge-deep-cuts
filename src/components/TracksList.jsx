import React, { useEffect, useState } from 'react';

function TracksList({ tracks, searchTerm, isEditMode, onDeleteTrack }) {
  const [filteredTracks, setFilteredTracks] = useState([]);

  useEffect(() => {
    setFilteredTracks(
      tracks.filter(
        (track) =>
          track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          track.artist.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, tracks]);

  return (
    <table>
      <thead>
        <tr>
          <th>Img</th>
          <th>Title</th>
          <th>Artist</th>
          <th>BPM</th>
          {isEditMode && <th>Action</th>} {/* Display the Action column in edit mode */}
        </tr>
      </thead>
      <tbody>
        {filteredTracks.map((track) => (
          <tr key={track.id}>
            <td className="row-image">
              <img src={track.image} alt={track.title} />
            </td>
            <td className="row-title">{track.title}</td>
            <td>{track.artist}</td>
            <td>{track.BPM}</td>
            {isEditMode && (
              <td>
                <button onClick={() => onDeleteTrack(track.id)}>
                  Delete
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TracksList;
