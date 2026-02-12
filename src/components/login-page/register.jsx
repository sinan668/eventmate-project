import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Register() {
  const navigate=useNavigate();
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { name, email, password, role };

    if (role === "employee") {
      payload.age = Number(age);
      payload.gender = gender;
    }

    if (role === "employer") {
      payload.company = company;
      payload.location = location;
    }

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data);
        alert(data.message);
        return;
      }

    alert("Registration successful");
     navigate("/")
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };

  return (
    <section className="min-h-screen from-amber-50 to-orange-100 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            placeholder="Username"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            required
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <div className="flex gap-6 text-sm font-medium mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="employee"
                required
                checked={role === "employee"}
                onChange={(e) => setRole(e.target.value)}
              />
              Employee
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="employer"
                required
                checked={role === "employer"}
                onChange={(e) => setRole(e.target.value)}
              />
              Employer
            </label>
          </div>

          {role === "employee" && (
            <div className="bg-amber-50 p-4 rounded-xl space-y-3 mt-4">
              <h4 className="text-sm font-semibold">Enter Your Details</h4>

              <input
                type="number"
                placeholder="Your Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none"
              />

              <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    value={"male"}
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                  />{" "}
                  Male
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    value={"female"}
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />{" "}
                  Female
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="gender"
                    value={"other"}
                    checked={gender === "other"}
                    onChange={(e) => setGender(e.target.value)}
                  />{" "}
                  Other
                </label>
              </div>
            </div>
          )}

          {role === "employer" && (
            <div className="bg-amber-50 p-4 rounded-xl space-y-3 mt-4">
              <h4 className="text-sm font-semibold">Enter Job Details</h4>

              <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none"
              />

              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-blue-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
