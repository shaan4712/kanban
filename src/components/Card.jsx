import React from 'react';
import '../css-files/Card.css';

function Card({ ticket, user, grouping, onStatusChange, onUpdateTicket }) {
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'backlog':
        return <img src="/assets/backlog.svg" alt="Backlog" className="status-icon" />;
      case 'todo':
        return <img src="/assets/todo.svg" alt="Todo" className="status-icon" />;
      case 'in progress':
        return <img src="/assets/in-progress.svg" alt="In Progress" className="status-icon" />;
      case 'done':
        return <img src="/assets/done.svg" alt="Done" className="status-icon" />;
      case 'canceled':
        return <img src="/assets/cancelled.svg" alt="Canceled" className="status-icon" />;
      default:
        return <img src="/assets/icons/unknown.svg" alt="Unknown" className="status-icon" />;
    }
  };

  const handleStatusClick = () => {
    const statuses = ['Backlog', 'Todo', 'In Progress', 'Done', 'Canceled'];
    const currentIndex = statuses.indexOf(ticket.status);
    const nextStatus = statuses[(currentIndex + 1) % statuses.length];
    onStatusChange(ticket.id, nextStatus);
  };

  const createInitials = (name) => {
    // Check if the name is a valid string
    if (typeof name !== 'string' || !name.trim()) {
        return ""; // Return an empty string for invalid names
    }
    // Split the name into parts by space (first name and last name)
    const nameParts = name.split(' ');
    // Generate initials from the first character of the first and second names
    const initials = nameParts.length > 1 
        ? nameParts[0].charAt(0) + nameParts[1].charAt(0) // If there are two name parts
        : nameParts[0].charAt(0); // If there is only one name part (single name)
    return initials.toUpperCase(); // Convert initials to uppercase
  };


  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {/* {user && <img src={createInitials(user.name)} alt={user.name} className="user-avatar" />} */}
        <div className="user-avatar">
          {user && createInitials(user.name)}
        </div>
      </div>
      <h3 className="card-title">
      {(grouping === 'user' || grouping === 'priority') && (
        <span 
          className="status-icon-wrapper" 
          onClick={handleStatusClick}
          title={ticket.status}
        >
          {getStatusIcon(ticket.status)}
        </span>
      )}
        {ticket.title}
      </h3>
      <div className="card-footer">
        <span className="priority-tag">
          <img src={`/assets/priority/priority-${ticket.priority}.svg`} alt={`Priority ${ticket.priority}`} />
        </span>
        <span className="feature-tag">
          <span className="grey-circle"></span>
          {ticket.tag.join(', ')}
        </span>
      </div>
    </div>
  );
}

export default Card;

// import React from 'react';
// import '../css-files/Card.css';

// function Card({ ticket, user, grouping, onStatusChange, onUpdateTicket }) {
//   const getStatusIcon = (status) => {
//     switch (status.toLowerCase()) {
//       case 'backlog':
//         return <img src="/assets/backlog.svg" alt="Backlog" className="status-icon" />;
//       case 'todo':
//         return <img src="/assets/todo.svg" alt="Todo" className="status-icon" />;
//       case 'in progress':
//         return <img src="/assets/in-progress.svg" alt="In Progress" className="status-icon" />;
//       case 'done':
//         return <img src="/assets/done.svg" alt="Done" className="status-icon" />;
//       case 'canceled':
//         return <img src="/assets/cancelled.svg" alt="Canceled" className="status-icon" />;
//       default:
//         return <img src="/assets/icons/unknown.svg" alt="Unknown" className="status-icon" />;
//     }
//   };

//   const handleStatusChange = () => {
//     const statuses = ['Backlog', 'Todo', 'In Progress', 'Done', 'Canceled'];
//     const currentIndex = statuses.indexOf(ticket.status);
//     const nextStatus = statuses[(currentIndex + 1) % statuses.length];
//     onUpdateTicket(ticket.id, { status: nextStatus });
//   };

//   return (
//     <div className="card">
//       <div className="card-header">
//         <span className="ticket-id">{ticket.id}</span>
//         {user && <img src={user.avatar} alt={user.name} className="user-avatar" />}
//       </div>
//       <h3 className="card-title">
//         {(grouping === 'user' || grouping === 'priority') && (
//           <span 
//             className="status-icon-wrapper" 
//             onClick={handleStatusChange}
//             title={ticket.status}
//           >
//             {getStatusIcon(ticket.status)}
//           </span>
//         )}
//         {ticket.title}
//       </h3>
//       <div className="card-footer">
//         <span className="priority-tag">
//           <img src={`/assets/priority/priority-${ticket.priority}.svg`} alt={`Priority ${ticket.priority}`} />
//         </span>
//         <span className="feature-tag">{ticket.tag.join(', ')}</span>
//       </div>
//     </div>
//   );
// }

// export default Card;