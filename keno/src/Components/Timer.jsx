import { useTimer } from "../Hooks/useTimer";
import "./Timer.scss"

export const Timer = () => {

    const timeLeft = useTimer();

    return (
        <div className="timer">
            <p className="timer_header">Next lottery in:</p>
            <p className="timer_time">{timeLeft}</p>
        </div>
    );
}