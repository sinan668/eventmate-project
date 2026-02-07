function Hiring() {
    return(
        <>
        <section className="flex justify-center">
            <form className="flex flex-col justify-center items-center bg-[#0d3e38] gap-5 w-90 h-90 rounded-md">
                <input type="text" placeholder="Company name" className="border w-70 rounded-md bg-blue-50"></input>
                <input type="text" placeholder="Event name" className="border w-70 rounded-md  bg-blue-50"></input>
                <input type="text" placeholder="Place" className="border w-70 rounded-md  bg-blue-50"></input>
                <input type="time" placeholder="" className="border w-70 rounded-md  bg-blue-50"></input>
                <input type="number" placeholder="INR" className="border w-70 rounded-md  bg-blue-50"></input>
                <button className=" bg-blue-50 text-black rounded-md">Upload</button>
            </form>

        </section>
        </>
    )
    
}

export default Hiring