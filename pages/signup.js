import SignupForm from "../components/SignupForm";
import styles from "../styles/SignUp.module.css";
const SignUp = () => {
  return (
    <div className={`${styles.signup__area} background__area`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={`${styles.signup__form__area}`}>
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
