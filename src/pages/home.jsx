import { useEffect, useState } from 'react';

import api from '../libs/api';
import './home.css';

function Home() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    api
      .get('/api/data')
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    api
      .post('/api/savaDate', profile)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error);
      });
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <div className="card">
        {isEditing ? (
          <form>
            <label htmlFor="name">
              Name:
              <input type="text" name="name" value={profile.name} onChange={handleInputChange} />
            </label>
            <br />
            <label htmlFor="email">
              Email:
              <input type="email" name="email" value={profile.email} onChange={handleInputChange} />
            </label>
            <br />
            <label htmlFor="phone">
              Phone:
              <input type="tel" name="phone" value={profile.phone} onChange={handleInputChange} />
            </label>
            <br />
            <button type="button" onClick={handleSave}>
              Save
            </button>
          </form>
        ) : (
          <div>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
            <button type="button" onClick={handleEdit}>
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
