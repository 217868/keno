import { useEffect, useState } from "react";

export const useTimer = () => {

    const [timeLeft, setTimeLeft] = useState(60);

    useEffect(() => {
      setInterval(() => {
        setTimeLeft(time => time < 0 ? 60 : time - 1);
      }, 1000)
    }, [])
    
    return timeLeft;
}