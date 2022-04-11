import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { pickOrUnpickNumber } from "../Features/betSlice";
import { Number } from "./Number"
import "./NumberList.scss"

export const NumberList = () => {

    const dispatch = useDispatch();
    const numberList = useSelector((state) => state.bet.value.pickedNumbers);

    const generateNumbers = () => {
        let numComponents = []

        for (let i = 1; i <= 80; i++) {
            numComponents.push(<Number picked={numberList.includes(i)} number={i} onNumberClicked={() => {
                dispatch(pickOrUnpickNumber(i));
            }}/>);
        }

        return numComponents;
    }

    return (
        <div className="number_list">
            {generateNumbers()}
        </div>
    )
}