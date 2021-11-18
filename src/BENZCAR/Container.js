import Header from "./header.js";
import Curosal from "./curosal.js";
import Search from "./search.js";
import Text from "./text.js";
import Box from "./box.js";
import Grid from "./grid.js";
import Footer from "./footer.js";
import './container.css';

function Container(){
    
        return (
            <div className="container">
                <Header />
                <Curosal/>
                <Search/>
                <Text/>
                <Box/>
                <Grid/>
                <Footer/>
      
            </div>
        );
    
}

export default Container;