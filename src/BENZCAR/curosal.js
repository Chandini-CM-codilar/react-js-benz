import Img1 from "./benze1.jpeg";
import Img2 from "./benze2.webp";
import Img3 from "./benze3.jpeg";
import Img4 from "./benze4.jpeg";
import "./curosal.css"

function curosal(){
    return(
       
<section className="carousel">
  <ol className="carousel__viewport">
    <li id="carousel__slide1"
        tabindex="0"
        className="carousel__slide">
      <div class="carousel__snapper"></div>
        <a href="#carousel__slide4"
           class="carousel__prev">Go to last slide</a>  <div class="carousel__snapper">
        <a href="#carousel__slide2"
           className="carousel__next">Go to next slide</a>
           <img src={Img1} className="Img1" alt="Benze car1"/>
      </div>
    </li>
    <li id="carousel__slide2"
        tabindex="0"
        className="carousel__slide">
      <div className="carousel__snapper"></div>
      <a href="#carousel__slide1"
         className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide3"
         className="carousel__next">Go to next slide</a>
           <img src={Img2} classNameName="Img2" alt="Benze car2"/>
    </li>
    <li id="carousel__slide3"
        tabindex="0"
        className="carousel__slide">
      <div className="carousel__snapper"></div>
      <a href="#carousel__slide2"
         className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide4"
         className="carousel__next">Go to next slide</a>
           <img src={Img3} classNameName="Img3" alt="Benze car3"/>
    </li>
    <li id="carousel__slide4"
        tabindex="0"
        className="carousel__slide">
      <div className="carousel__snapper"></div>
      <a href="#carousel__slide3"
         className="carousel__prev">Go to previous slide</a>
      <a href="#carousel__slide1"
         className="carousel__next">Go to first slide</a>
           <img src={Img4} classNameName="Img4" alt="Benze car4"/>
    </li>
  </ol>
 
 
</section>
    );
}
export default curosal;
