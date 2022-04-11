import "./BettingPane.scss";

export const BettingPane = ({header, children}) => {

    return (
        <div className="betting_pane">
            <h1 className="header">
                {header}
            </h1>
            <div className="betting_content">
                {children}
            </div>
        </div>
    )
}