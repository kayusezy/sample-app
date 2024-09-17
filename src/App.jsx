import { useState } from 'react';
import './App.css';
import UserInfo from './UserInfo';
import UserForm from './UserForm';

function App() {
  const [user, setUser] = useState({ name: '', age: '' });

  const handleUserChange = (newUser) => {
    setUser(newUser);
  };

  return (
    <div className="App">
      <UserForm onUserChange={handleUserChange} />
      <UserInfo user={user} />
    </div>
  );
}

export default App;
