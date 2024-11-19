import discEssence from '../assets/essence.jpg';
import "../disc.css";

function Essence () {
return (
    <div className="disc"> 
    <img src={discEssence} alt="discgolf disc essence" className="img" />
    <h2 className="disc-title">Essence</h2>
    <p className="disc-text">159kr</p>
    </div>
);

}

export default Essence;