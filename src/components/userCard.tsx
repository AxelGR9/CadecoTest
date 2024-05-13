import React from 'react';

// Definir el tipo de las props
interface UserCardProps {
  name: string;
  age: number;
}

// Componente funcional UserCard
const UserCard: React.FC<UserCardProps> = ({ name, age }) => {
  return (
    <div>
      <h2>User Card</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
