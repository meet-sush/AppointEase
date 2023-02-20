const Susbscribe = () => {
  return (
    <section class="update-area">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-12">
            <div class="update-content">
              <h2 data-wow-delay="0.2s" class="wow fadeInLeft">
                Stay up to date with the latest <span> news! </span>
              </h2>
              <form data-toggle="validator">
                <input
                  type="email"
                  id="emails"
                  class="form-control"
                  placeholder="Enter Your Email Adress"
                  name="EMAIL"
                  required
                  autocomplete="off"
                />

                <button class="default-button box-button" type="submit">
                  Subscribe
                </button>
              </form>
              <p data-wow-delay="0.6s">
                *We won't spam you. we promise!<i class="icofont-like"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Susbscribe;
