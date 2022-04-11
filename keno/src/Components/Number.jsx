import "./Number.scss"

export const Number = ({picked, number, onNumberClicked}) => {

    return (
        <div className={picked ? "number-picked" : "number"} onClick={onNumberClicked}>
            {number}
        </div>
    )
}