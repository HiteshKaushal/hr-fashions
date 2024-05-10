import port1 from "../images/portfolio/port1.jpg"
import port2 from "../images/portfolio/port2.jpg"
import port3 from "../images/portfolio/port3.jpg"
import port4 from "../images/portfolio/port4.jpg"
import port5 from "../images/portfolio/port5.jpg"
import port6 from "../images/portfolio/port6.jpg"
const Portfolio = () => {

return(
    <section id="portfolio" className="portfolio section-padding">
<div className="container">
    <div className="row">
        <div className="col-sm-12">
            <div className="section-header">
                <h2>Our Work</h2>
                <div className="line">
                    Lorem Ipdum Dolor sit Amet.
                </div>
            </div>
        </div>
    </div>
    <div className="row port-img">
    <div className="col-sm-6 col-lg-4">
            <img src={port1} alt=""  className="img-fluid"/>
        </div>
        <div className="col-sm-6 col-lg-4">
            <img src={port2} alt=""  className="img-fluid"/>
        </div>
        <div className="col-sm-6 col-lg-4">
            <img src={port3} alt=""  className="img-fluid"/>
        </div>
        <div className="col-sm-6 col-lg-4">
            <img src={port4} alt=""  className="img-fluid"/>
        </div>
        <div className="col-sm-6 col-lg-4">
            <img src={port5} alt=""  className="img-fluid"/>
        </div>
        <div className="col-sm-6 col-lg-4">
            <img src={port6} alt=""  className="img-fluid"/>
        </div>
    </div>
</div>
    </section>

);

};
export default Portfolio;