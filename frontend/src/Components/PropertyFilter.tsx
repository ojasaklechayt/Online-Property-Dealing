// src/components/PropertyFilter.tsx
import React, { useState } from 'react';

const PropertyFilter: React.FC = () => {
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [type, setType] = useState('');

    const handleFilter = () => {
        // Implement filter logic here
        // You can make a request to the backend with the filter criteria
    };

    return (
        <div className="property-filter">
            <h2>Filter Properties</h2>
            <div>
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="type">Property Type:</label>
                <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="">All</option>
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                    {/* Add more property types as needed */}
                </select>
            </div>
            <button onClick={handleFilter}>Apply Filters</button>
        </div>
    );
};

export default PropertyFilter;
