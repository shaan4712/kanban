import React, { useState } from 'react';
import '../css-files/AddTicketModal.css';
  

function AddTicketModal({ onClose, onAddTicket, grouping, columnTitle, users }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState(grouping === 'status' ? columnTitle : 'Todo');
  const [priority, setPriority] = useState(grouping === 'priority' ? ['No priority', 'Low', 'Medium', 'High', 'Urgent'].indexOf(columnTitle) : 0);
  const [userId, setUserId] = useState(grouping === 'user' ? users.find(u => u.name === columnTitle)?.id || '' : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      id: `CAM-${Math.floor(Math.random() * 10000)}`,
      title: title,
      status: status,
      priority: priority,
      userId: userId,
      tag: ['Feature Request'],
    };
    onAddTicket(newTicket);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              disabled={grouping === 'status'}
            >
              <option value="Backlog">Backlog</option>
              <option value="Todo">Todo</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
              <option value="Canceled">Canceled</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority:</label>
            <select
              id="priority"
              value={priority}
              onChange={(e) => setPriority(Number(e.target.value))}
              disabled={grouping === 'priority'}
            >
              <option value={0}>No priority</option>
              <option value={1}>Low</option>
              <option value={2}>Medium</option>
              <option value={3}>High</option>
              <option value={4}>Urgent</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="user">Assigned To:</label>
            <select
              id="user"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              disabled={grouping === 'user'}
            >
              <option value="">Unassigned</option>
              {users.map(user => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))}
            </select>
          </div>
          <div className="form-actions">
            <button type="submit">Add Ticket</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTicketModal;

