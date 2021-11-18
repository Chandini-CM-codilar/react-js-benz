import IMAGE1 from './1imp.jpg';
import IMAGE2 from './2imp.jpg';
import IMAGE3 from './3imp.jpg';
import './box.css';
function box(){
    return(
<div className="Imagebox">
  <div className="box1" >
          
                 <img src={IMAGE1} className="IMAGE1"alt="Mercedes Benz Logo" />
        </div>
        <div className="box2" >
          
                 <img src={IMAGE2} className="IMAGE2"alt="Mercedes Benz Logo" />
        </div>
        <div className="box3">
           
                 <img src={IMAGE3} className="IMAGE3"alt="Mercedes Benz Logo" />
        </div>
        
        </div>
);
}
export default box;
