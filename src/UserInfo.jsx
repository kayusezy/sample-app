import PropTypes from 'prop-types'; // Import PropTypes

function UserInfo({ user }) {
  return (
    <div className='userInfo'>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

// Define PropTypes for UserInfo
UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired, // Change to PropTypes.number if age is a number
  }).isRequired,
};

export default UserInfo;
