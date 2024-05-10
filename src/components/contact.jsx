const Contact = () => {
    return(
     <section id="contact" className="contact section-padding">
     <div className="container">
     <div className="row">
                    <div className="col-sm-12">
                        <div className="section-header">
                            <h2>Contact Us</h2>
                            <div className="line"></div>
                            <p>lorem ipsum dolor sit amet.</p>

                        </div>
                    </div>
                </div>

<div className="row">
    <div className="col-sm-12 col-lg-4">
        <div className="single-contact">
            <div className="contact-icon">
            <i class="bi bi-house-fill"></i>
            </div>
            <h2>Our Office</h2>
            <p>#123 Sector23 Chandigarh<br/>160101 India</p>
        </div>

    </div>

    <div className="col-sm-12 col-lg-8">
        <div className="form-area">
            <form action="">
            <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Your Query</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </form>
        </div>
    </div>
</div>
     </div>
   </section>
    );
}
export default Contact;