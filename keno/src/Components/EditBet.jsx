import { BetSetter } from "./BetSetter";
import { NumberList } from "./NumberList";
import "./EditBet.scss"

export const EditBet = () => {

    return (
        <div className="edit_bet">
            <NumberList/>
            <BetSetter/>
            <button className="place_bet_btn" onClick={() => console.log("Bet placed")}>Place bet</button>
        </div>
    );
}