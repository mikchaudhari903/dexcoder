// src/components/AddData.js
import React, { useState } from 'react';
import { ref, set, push } from 'firebase/database';
import { db } from '../../../../firebase/firebaseConfig';

const AddData = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reference the location where you want to store the data
    const dbRef = ref(db, 'users');
    
    // Push a new entry to the 'users' node
    const newUserRef = push(dbRef);
    set(newUserRef, {
      name,
      age,
    })
    .then(() => {
      console.log('Data added successfully');
      setName('');
      setAge('');
    })
    .catch((error) => {
      console.error('Error writing data: ', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Age"
      />
      <button type="submit">Add Data</button>
    </form>
  );
};

export default AddData;
