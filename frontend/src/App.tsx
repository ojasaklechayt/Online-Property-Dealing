// src/components/PropertyPage.tsx
import React, { useState } from 'react';
import PropertyList from './Components/PropertyList';
import PropertyFilter from './Components/PropertyFilter';
import Signup from './Components/Signup';
import Login from './Components/Login';

const PropertyPage: React.FC = () => {
  const [loggedin, Setloggedin] = useState(false);
  return (
    <div className="property-page">
      <h1>Property Listings</h1>
      {loggedin ? (
        // Render these components if the user is logged in
        <>
          <PropertyFilter />
          <PropertyList />
          {/* Additional components or features for authenticated users */}
          <button>Add Property</button> {/* Example of a feature for authenticated users */}
          <button>Delete Property</button> {/* Example of a feature for authenticated users */}
          <button onClick={() => Setloggedin(false)}>Logout</button>
        </>
      ) : (
        // Render a message or login/signup form for unauthenticated users
        <>
          <p>Please log in to access property features.</p>
          <Signup />
          <Login setLoggedin = {Setloggedin} />
        </>
        // You can add a login/signup form here
      )}
    </div>
  );
};

export default PropertyPage;
