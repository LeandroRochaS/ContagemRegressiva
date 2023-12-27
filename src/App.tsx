import "./App.css";
import Count from "./components/Count";
import countDown from "./scripts/countDown";
import { useState } from "react";

function App() {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  setInterval(() => {
    const { textDay, textHour, textMinute, textSecond } = countDown(
      new Date("2024-01-01")
    );

    setDay(textDay);
    setHour(textHour);
    setMinute(textMinute);
    setSecond(textSecond);
  }, 1000);

  return (
    <>
      <div>
        <div className="container">
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
        </div>
      </div>
    </>
  );
}

export default App;
