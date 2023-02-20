import AppointmentForm from "../components/AppointmentForm";
import styles from "../styles/Appointment.module.css";
import Image from "next/Image";
import AppointmentImg from "../Assets/appointment.jpg";

const appointment = () => {
  return (
    <div className={`${styles.appointment__area} background__area`}>
      <div className="container">
        <div className={`${styles.appointment__form__area} content__area`}>
          <div className="row align-items-center ">
            <div className="col-md-6">
              <div className={`${styles.appointment__img}`}>
                <Image src={AppointmentImg} alt="appointment image" />
              </div>
            </div>
            <div className="col-md-6">
              <div className={`${styles.appointment__content}`}>
                <h3 className="text-left">Book appointment</h3>
                <span></span>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default appointment;
