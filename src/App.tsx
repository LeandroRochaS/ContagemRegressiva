//import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "./App.css";
import Count from "./components/Count";
import countDown from "./scripts/countDown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import { useState } from "react";

function App() {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  setInterval(() => {
    const { textDay, textHour, textMinute, textSecond } = countDown(
      new Date("2025-01-01")
    );

    setDay(textDay);
    setHour(textHour);
    setMinute(textMinute);
    setSecond(textSecond);
  }, 1000);

  // const targetDate = new Date("2023-12-31T24:00:00").getTime();

  return (
    <>
      <div className="body">
        {/* <div className="container">
          <FlipClockCountdown
            to={targetDate}
            style={{ fontSize: "2rem" }}
            className="flip-clock"
          /> */}
        <h1>2025</h1>
        <h1 className="reverse">2025</h1>
        <div className="contagem-regressiva">
          <Count title="Dias" numero={`${day}`} />
          <Count title="Horas" numero={hour < 10 ? `0${day}` : `${day}`} />
          <Count
            title="Minutos"
            numero={minute < 10 ? `0${minute}` : `${minute}`}
          />
          <Count
            title="Segundos"
            numero={second < 10 ? `0${second}` : `${second}`}
          />
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default App;
