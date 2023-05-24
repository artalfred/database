import { useState, useRef } from "react";

export default function StopWatch() {
  const [second, setSecond] = useState(0);
  const time = useRef();

  const Start = () => {
    time.current = setInterval(() => {
      setSecond((second) => second + 1);
    }, 1000);
  };

  const Stop = () => {
    clearInterval(time.current);
  };

  const Reset = () => {
    clearInterval(time.current);
    setSecond(0);
  };

  return (
    <div>
      <hr />
      <h2>Time : {second}</h2>
      <button className="btn btn-success" onClick={Start}>
        Start
      </button>
      <button className="btn btn-danger" onClick={Stop}>
        Stop
      </button>
      <button className="btn btn-light" onClick={Reset}>
        Reset
      </button>
    </div>
  );
}
