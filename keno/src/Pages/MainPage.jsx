import logo from '../Assets/logo.png'
import { BettingSection } from '../Components/BettingSection';
import { Timer } from '../Components/Timer';
import './MainPage.scss';

export const MainPage = () => {
    return (
    <>
        <img className="logo" src={logo}/>
        <Timer/>
        <BettingSection/>
    </>
    );
}