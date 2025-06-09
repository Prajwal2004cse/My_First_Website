import React, { useState } from 'react';

function LoginPage() {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ role, email, password })
    });
    const data = await res.json();
    if (data.status === "otp_required") {
      // redirect to OTP Verification page
    } else {
      alert(data.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>
      <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      <p><a href="/forgot-password">Forgot Password?</a></p>
      <p><a href="/register">Register here</a></p>
    </form>
  );
}

export default LoginPage;
