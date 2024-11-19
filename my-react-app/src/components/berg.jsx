import discBerg from '../assets/berg.jpg';
import "../disc.css";

function Berg () {

return (
    <div className="disc">
    <img src={discBerg} alt="discgolf disc berg" className="img" />
    <h2 className="disc-title">Berg</h2>
    <p className="disc-text">199kr</p>
    <button className="disc-btn">More Information</button>
    </div>
); 

}

export default Berg;