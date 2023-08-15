function ChangePassword() {
    const handlePasswordChange = () => {
      // Simulate password change logic here
      alert('Password updated successfully!');
    };
  
    return (
      <div className="ChangeForm">
        <h2>Change Password</h2>
        <label htmlFor="newPassword">New Password:</label>
        <input type="password" id="newPassword" />
        <button onClick={handlePasswordChange}>Update Password</button>
      </div>
    );
  }
  
  function ChangeId() {
    const handleChangeId = () => {
      // Simulate ID change logic here
      alert('ID updated successfully!');
    };
  
    return (
      <div className="ChangeForm">
        <h2>Change ID</h2>
        <label htmlFor="newId">New ID:</label>
        <input type="text" id="newId" />
        <button onClick={handleChangeId}>Update ID</button>
      </div>
    );
  }