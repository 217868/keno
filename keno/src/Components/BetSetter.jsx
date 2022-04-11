import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { setBetValue } from "../Features/betSlice";
import "./BetSetter.scss"

export const BetSetter = () => {

    const dispatch = useDispatch();
    const betValue = useSelector((state) => state.bet.value.betValue);


    return (
        <div className="bet_setter">
            <div className="quick_bet_section">
                <button onClick={() => dispatch(setBetValue(100))}>100</button>
                <button onClick={() => dispatch(setBetValue(200))}>200</button>
                <button onClick={() => dispatch(setBetValue(300))}>300</button>
                <button onClick={() => dispatch(setBetValue(500))}>500</button>
                <button onClick={() => dispatch(setBetValue(1000))}>1000</button>
            </div>
            <input className="bet_input" value={betValue} onChange={(e) => dispatch(setBetValue(e.target.value))}/>
        </div>
    )
}