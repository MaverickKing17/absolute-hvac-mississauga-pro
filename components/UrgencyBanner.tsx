
import React, { useState, useEffect } from 'react';

const UrgencyBanner: React.FC = () => {
  const [temp, setTemp] = useState<number | null>(null);
  const [location, setLocation] = useState<string>("Mississauga");

  useEffect(() => {
    // Simulated weather API check
    const mockTemp = Math.floor(Math.random() * (10 - (-5) + 1)) + (-5);
    setTemp(mockTemp);
    
    // Attempt real geolocation for "Wow" factor
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        // In a real app we'd fetch actual weather for these coords
        console.log("Location detected for dynamic urgency logic");
      });
    }
  }, []);

  if (temp === null) return null;

  // Logic: If below 0°C, show urgency
  if (temp <= 0) {
    return (
      <div className="bg-red-600 text-white py-2 px-4 text-center text-sm font-bold animate-pulse">
        <span className="flex items-center justify-center gap-2">
          ⚠️ High Demand: Emergency Furnace Repair Crews available in {location} today. Current Temp: {temp}°C
        </span>
      </div>
    );
  }

  return (
    <div className="bg-savings-green text-white py-2 px-4 text-center text-sm font-bold">
      <span className="flex items-center justify-center gap-2">
        ❄️ Cold snap expected this weekend. Book your Heating Tune-up now to avoid breakdowns.
      </span>
    </div>
  );
};

export default UrgencyBanner;
