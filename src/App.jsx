import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import { fetchTickets } from './utils/apiUtils';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching data...');
        const data = await fetchTickets();
        console.log('Data received:', data);
        if (!data.tickets || !data.users) {
          throw new Error('Invalid data structure received');
        }
        setTickets(data.tickets);
        setUsers(data.users);
        setIsLoading(false);
      } catch (err) {
        console.error("Error in fetchData:", err);
        setError(`Failed to fetch data: ${err.message}`);
        setIsLoading(false);
      }
    };
  
    fetchData();
  
    const savedGrouping = localStorage.getItem('grouping');
    const savedSorting = localStorage.getItem('sorting');
    if (savedGrouping) setGrouping(savedGrouping);
    if (savedSorting) setSorting(savedSorting);
  }, []);

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
    localStorage.setItem('grouping', newGrouping);
  };

  const handleSortingChange = (newSorting) => {
    setSorting(newSorting);
    localStorage.setItem('sorting', newSorting);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleStatusChange = (ticketId, newStatus) => {
    setTickets(prevTickets =>
      prevTickets.map(ticket =>
        ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
      )
    );
  };

  const handleAddTicket = (newTicket) => {
    setTickets(prevTickets => [...prevTickets, newTicket]);
  };

  return (
    <div className="App">
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!isLoading && !error && (
        <>
          <Header 
            grouping={grouping} 
            sorting={sorting}
            onGroupingChange={handleGroupingChange}
            onSortingChange={handleSortingChange}
          />
          <KanbanBoard 
            tickets={tickets} 
            users={users} 
            grouping={grouping} 
            sorting={sorting}
          />
        </>
      )}
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import KanbanBoard from './components/KanbanBoard';
// import { fetchTickets } from './utils/apiUtils';
// import './App.css';

// function App() {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [grouping, setGrouping] = useState('status');
//   const [sorting, setSorting] = useState('priority');
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // useEffect(() => {
//     // const fetchData = async () => {
//     //   try {
//     //     setIsLoading(true);
//     //     const data = await fetchTickets();
//     //     setTickets(data.tickets);
//     //     setUsers(data.users);
//     //     setIsLoading(false);
//     //   } catch (err) {
//     //     console.error("Error in fetchData:", err);
//     //     setError(`Failed to fetch data: ${err.message}`);
//     //     setIsLoading(false);
//     //   }
//     // };

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           setIsLoading(true);
//           const data = await fetchTickets();
//           console.log('Fetched data:', data); // Debug log
//           setTickets(data.tickets);
//           setUsers(data.users);
//           setIsLoading(false);
//         } catch (err) {
//           console.error("Error in fetchData:", err);
//           setError(`Failed to fetch data: ${err.message}`);
//           setIsLoading(false);
//         }
//       };

//     fetchData();

//     const savedGrouping = localStorage.getItem('grouping');
//     const savedSorting = localStorage.getItem('sorting');
//     if (savedGrouping) setGrouping(savedGrouping);
//     if (savedSorting) setSorting(savedSorting);
//   }, []);

//   const handleGroupingChange = (newGrouping) => {
//     setGrouping(newGrouping);
//     localStorage.setItem('grouping', newGrouping);
//   };

//   const handleSortingChange = (newSorting) => {
//     setSorting(newSorting);
//     localStorage.setItem('sorting', newSorting);
//   };

//   const handleAddTicket = (newTicket) => {
//     setTickets(prevTickets => [...prevTickets, newTicket]);
//   };

//   const handleUpdateTicket = (ticketId, updates) => {
//     setTickets(prevTickets =>
//       prevTickets.map(ticket =>
//         ticket.id === ticketId ? { ...ticket, ...updates } : ticket
//       )
//     );
//   };

//   const handleStatusChange = (ticketId) => {
//     setTickets(prevTickets =>
//       prevTickets.map(ticket => {
//         if (ticket.id === ticketId) {
//           const statuses = ['Backlog', 'Todo', 'In Progress', 'Done', 'Canceled'];
//           const currentIndex = statuses.indexOf(ticket.status);
//           const nextStatus = statuses[(currentIndex + 1) % statuses.length];
//           return { ...ticket, status: nextStatus };
//         }
//         return ticket;
//       })
//     );
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="App">
//       <Header 
//         grouping={grouping} 
//         sorting={sorting}
//         onGroupingChange={handleGroupingChange}
//         onSortingChange={handleSortingChange}
//       />
//       <KanbanBoard 
//         tickets={tickets} 
//         users={users} 
//         grouping={grouping} 
//         sorting={sorting}
//         onAddTicket={handleAddTicket}
//         onUpdateTicket={handleUpdateTicket}
//         onStatusChange={handleStatusChange}
//       />
//     </div>
//   );
// }

// export default App;