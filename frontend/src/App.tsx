// src/components/PropertyPage.tsx
import React from 'react';
import PropertyList from './Components/PropertyList';
import PropertyFilter from './Components/PropertyFilter';
import { useUser } from './context/UserContext'; // Import useUser
import Signup from './Components/Signup';
import Login from './Components/Login';

const PropertyPage: React.FC = () => {
  const { user } = useUser(); // Get user from the context

  return (
    <div className="property-page">
      <h1>Property Listings</h1>
      {user ? (
        // Render these components if the user is logged in
        <>
          <PropertyFilter />
          <PropertyList />
          {/* Additional components or features for authenticated users */}
          <button>Add Property</button> {/* Example of a feature for authenticated users */}
          <button>Delete Property</button> {/* Example of a feature for authenticated users */}
        </>
      ) : (
        // Render a message or login/signup form for unauthenticated users
        <>
            // Render a message or login/signup form for unauthenticated users
          <p>Please log in to access property features.</p>
          <Signup />
          <Login />
        </>
        // You can add a login/signup form here
      )}
    </div>
  );
};

export default PropertyPage;
