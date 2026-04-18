import { useState } from "react";

type FieldName = "firstName" | "lastName" | "phone" | "email";

type FormValues = Record<FieldName, string>;
type FormErrors = Record<FieldName, string>;

type InputProps = {
  id: FieldName;
  label: string;
  value: string;
  error: string;
  onChange: (name: FieldName, value: string) => void;
};

function Input({ id, label, value, error, onChange }: InputProps) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <label htmlFor={id} style={{ display: "block", marginBottom: "6px", color: "#243b5a", fontSize: "22px" }}>
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        style={{
          width: "100%",
          padding: "10px 12px",
          fontSize: "20px",
          borderRadius: "8px",
          border: `2px solid ${error ? "#ff5b5b" : "#cccccc"}`,
          outline: "none",
          boxSizing: "border-box",
          backgroundColor: "#fff",
        }}
      />
      {error ? (
        <p style={{ marginTop: "6px", color: "#ff5b5b", fontSize: "18px", fontWeight: 700, textAlign: "right" }}>{error}</p>
      ) : null}
    </div>
  );
}

function Form() {
  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const validateField = (name: FieldName, value: string): string => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      if (name === "firstName") return "First name is required";
      if (name === "lastName") return "Last name is required";
      if (name === "phone") return "Phone number is required";
      return "Email is required";
    }

    if (name === "phone") {
      const phoneRegex = /^\+?[0-9]{8,15}$/;
      if (!phoneRegex.test(trimmedValue)) {
        return "Phone number is invalid";
      }
    }

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedValue)) {
        return "Email is invalid";
      }
    }

    return "";
  };

  const handleChange = (name: FieldName, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  return (
    <div
      style={{
        maxWidth: "520px",
        margin: "24px auto",
        backgroundColor: "#e9ecef",
        padding: "32px",
        borderRadius: "8px",
      }}
    >
      <Input
        id="firstName"
        label="First Name"
        value={values.firstName}
        error={errors.firstName}
        onChange={handleChange}
      />
      <Input
        id="lastName"
        label="Last Name"
        value={values.lastName}
        error={errors.lastName}
        onChange={handleChange}
      />
      <Input id="phone" label="Phone" value={values.phone} error={errors.phone} onChange={handleChange} />
      <Input id="email" label="Email" value={values.email} error={errors.email} onChange={handleChange} />
    </div>
  );
}

export default function Exercice2() {
  return <Form />;
}
