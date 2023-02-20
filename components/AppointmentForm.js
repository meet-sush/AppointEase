import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../styles/Appointment.module.css";

function AppointmentForm() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slots, setSlots] = useState([]);
  const [formData, setFormData] = useState({
    selectedDoctor: "",
    setSelectedDate: "",
    selectedSlot: "",
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const { data } = await axios.get("https://your-api-url/doctors");
        setDoctors(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        const { data } = await axios.get("https://your-api-url/slots");
        setSlots(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSlots();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://your-api-url/appointment",
        formData
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`${styles.appointment__content__area}`}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select doctor:</label>
          <select
            className="form-select mb-3"
            name="selectedDoctor"
            value={formData.selectedDoctor}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Doctor's name
            </option>
            {doctors.map((doctor) => (
              <option key={doctor.id} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Date:</label>
          <DatePicker
            className="form-control mb-3"
            selected={selectedDate}
            onChange={handleDateChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Select slot:</label>
          <select
            className="form-select mb-3"
            name="selectedSlot"
            value={formData.selectedSlot}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Time
            </option>
            {slots.map((slot) => (
              <option key={slot.id} value={slot.time}>
                {slot.time}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="default__button box__button my-3">
          Make appointment
        </button>
      </form>
    </div>
  );
}

export default AppointmentForm;
