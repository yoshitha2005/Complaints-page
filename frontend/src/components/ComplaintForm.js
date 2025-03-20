import React, { useState } from 'react';
import { createComplaint } from '../services/api';

const ComplaintForm = () => {
  const [complaint, setComplaint] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createComplaint({ description: complaint });
      alert('Complaint submitted successfully');
      setComplaint('');
    } catch (err) {
      console.error(err);
      alert('Failed to submit complaint');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={complaint}
        onChange={(e) => setComplaint(e.target.value)}
        placeholder="Write your complaint..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ComplaintForm;
