import discPeach from '../assets/peach.jpg';
import "../disc.css";

function Peach () {
return (
    <div className="disc"> 
    <img src={discPeach} alt="discgolf disc peach" className="img" />
    <h2 className="disc-title">Peach</h2>
    <p className="disc-text">269kr</p>
    </div>
);

}

export default Peach;