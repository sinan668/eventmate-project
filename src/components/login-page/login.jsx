
function LoginPage(){
    return (
    <section className="bg-amber-50 h-[80vh] w-[94vw] p-8 flex flex-col items-center  justify-center ">
        <div className="flex flex-col items-center justify-center bg-amber-100 h-72 w-72 p-6 border-none border-r-5 backdrop-blur-[10px] font-bold cursor-pointer translate-0.5 ">
            <h2>Login</h2>
        <form  className="mt-6">
            <input className="w[325px] h[15px] p[12px] my[10px] rounded[12px] border-none outline-none"  type="text" placeholder="Username" required />
            <input className="w[325px] h[15px] p[12px] my[10px] rounded[12px] border-none outline-none" type="password" placeholder="Password" required />
        </form>
        <a className="mt[10px] text-[15px]" href="">forget password</a>
        <div className="mt-[-10]">
            <button type="submit"  className="w-full p[12px] mt[50px] rounded-[15px] 
                   border-none cursor-pointer font-bold 
                   text-white bg-[rgba(18,80,250,0.315)] 
                   transition-all duration-300">LogIn</button>
            <p>Don't have an account? <a href="../register/index.html">Register</a></p>
        </div>
       </div>
    </section>
    )
}

export default LoginPage