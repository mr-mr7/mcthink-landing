import { useEffect, useState } from "react";

const useTimer = (time) => {
  const [timer, setTimer] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    let interval;
    if (show) {
      interval = setInterval(() => {
        let countdown = time.split(":");
        let minutes = parseInt(countdown[0], 10);
        let seconds = parseInt(countdown[1], 10);
        --seconds;
        minutes = seconds < 0 ? --minutes : minutes;
        if (minutes < 0) {
          setShow(false);
          clearInterval(interval);
        }
        seconds = seconds < 0 ? 59 : seconds;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        time = minutes + ":" + seconds;
        setTimer(time);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
      setTimer("");
    };
  }, [show]);

  return [timer, show, setShow];
};
export { useTimer };
