// src/components/PropertyList.tsx
import React, { useEffect, useState } from 'react';

interface Property {
    _id: string;
    name: string;
    location: string;
    price: number;
    type: string;
}

const PropertyList: React.FC = () => {
    const [properties, setProperties] = useState<Property[]>([]);

    useEffect(() => {
        // Fetch property data from your backend API
        fetch('http://localhost:5000/api/properties')
            .then((response) => response.json())
            .then((data) => setProperties(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="property-list">
            <h1>Property Listings</h1>
            {properties.map((property) => (
                <div key={property._id}>
                    <h3>{property.name}</h3>
                    <p>Location: {property.location}</p>
                    <p>Price: ${property.price}</p>
                    <p>Type: {property.type}</p>
                </div>
            ))}
        </div>
    );
};

export default PropertyList;
