const Susbscribe = () => {
  return (
    <section className="update-area">
      <div className="container">
        <div className="row text-center">
          <div className="col-lg-12">
            <div className="update-content">
              <h2 data-wow-delay="0.2s" className="wow fadeInLeft">
                Stay up to date with the latest <span> news! </span>
              </h2>
              <form data-toggle="validator">
                <input
                  type="email"
                  id="emails"
                  className="form-control"
                  placeholder="Enter Your Email Adress"
                  name="EMAIL"
                  required
                  autocomplete="off"
                />

                <button className="default-button box-button" type="submit">
                  Subscribe
                </button>
              </form>
              <p data-wow-delay="0.6s">
                *We won't spam you. we promise!<i className="icofont-like"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Susbscribe;
