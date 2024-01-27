import React, { useState } from 'react';
import './App.css';

const AdminDashboard = () => {
 const [message, setMessage] = useState('');

 const handleChange = (e) => {
    setMessage(e.target.value);
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    alert('Message submitted!');
 };

 return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Message:
          <input type="text" value={message} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
 );
};