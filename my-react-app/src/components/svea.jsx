import discSvea from '../assets/svea.jpg';
import "../disc.css";

function Svea () {

return (
    <div className="disc"> 
    <img src={discSvea} alt="discgolf disc svea" className="img" />
    <h2 className="disc-title">Svea</h2>
    <p className="disc-text">149kr</p>
    <button className="disc-btn">More Information</button>
    </div>
);

}

export default Svea;