import { useState } from "react";

function SignupForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
        ...prev,
        [name]: value
    }));
  }

  function validate() {
    const newErrors = {};

    // name validation
    if (form.name.trim().length < 3) {
        newErrors.name = "Name must be at least 3 characters";
    }

    // email validation
    if (!/\S+@\S+\.\S+/.test(form.email)) {
        newErrors.email = "Invalid email format";
    }

    // password validation
    if (form.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return; // stop submission
    }

    alert("Signup successful!");
  }

  return (
  <form onSubmit={handleSubmit}>
    {/* NAME */}
    <label>Name</label>
    <input
      name="name"
      value={form.name}
      onChange={handleChange}
    />
    {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

    {/* EMAIL */}
    <label>Email</label>
    <input
      name="email"
      value={form.email}
      onChange={handleChange}
    />
    {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

    {/* PASSWORD */}
    <label>Password</label>
    <input
      type="password"
      name="password"
      value={form.password}
      onChange={handleChange}
    />
    {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}

    <button type="submit">Sign Up</button>
  </form>
);

}

export default SignupForm