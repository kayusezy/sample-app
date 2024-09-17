import { useState } from 'react';
import PropTypes from 'prop-types'; // Import prop-types

function UserForm({ onUserChange }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onUserChange) {
      onUserChange({ name, age });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='inputs-bars'>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
}

// Define prop types for UserForm
UserForm.propTypes = {
  onUserChange: PropTypes.func.isRequired,
};

export default UserForm;
