
function Bookingpage(){
    return(
    <section className="min-h-screen  from-amber-50 to-orange-100 flex items-center justify-center px-4 py-10">

  <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl p-8 grid md:grid-cols-2 gap-8">

    <div className="bg-amber-50 rounded-xl p-6 space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Event Details</h2>

      <p className="text-gray-700">
        Event:
        <span id="eventName" className="font-semibold text-black ml-2">Name</span>
      </p>

      <p className="text-gray-700">
        Place:
        <span id="venue" className="font-semibold text-black ml-2">Venue</span>
      </p>

      <p className="text-gray-700">
        Time:
        <span id="time" className="font-semibold text-black ml-2">9:30</span>
      </p>

      <p className="text-gray-700">
        Date:
        <span className="font-semibold text-black ml-2">19-08-2026</span>
      </p>

      <p className="text-gray-700">
        Outfit:
        <span id="outfit" className="font-semibold text-black ml-2">Provided</span>
      </p>

      <p className="text-gray-700">
        Salary:
        <span id="payment" className="font-semibold text-green-600 ml-2">12345</span>
      </p>

      <p className="text-gray-700">
        Slot:
        <span id="slot" className="font-semibold text-red-500 ml-2">20</span>
      </p>
    </div>

    <div className="bg-gray-50 rounded-xl p-6 shadow-inner">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Booking Form
      </h2>

      <form className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          min="18"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <input
          type="text"
          name="place"
          placeholder="Place"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <input
          type="number"
          name="phone"
          placeholder="Phone"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300 shadow-md"
        >
          Submit
        </button>

      </form>
    </div>

  </div>
</section>
    )
}

export default Bookingpage;