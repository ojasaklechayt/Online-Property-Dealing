import React, { useState } from 'react';
import PropertyList from './Components/PropertyList';
import PropertyFilter from './Components/PropertyFilter';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import './App.css';

interface NavbarProps {
  setLoggedin: React.Dispatch<React.SetStateAction<boolean>>;
}

const PropertyPage: React.FC<NavbarProps> = () => {
  const [loggedin, setLoggedin] = useState(false);

  return (
    <div className="property-page">
      <Navbar setLoggedin={setLoggedin} />
      <h1>Property Listings</h1>
      {loggedin ? (
        // Render these components if the user is logged in
        <>
          <PropertyFilter />
          <PropertyList />
          {/* Additional components or features for authenticated users */}
          {/* <button>Add Property</button> Example of a feature for authenticated users */}
          <button>Delete Property</button> {/* Example of a feature for authenticated users */}
          <button onClick={() => setLoggedin(false)}>Logout</button>
        </>
      ) : (
        // Render a message or login/signup form for unauthenticated users
        <>
          <p>Please log in to access property features.</p>
          <Signup />
          <Login setLoggedin={setLoggedin} />
          {/* You can add a login/signup form here */}
        </>
      )}
    </div>
  );
};

export default PropertyPage;
