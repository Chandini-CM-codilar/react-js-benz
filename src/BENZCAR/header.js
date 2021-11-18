import Image from './logo.svg';
import Image1 from './benz.jpg';
import Search from './search.png';


import './header.css';

function logo() {

    return (
        <div className="header">
            <div className="logo">
                <img src={Image} className="IMAGE" alt="benze logo" />
                <img src={Image1} className="IMAGE1" alt="benze" />
            </div>


            <div className="nav">
                <div className="upperbar">
                    <ul type="none">
                        <li className="i">i</li>
                        <li>Provider/Privacy Statement</li>
                        <li className="lang">Deutsch</li>
                    </ul>
                    </div>
                    <div className="lowerbar">
                        <ul type="none">
                            <li>Company</li>
                            <li>Vehicles</li>
                            <li>Design</li>
                            <li>Innovation</li>
                            <li>Museum & History</li>
                            <li>Sports</li>
                            <li>Events</li>
                            <li>Lifestyle</li>
                            <img src={Search} className="Search" alt="search icon"/>
                        </ul>
                    </div>
                </div>
            </div>
        
    );
}
export default logo;