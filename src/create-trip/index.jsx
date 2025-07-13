import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SelectBudgetOptions, SelectTravelersList } from '@/constants/options';
import LocationSearch from '@/components/custom/LocationSearch';
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { generateGeminiResponse } from '../service/AIModel.jsx'; 

function CreateTrip() {
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({
    location: '',
    noOfDays: '',
    budget: '',
    noOfPeople: '',
  });

  const handleLocationSelect = (selectedPlace) => {
    setPlace(selectedPlace);
    setFormData({ ...formData, location: selectedPlace });
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const onGenerateTrip = async () => {
    console.log("Form Data:", {
      ...formData,
      location: formData.location?.display_name || formData.location?.label || "N/A"
    });
    
    if (
      !formData?.noOfDays ||
      !formData?.location ||
      !formData?.budget ||
      !formData?.noOfPeople
    ) {
      toast.error("Please enter all the details");
      return;
    }

    if (formData?.noOfDays > 7) {
      toast.error("Please enter no. of days less than 8");
      return;
    }

    toast.info("Generating your trip plan...");

    const prompt = `Generate Travel Plan for Location: ${
      formData.location?.display_name || formData.location?.label
    }, for ${formData.noOfDays} Days for ${formData.noOfPeople} with a ${formData.budget} budget. 
Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for ${formData.noOfDays} days with each day plan with best time to visit in JSON format.`;

    try {
      const result = await generateGeminiResponse(prompt);
      console.log("Prompt to Gemini:", prompt);
      if (result) {
        console.log("Your Generated Trip:", result);
        toast.success("Trip plan generated successfully!");
        // TODO: Navigate or display result
      } else {
        toast.error("No response received from Gemini");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong while generating the trip");
    }
  };

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full sm:px-10 md:px-32 lg:px-56 xl:px-72">
          <h2 className="text-3xl font-bold text-center">Tell us your travel preferences 🏕️🌴</h2>
          <p className="mt-3 text-xl text-center text-gray-500">
            Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
          </p>

          <div className="flex flex-col gap-10 mt-20">
            {/* Location */}
            <div>
              <h2 className="my-3 text-xl font-medium">What is your destination of choice?</h2>
              <LocationSearch onSelect={handleLocationSelect} />
              {place && (
                <p className="mt-4 font-medium text-green-600">
                  ✅ Selected: {place.display_name}
                </p>
              )}
            </div>

            {/* Days */}
            <div>
              <h2 className="my-3 text-xl font-medium">How many days are you planning your trip?</h2>
              <Input
                id="noOfDays"
                name="noOfDays"
                placeholder="Ex. 3"
                type="number"
                value={formData.noOfDays}
                onChange={(e) => handleInputChange("noOfDays", e.target.value)}
              />
            </div>

            {/* Budget */}
            <div>
              <h2 className="my-3 text-xl font-medium">What is your budget?</h2>
              <div className="grid grid-cols-3 gap-5 mt-5">
                {SelectBudgetOptions.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 text-center border rounded-lg cursor-pointer hover:shadow-lg ${
                      formData.budget === item.title ? 'border-blue-500 shadow-md' : ''
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

            {/* Travelers */}
            <div>
              <h2 className="my-3 text-xl font-medium">Who do you plan on traveling with?</h2>
              <div className="grid grid-cols-3 gap-5 mt-5">
                {SelectTravelersList.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 text-center border rounded-lg cursor-pointer hover:shadow-lg ${
                      formData.noOfPeople === item.title ? 'border-blue-500 shadow-md' : ''
                    }`}
                    onClick={() => handleInputChange('noOfPeople', item.title)}
                  >
                    <h2 className="text-4xl">{item.icon}</h2>
                    <h2 className="text-lg font-bold">{item.title}</h2>
                    <h2 className="text-sm text-gray-500">{item.desc}</h2>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-end my-10">
              <Button onClick={onGenerateTrip}>Generate Trip</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTrip;
