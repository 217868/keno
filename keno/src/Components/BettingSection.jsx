import { BetResults } from "./BetResults";
import { BettingPane } from "./BettingPane";
import { EditBet } from "./EditBet";
import "./BettingSection.scss"

export const BettingSection = () => {
    return (
        <div className="betting_section">
            <BettingPane header={"Your picks!"}>
                <EditBet/>
            </BettingPane>
            <BettingPane header={"Last lottery results:"}>
                <BetResults/>
            </BettingPane>
        </div>
    );
}