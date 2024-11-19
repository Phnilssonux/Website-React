import discPure from '../assets/pure.jpg';
import "../disc.css";

function Pure () {

return (
    <div className="disc"> 
    <img src={discPure} alt="discgolf disc pure" className="img" />
    <h2 className="disc-title">Pure</h2>
    <p className="disc-text">119kr</p>
    <button className="disc-btn">More Information</button>
    </div>
);

}

export default Pure;