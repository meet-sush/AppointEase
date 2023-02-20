import LoginForm from "../components/LoginForm";
import styles from "../styles/Login.module.css";
import LoginImg from "../Assets/log-in.jpg";
import Image from "next/Image";
const login = () => {
  return (
    <div className={`${styles.login__area} background__area `}>
      <div className="container">
        <div className={`${styles.login__form__area} content__area`}>
          <div className={`${styles.login__heading} text-center`}>
            <h2>LogIn</h2>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={`${styles.login__image}`}>
                <Image src={LoginImg} alt="login image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${styles.login__image}`}>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
