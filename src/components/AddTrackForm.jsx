import React, { useState } from 'react';

function AddTrackForm({ onAddTrack }) {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    artist: '',
    BPM: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTrack(formData);
    setFormData({
      image: '',
      title: '',
      artist: '',
      BPM: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={formData.artist}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input
          type="number"
          name="BPM"
          placeholder="BPM"
          step="1.00"
          value={formData.BPM}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <input type="submit" value="Add Track" />
      </div>
    </form>
  );
}

export default AddTrackForm;
