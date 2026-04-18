import { useEffect, useState } from "react";

export default function Exercice1() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const tick = () => {
    setCurrentDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "12px", width: "fit-content" }}>
      <h1>Hello, world!</h1>
      <h2>It is {currentDate.toLocaleTimeString()}.</h2>
    </div>
  );
}
