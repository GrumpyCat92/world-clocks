import { useEffect, useState } from "react";
import moment from "moment/moment";

export default function Clock({ name, timezone, id, deleteClock }) {
  const [time, setTime] = useState(moment());

  useEffect(() => {
    let utcTime = moment().utc();
    utcTime.add(timezone, "hours");
    setTime(utcTime);

    const interval = setInterval(() => {
      setTime((prev) => prev.clone().add(1, "seconds"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <span>{name}</span>
      <button className="material-icons md-48" onClick={() => deleteClock(id)}>
        delete
      </button>
      <h2>{time.format("HH:mm:ss")}</h2>
    </div>
  );
}
