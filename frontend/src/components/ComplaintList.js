import React, { useEffect, useState } from 'react';
import { getComplaints } from '../services/api';

const ComplaintList = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    async function fetchComplaints() {
      const response = await getComplaints();
      setComplaints(response.data);
    }
    fetchComplaints();
  }, []);

  return (
    <div>
      <h2>All Complaints</h2>
      <ul>
        {complaints.map((c) => (
          <li key={c._id}>{c.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComplaintList;
