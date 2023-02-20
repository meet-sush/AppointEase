import React, { useState } from "react";
import styles from "../styles/Payment.module.css";
//import { useRouter } from 'next/router';

function payment() {
  //const router = useRouter();
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    //Submit the form and process payment
  }

  return (
    <div className={`${styles.payment__area} background__area`}>
      <div className="container">
        <div
          className={`${styles.payment__form__area} w-50 m-auto bg-light rounded p-5`}
        >
          <h2 className="text-center">Payment</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control mb-3"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control mb-3"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Card Number</label>
              <input
                className="form-control mb-3"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Expiration Date</label>
              <input
                className="form-control mb-3"
                type="text"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>CVV</label>
              <input
                className="form-control mb-3"
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn default__button mb-3">
              Complete payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default payment;
