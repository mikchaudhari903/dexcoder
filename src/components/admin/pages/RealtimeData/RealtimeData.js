// src/components/RealtimeData.js
import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../../../firebase/firebaseConfig';

const RealtimeData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Reference the path in your Realtime Database
    const dbRef = ref(db, 'users');
    
    // Set up a listener to read data in real time
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setData(data);
      } else {
        console.log('No data available');
      }
    }, {
      onlyOnce: false // Change to true if you only want to read once
    });
  }, []);

  return (
    <div>
      <h1>Realtime Database Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default RealtimeData;
