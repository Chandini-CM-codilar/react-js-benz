import Img1 from "./grid1.jpeg";
import Img2 from "./grid2.jpeg";
import Img3 from "./grid3.jpeg";
import Img4 from "./grid4.jpeg";
import Img5 from "./grid5.jpeg";
import Img6 from "./grid6.jpeg";
import Img7 from "./grid7.jpeg";
import Img8 from "./grid8.jpeg";
import Img9 from "./grid9.jpeg";
import Img10 from "./grid10.jpeg";
import Img11 from "./grid11.jpeg";
import Img12 from "./grid12.jpeg";
import Img13 from "./grid13.jpeg";
import Img14 from "./grid14.jpeg";
import Img15 from "./grid15.jpeg";

import './grid.css';

function grid(){
    return(

<div className="image-grids">
   <div class="first-grid">
      <div class="left-first-grid">
         <img src={Img1} className="Img1" alt="grid1"/>
         <div class="grid1_cont">The Mercedez-Benz SL.</div>
      </div>
      <span class="right-first-grid">
         <img src={Img2} className="Img2" alt="grid2"/>
         <img src={Img3} className="Img3" alt="grid3"/>

         <img src={Img15} className="Img15" alt="grid15"/>

      </span>
   </div>
   <div class="second-grid">
      <img src={Img4} className="Img4" alt="grid4"/>
      <img src={Img5} className="Img5" alt="grid5"/>
      <img src={Img6} className="Img6" alt="grid6"/>
  </div>
  <div class="third-grid">
  <img src={Img7} className="Img7" alt="grid7"/>
      <img src={Img8} className="Img8" alt="grid8"/>
      <img src={Img9} className="Img9" alt="grid9"/>
</div>
<div class="fourth-grid">
   <div class="left-fourth-grid">
   <img src={Img10} className="Img10" alt="grid10"/>
     
</div>
<div class="right-fourth-grid">
      <img src={Img11} className="Img11" alt="grid11"/>
      <img src={Img12} className="Img12" alt="grid12"/>
     
</div>
</div>
<div class="fifth-grid">

      <img src={Img13} className="Img13" alt="grid13"/>
      <img src={Img14} className="Img14" alt="grid14"/>
    

</div>


</div>

);
}
export default grid;