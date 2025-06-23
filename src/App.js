import React, { useState } from 'react';
import Header from './Header';
import UserCard from './UserCard';

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob' }, //cd react-debug-app Erreur : il manque `age`
    { id: 3, name: 'Charlie', age: 30 }
  ]);

  return (
    <div>
      <Header title="User List App" />
      <div>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
