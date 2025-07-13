import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const LocationSearch = ({ onSelect }) => {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const fetchLocations = async (input) => {
    try {
      const res = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: input,
          format: 'json',
          addressdetails: 1,
          limit: 5,
        },
      });

      const results = res.data.map((place) => ({
        label: place.display_name,
        value: place,
      }));

      setOptions(results);
    } catch (err) {
      console.error('Nominatim fetch error:', err);
    }
  };

  useEffect(() => {
    if (inputValue.length > 2) {
      fetchLocations(inputValue);
    } else {
      setOptions([]);
    }
  }, [inputValue]);

  const handleChange = (selectedOption) => {
    onSelect(selectedOption.value); // entire place object
  };

  return (
    <Select
      placeholder="Type a city name..."
      options={options}
      onInputChange={(val) => setInputValue(val)}
      onChange={handleChange}
      className="text-black"
    />
  );
};

export default LocationSearch;
