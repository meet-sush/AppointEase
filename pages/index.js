import Image from "next/Image";
import About from "../Assets/aboutUs.jpg";
import Banner from "../Assets/banner-doctors.jpg";
import WhyUs from "../Assets/why-us.jpg";
import styles from "../styles/Home.module.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccessAlarmsIcon from "@mui/icons-material/AccessAlarms";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";

export default function Home() {
  return (
    <div className={`${styles.home__area}`}>
      {/* Banner areaa start */}
      <section>
        <div className={`${styles.banner__area}`}>
          <div className={`container vh-100`}>
            <div className="row align-items-center ">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <div className={`${styles.banner__content}`}>
                  <h1>We are here to help you </h1>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                    sagittis sem nibh id elit. Duis sed odio sit amet.
                  </p>
                  <div className={`${styles.banner__button}`}>
                    <a className={`default__button box__button`}>get started</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
        </div>
      </section>
      {/* About us area start */}
      <section id="aboutUs">
        <div className={`${styles.about__us__area}`}>
          <div className="container">
            <div className={`${styles.section__top__area} `}>
              <div className={`${styles.section__heading} `}>
                <h2>about us</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={`${styles.about__us__content}`}>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className={`${styles.about__img}`}>
                    <Image src={About} alt="about-image" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={`${styles.about__details} `}>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco . Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services area start */}
      <section>
        <div className={`${styles.services__area} ptb-90`}>
          <div className="container">
            <div className={`${styles.section__top__area} `}>
              <div className={`${styles.section__heading}`}>
                <h2>Our Services</h2>
              </div>
            </div>
            <div className={`${styles.container__wrap}`}>
              <div className={`${styles.service__area__content}`}>
                <div className="row text-center">
                  <div className="col-md-3 mt-50">
                    <div className={`${styles.single__service}`}>
                      <div className={`${styles.service__icon}`}>
                        <EventAvailableOutlinedIcon />
                      </div>
                      <h3>Scheduling Appointments</h3>
                      <p>
                        This is Photoshop's version of Lorem Ipsum. erat conse
                        quat auctor eu in elit. Class aptent taciti sociosqu
                      </p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className={`${styles.single__service}`}>
                      <div className={`${styles.service__icon}`}>
                        <NotificationsActiveOutlinedIcon />
                      </div>
                      <h3>Reminders</h3>
                      <p>
                        This is Photoshop's version of Lorem Ipsum. erat conse
                        quat auctor eu in elit. Class aptent taciti sociosqu
                      </p>
                    </div>
                  </div>

                  <div className="col-md-3 mt-50">
                    <div className={`${styles.single__service}`}>
                      <div className={`${styles.service__icon}`}>
                        <PaidOutlinedIcon />
                      </div>
                      <h3>Online payment</h3>
                      <p>
                        This is Photoshop's version of Lorem Ipsum. erat conse
                        quat auctor eu in elit. Class aptent taciti sociosqu
                      </p>
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className={`${styles.single__service}`}>
                      <div className={`${styles.service__icon}`}>
                        <PermPhoneMsgOutlinedIcon />
                      </div>
                      <h3>Online Consultancy</h3>
                      <p>
                        This is Photoshop's version of Lorem Ipsum. erat conse
                        quat auctor eu in elit. Class aptent taciti sociosqu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us area start */}
      <section>
        <div className="why__us__area ptb-90">
          <div className="container">
            <div className={`${styles.section__top__area} `}>
              <div className={`${styles.section__heading} `}>
                <h2>why us</h2>
              </div>
            </div>
            <div className="row align-item-center">
              <div className="col-md-6">
                <div className={`${styles.why__content} `}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <p>
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua., consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <div className={`${styles.why__us__button}`}>
                    <a className="default__button box__button">read more</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${styles.whyUs__img}`}>
                  <Image src={WhyUs} alt="why-us-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
