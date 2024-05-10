const Stats = () => {
    return(
        <section className="stats section-padding">
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-sm-6">
                        <div className="stat">
                        <i class="bi bi-clock-fill"></i>
                            <h2>158</h2>
                            <p>Hours of Works</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="stat">
                        <i class="bi bi-geo-alt-fill"></i>
                            <h2>25 </h2>
                            <p>Offices</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="stat">
                        <i class="bi bi-people-fill"></i>
                            <h2>254</h2>
                            <p>Happy Customors</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="stat">
                        <i class="bi bi-trophy-fill"></i>
                            <h2>75</h2>
                            <p>Awards Won</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    );

}
export default Stats;