import React from 'react';

function UserCard({ user }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '5px' }}>
      <h2>{user.name}</h2>
      <p>Age: {user.age ?? 'Non spécifié'}</p>
     {/* <p>Age: {user.age}</p> {/* Erreur possible si age est `undefined` */}
    </div>
  );
}

export default UserCard;
