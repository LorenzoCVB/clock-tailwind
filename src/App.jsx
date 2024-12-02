import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState({
    hour: "",
    min: "",
    sec: "",
    currentDay: "",
  });

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime((prev) => ({
        ...prev,
        hour: String(now.getHours()).padStart(2, "0"),
        min: String(now.getMinutes()).padStart(2, "0"),
        sec: String(now.getSeconds()).padStart(2, "0"),
        currentDay: String(
          now.toLocaleDateString("en-US", { weekday: "short" })
        ).toUpperCase(),
      }));
    };
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row items-center h-screen bg-black text-red-700 text-clock-font font-bold justify-center">
      <div className="flex flex-row space-x-2">
        <div className="w-[2ch] text-right">{time.hour}</div>
        <div>:</div>
        <div className="w-[2ch] text-center">{time.min}</div>
        <div>:</div>
        <div className="w-[2ch] text-center">{time.sec}</div>
      </div>
      <div className="font-orbitron text-week-font font-bold ml-8 pt-4">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className={`week ${
              day === time.currentDay ? "text-red-700" : "text-red-950"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
