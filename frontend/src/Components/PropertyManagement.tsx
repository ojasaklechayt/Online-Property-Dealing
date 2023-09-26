// src/components/PropertyManagement.tsx
import React, { useEffect, useState } from 'react';

interface Property {
    _id: string;
    name: string;
    location: string;
    price: number;
    type: string;
}

const PropertyManagement: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);

    useEffect(() => {
        // Fetch the user's properties from the backend API
        fetch('http://localhost:5000/api/property')
            .then((response) => response.json())
            .then((data) => setProperties(data))
            .catch((error) => console.error(error));
    }, []);

    const handleAddProperty = () => {
        // Implement logic to add a new property
        // Make a POST request to the backend /api/property endpoint with property details
    };

    const handleDeleteProperty = (propertyId: string) => {
        // Implement logic to delete a property
        // Make a DELETE request to the backend /api/property/:id endpoint with the property ID
    };

    return (
        <div className="property-management">
            <h2>Your Properties</h2>
            <button onClick={handleAddProperty}>Add New Property</button>
            {properties.map((property) => (
                <div key={property._id}>
                    <h3>{property.name}</h3>
                    <p>Location: {property.location}</p>
                    <p>Price: ${property.price}</p>
                    <p>Type: {property.type}</p>
                    <button onClick={() => handleDeleteProperty(property._id)}>
                        Delete Property
                    </button>
                </div>
            ))}
        </div>
    );
};

export default PropertyManagement;
