import { useState } from "react";

const initialFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

function Exercice2() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const nextErrors = {};
    const nameRegex = /^[A-Za-z]+(?:[\s'-][A-Za-z]+)*$/;
    const phoneRegex = /^\d{8,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(formData.firstName.trim())) {
      nextErrors.firstName = "Please enter a valid first name.";
    }

    if (!nameRegex.test(formData.lastName.trim())) {
      nextErrors.lastName = "Please enter a valid last name.";
    }

    if (!phoneRegex.test(formData.phone.trim())) {
      nextErrors.phone = "Phone must contain 8 to 15 digits.";
    }

    if (!emailRegex.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmittedData({
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
    });
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {submittedData ? (
          <div style={styles.result}>
            <p style={styles.name}>
              {submittedData.lastName}, {submittedData.firstName}
            </p>
            <p style={styles.details}>
              {submittedData.phone} | {submittedData.email}
            </p>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <h1 style={styles.title}>Welcome!</h1>
            <p style={styles.subtitle}>Please provide your information below.</p>

            <div style={styles.fieldGroup}>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName ? <small style={styles.error}>{errors.firstName}</small> : null}
            </div>

            <div style={styles.fieldGroup}>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName ? <small style={styles.error}>{errors.lastName}</small> : null}
            </div>

            <div style={styles.fieldGroup}>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone ? <small style={styles.error}>{errors.phone}</small> : null}
            </div>

            <div style={styles.fieldGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email ? <small style={styles.error}>{errors.email}</small> : null}
            </div>

            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  card: {
    maxWidth: "420px",
    margin: "0 auto",
    backgroundColor: "#f7f7f7",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "18px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.08)",
  },
  form: {
    backgroundColor: "#cfcfd1",
    borderRadius: "70px",
    minHeight: "470px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    padding: "20px",
  },
  title: {
    margin: "0 0 10px",
    fontSize: "64px",
    color: "#254e53",
    lineHeight: 1,
  },
  subtitle: {
    marginBottom: "12px",
    color: "#1f2f31",
  },
  fieldGroup: {
    display: "flex",
    flexDirection: "column",
    width: "220px",
    gap: "2px",
  },
  error: {
    color: "#b13030",
    textAlign: "left",
    fontSize: "12px",
  },
  result: {
    backgroundColor: "#cfcfd1",
    borderRadius: "70px",
    minHeight: "330px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "18px",
    padding: "20px",
  },
  name: {
    margin: 0,
    fontSize: "34px",
    color: "#1e2f31",
  },
  details: {
    margin: 0,
    color: "#1e2f31",
  },
};

export default Exercice2;
