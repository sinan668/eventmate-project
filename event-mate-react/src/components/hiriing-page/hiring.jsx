function Hiring() {
    return(
    <>
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-[#0d3e38] w-full max-w-md p-8 rounded-xl shadow-lg flex flex-col gap-5">   
        <h2 className="text-2xl font-semibold text-white text-center">
          Create Hiring Event
        </h2>
        {/* Company Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-200">Company Name</label>
          <input
            type="text"
            placeholder="e.g. Google"
            className="h-11 px-3 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Event Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-200">Event Name</label>
          <input
            type="text"
            placeholder="e.g. Frontend Hiring Drive"
            className="h-11 px-3 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Place */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-200">Location</label>
          <input
            type="text"
            placeholder="e.g. Bangalore"
            className="h-11 px-3 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Time */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-200">Event Time</label>
          <input
            type="time"
            className="h-11 px-3 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Salary */}
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-200">Salary (INR)</label>
          <input
            type="number"
            placeholder="e.g. 600000"
            className="h-11 px-3 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        {/* Button */}
        <button
          type="submit"
          className="mt-4 h-11 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition duration-200"
        >
          Upload Event
        </button>
      </form>
    </section>
    
     </>
    )
    
}

export default Hiring