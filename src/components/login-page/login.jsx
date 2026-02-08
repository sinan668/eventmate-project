
function LoginPage(){
    return (
    <section className="min-h-screen from-amber-50 to-amber-100 flex items-center justify-center px-4">
  
        <div className="bg-white w-full max-w-sm p-8 rounded-2xl shadow-xl">
    
             <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Login
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              />
              <button type="submit" className="w-full py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300">
                Log In
              </button>
            </form>
            <div className="text-center mt-4">
                <a href="#" className="text-sm text-blue-500 hover:underline">
                    Forgot password?
                </a>
             </div>
                <p className="text-sm text-center mt-6 text-gray-600">
                     Don't have an account?{" "}
                     <a href="/register" className="text-blue-500 font-medium hover:underline">
                     Register
                    </a>
                </p>
         </div>
</section>
    )
}

export default LoginPage