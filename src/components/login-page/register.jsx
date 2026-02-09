import { useState } from "react"
import { Link } from "react-router-dom";

function Register (){


    const [role, setRole] = useState("");

    return(
        <section className="min-h-screen from-amber-50 to-orange-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Username"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          {/* Role Selection */}
          <div className="flex gap-6 text-sm font-medium mt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="employ"
                onChange={(e) => setRole(e.target.value)}
              />
              Employ
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="role"
                value="provider"
                onChange={(e) => setRole(e.target.value)}
              />
              Work Provider
            </label>
          </div>

          {/* Employ Fields */}
          {role === "employ" && (
            <div className="bg-amber-50 p-4 rounded-xl space-y-3 mt-4">
              <h4 className="text-sm font-semibold">Enter Your Details</h4>

              <input
                type="text"
                placeholder="Your Skills"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none"
              />

              <input
                type="number"
                placeholder="Your Age"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none"
              />

              <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" /> Male
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" /> Female
                </label>
                <label className="flex items-center gap-1">
                  <input type="radio" name="gender" /> Other
                </label>
              </div>
            </div>
          )}

          {/* Provider Fields */}
          {role === "provider" && (
            <div className="bg-amber-50 p-4 rounded-xl space-y-3 mt-4">
              <h4 className="text-sm font-semibold">Enter Job Details</h4>

              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 outline-none"
              />

              <input
                type="text"
                placeholder="Job Location"
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
          <Link to={"/login"} className="text-blue-500 font-medium hover:underline">Login</Link>
        </p>

      </div>
    </section>
    )
}

export default Register;