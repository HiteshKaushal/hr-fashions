import about from '../images/2.png';
const About= () => {

    return(
   <section id="about" className="about section-padding">
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-lg-4">
                <div className="about-img">
                    <img src={about} alt="" />
                </div>
            </div>
            <div className="col-sm-12 col-lg-8">
                <div className="about-content">
                    <h2>About Hr Fashions</h2>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo explicabo 
                            ipsam deserunt necessitatibus illum laborum. Incidunt ex quis et eius?
                             Ea quasi,beatae enim magnam odit inventore placeat vero id
                             beatae enim magnam odit inventore placeat vero idLorem ipsum dolor sit amet consectetur adipisicing elit. Illo explicabo 
                            ipsam deserunt necessitatibus illum laborum. Incidunt ex quis et eius?
                             Ea quasi,beatae enim magnam odit inventore placeat vero id
                             beatae enim magnam odit inventore placeat vero id.</p>
                    <a href="#">Learn More</a>
                    </div>

                </div>

            </div>
        </div>
    </div>
   </section>


    );
};
export default About;