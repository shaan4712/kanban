import React from 'react';
import '../css-files/DisplayOptions.css';

function DisplayOptions({ grouping, sorting, onGroupingChange, onSortingChange }) {
  return (
    <div className="display-options">
      <div className="option-group">
        <label htmlFor="grouping">Grouping</label>
        <select 
          id="grouping" 
          value={grouping} 
          onChange={(e) => onGroupingChange(e.target.value)}
        >
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className="option-group">
        <label htmlFor="sorting">Ordering</label>
        <select 
          id="sorting" 
          value={sorting} 
          onChange={(e) => onSortingChange(e.target.value)}
        >
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}

export default DisplayOptions;