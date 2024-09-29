import React, { useState } from 'react';
import Card from './Card';
import AddTicketModal from './AddTicketModal';
import '../css-files/Column.css';
import '../css-files/AddTicketModal.css';

function Column({ title, tickets, users, grouping, onAddTicket, onUpdateTicket, onStatusChange }) {
  const [showAddModal, setShowAddModal] = useState(false);

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

  const getPriorityIcon = (priority) => {
    switch (priority.toLowerCase()) {
      case 'no priority':
        return <img src="/assets/priority/priority-0.svg" alt="No Priority" className="priority-icon" />;
      case 'low':
        return <img src="/assets/priority/priority-1.svg" alt="Low Priority" className="priority-icon" />;
      case 'medium':
        return <img src="/assets/priority/priority-2.svg" alt="Medium Priority" className="priority-icon" />;
      case 'high':
        return <img src="/assets/priority/priority-3.svg" alt="High Priority" className="priority-icon" />;
      case 'urgent':
        return <img src="/assets/priority/priority-4.svg" alt="Urgent Priority" className="priority-icon" />;
      default:
        return null;
    }
  };

  const handleAddTicket = (newTicket) => {
    onAddTicket(newTicket);
    setShowAddModal(false);
  };

  return (
    <div className="column">
      <div className="column-title">
        <div className="column-title-left">
          {grouping === 'status' && getStatusIcon(title)}
          {grouping === 'priority' && getPriorityIcon(title)}
          <span className="column-name">{title}</span>
          <span className="column-count">{tickets.length}</span>
        </div>
        <div className="column-actions">
          <button onClick={() => setShowAddModal(true)} className="add-ticket-btn">
            <img src="/assets/add.svg" alt="Urgent Priority" className="priority-icon" />
          </button>
          <button className="more-options-btn">
            <img src="/assets/3-dot-menu.svg" alt="Urgent Priority" className="priority-icon" />
          </button>
        </div>
      </div>
      {tickets.map(ticket => (
        <Card 
          key={ticket.id} 
          ticket={ticket} 
          user={users.find(u => u.id === ticket.userId)}
          grouping={grouping}
          onStatusChange={onStatusChange}
          onUpdateTicket={onUpdateTicket}
        />
      ))}
      {showAddModal && (
        <AddTicketModal
          onClose={() => setShowAddModal(false)}
          onAddTicket={handleAddTicket}
          grouping={grouping}
          columnTitle={title}
          users={users}
        />
      )}
    </div>
  );
}

export default Column;

// import React, { useState } from 'react';
// import Card from './Card';
// import AddTicketModal from './AddTicketModal';
// import '../css-files/Column.css';
// import '../css-files/AddTicketModal.css';

// function Column({ title, tickets, users, grouping, onAddTicket, onUpdateTicket, onStatusChange }) {
//   const [showAddModal, setShowAddModal] = useState(false);

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

//   const getPriorityIcon = (priority) => {
//     switch (priority.toLowerCase()) {
//       case 'no priority':
//         return <img src="/assets/priority/priority-0.svg" alt="No Priority" className="priority-icon" />;
//       case 'low':
//         return <img src="/assets/priority/priority-1.svg" alt="Low Priority" className="priority-icon" />;
//       case 'medium':
//         return <img src="/assets/priority/priority-2.svg" alt="Medium Priority" className="priority-icon" />;
//       case 'high':
//         return <img src="/assets/priority/priority-3.svg" alt="High Priority" className="priority-icon" />;
//       case 'urgent':
//         return <img src="/assets/priority/priority-4.svg" alt="Urgent Priority" className="priority-icon" />;
//       default:
//         return null;
//     }
//   };

//   const handleAddTicket = (newTicket) => {
//     onAddTicket(newTicket);
//     setShowAddModal(false);
//   };


//   return (
//     <div className="column">
//       <h2 className="column-title">
//         {grouping === 'status' && getStatusIcon(title)}
//         {grouping === 'priority' && getPriorityIcon(title)}
//         {title} <span className="column-count">{tickets.length}</span>
//         <div className="column-actions">
//           <button onClick={() => setShowAddModal(true)} className="add-ticket-btn">+</button>
//           <button className="more-options-btn">...</button>
//         </div>
//       </h2>
//       {tickets.map(ticket => (
//         <Card 
//           key={ticket.id} 
//           ticket={ticket} 
//           user={users.find(u => u.id === ticket.userId)}
//           grouping={grouping}
//           onStatusChange={onStatusChange}
//           onUpdateTicket={onUpdateTicket}
//         />
//       ))}
//       {showAddModal && (
//         <AddTicketModal
//           onClose={() => setShowAddModal(false)}
//           onAddTicket={handleAddTicket}
//           grouping={grouping}
//           columnTitle={title}
//           users={users}
//         />
//       )}
//     </div>
//   );
// }

// export default Column;