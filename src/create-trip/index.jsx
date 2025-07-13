import React, { useState } from 'react';
import LocationSearch from '../components/custom/LocationSearch';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { SelectBudgetOptions, SelectTravelersList } from '@/constants/options';

function CreateTrip() {
  const [formData, setFormData] = useState({
    location: '',
    days: '',
    budget: '',
    travelers: '',
  });

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(`📝 ${name}:`, value);
  };
  if (name=='days'&&value>10){
    console.log(Trip days should be less than 10);
    
  }
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full sm:px-10 md:px-32 lg:px-56 xl:px-72">
        <h2 className="text-3xl font-bold text-center">Tell us your travel preferences 🏕️🌴</h2>
        <p className="mt-3 text-xl text-center text-gray-500">
          Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
        </p>

        <div className="flex flex-col gap-10 mt-20">
          {/* Location Input */}
          <div>
            <h2 className="my-3 text-xl font-medium">What is your destination of choice?</h2>
            <LocationSearch
              onSelect={(place) => {
                handleInputChange('location', place.display_name);
              }}
            />
            {formData.location && (
              <p className="mt-4 font-medium text-green-600">
                ✅ Selected: {formData.location}
              </p>
            )}
          </div>

          {/* Trip Duration */}
          <div>
            <h2 className="my-3 text-xl font-medium">How many days are you planning your trip?</h2>
            <Input
              placeholder="Ex. 3"
              type="number"
              value={formData.days}
              onChange={(e) => handleInputChange('days', e.target.value)}
            />
          </div>

          {/* Budget Selection */}
          <div>
            <h2 className="my-3 text-xl font-medium">What is Your Budget?</h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectBudgetOptions.map((item) => (
                <div
                  key={item.id}
                  className={`p-4 text-center border rounded-lg cursor-pointer hover:shadow-lg ${
                    formData.budget === item.title ? 'border-black shadow-md' : ''
                  }`}
                  onClick={() => handleInputChange('budget', item.title)}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* Traveler Selection */}
          <div>
            <h2 className="my-3 text-xl font-medium">Who do you plan on traveling with on your next adventure?</h2>
            <div className="grid grid-cols-3 gap-5 mt-5">
              {SelectTravelersList.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 text-center border rounded-lg cursor-pointer hover:shadow-lg ${
                    formData.travelers === item.title ? 'border-black shadow-md' : ''
                  }`}
                  onClick={() => handleInputChange('travelers', item.title)}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* Generate Trip Button */}
          <div className="flex justify-end my-10">
            <Button onClick={() => console.log('🧠 Final Form Data:', formData)}>
              Generate Trip
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
