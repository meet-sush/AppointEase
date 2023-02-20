import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={`${styles.footer__area} ptb-90`}>
        <div className="container">
          <div className={`${styles.footer__content}`}>
            <div className="row">
              <div className="col-lg-4">
                <div className={`${styles.footer__logo__area}`}>
                  <a className={`${styles.logo}`} href="/">
                    &#9739; Appointment Booking
                  </a>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    quis bibendum auctor consequat ipsum.
                  </p>
                </div>
              </div>

              <div className="col-lg-2">
                <div className={`${styles.footer__menu}`}>
                  <h3>company</h3>
                  <ul>
                    <li>
                      <a href="#">about us</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">features</a>
                    </li>
                    <li>
                      <a href="#">our pricing</a>
                    </li>
                    <li>
                      <a href="#">latest project</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className={`${styles.footer__menu}`}>
                  <h3>support</h3>
                  <ul>
                    <li>
                      <a href="#">FAQ's</a>
                    </li>
                    <li>
                      <a href="#">privacy policy</a>
                    </li>
                    <li>
                      <a href="#">terms & condition</a>
                    </li>
                    <li>
                      <a href="#">community</a>
                    </li>
                    <li>
                      <a href="#">contact us</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4">
                <div className={`${styles.contact__info} `}>
                  <h3>contact info</h3>
                  <ul>
                    <li>
                      <span>location:</span> 6B Highway,Tarkle, NEW YORK
                    </li>
                    <li>
                      <span>email:</span> itagency@gmail.com
                    </li>
                    <li>
                      <span>phone:</span> +0123 456 789
                    </li>
                  </ul>
                </div>
                <div className="contact__icon">
                  <ul>
                    <li>
                      <a href="#">
                        <i
                          data-wow-delay="0.1s"
                          className="fab fa-facebook-f  wow bounce"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          data-wow-delay="0.2s"
                          className="fab fa-twitter  wow bounce"
                        >
                          \e912
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          data-wow-delay="0.3s"
                          className="fab fa-linkedin-in  wow bounce"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          data-wow-delay="0.4s"
                          className="fab fa-instagram  wow bounce"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.copy__right} text-center mt-5`}>
            <span>Copyright- @SJI 2023. Designed by Gazi & Sushmita.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
