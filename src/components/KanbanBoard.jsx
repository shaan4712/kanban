import React from 'react';
import Column from './Column';
import '../css-files/KanbanBoard.css';

function KanbanBoard({ tickets, users, grouping, sorting, onAddTicket, onUpdateTicket, onStatusChange }) {
  const groupTickets = () => {
    const grouped = {};

    switch (grouping) {
      case 'status':
        ['Backlog', 'Todo', 'In Progress', 'Done', 'Canceled'].forEach(status => {
          grouped[status] = tickets.filter(ticket => ticket.status === status);
        });
        break;
      case 'user':
        users.forEach(user => {
          grouped[user.name] = tickets.filter(ticket => ticket.userId === user.id);
        });
        // grouped['Unassigned'] = tickets.filter(ticket => !ticket.userId);
        break;
      case 'priority':
        ['No priority', 'Low', 'Medium', 'High', 'Urgent'].forEach((priority, index) => {
          grouped[priority] = tickets.filter(ticket => ticket.priority === index);
        });
        break;
      default:
        return { 'All Tickets': tickets };
    }

    return grouped;
  };

  const sortTickets = (ticketGroup) => {
    return ticketGroup.sort((a, b) => {
      if (sorting === 'priority') {
        return b.priority - a.priority;
      } else if (sorting === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  const groupedTickets = groupTickets();

  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([groupName, ticketGroup]) => (
        <Column 
          key={groupName} 
          title={groupName} 
          tickets={sortTickets(ticketGroup)}
          users={users}
          grouping={grouping}
          onAddTicket={onAddTicket}
          onUpdateTicket={onUpdateTicket}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;