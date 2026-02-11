
import profile from "../assets/s.png";

function Agencies() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* top dark bar */}
      <div className="h-16 bg-gray-700 w-full"></div>

      {/* main container */}
      <div className="max-w-6xl mx-auto p-8">

        <div className="flex gap-10 items-start">

          {/* LEFT SIDE — Profile Card */}
          <div className="relative w-1/2">

            {/* round logo */}
            <div>
              <img src={profile} alt="" className="absolute -top-12 left-6 w-28 h-28 rounded-full "/>
              
            </div>

            {/* gray card */}
            <div className="bg-gray-200 rounded-xl p-6 pt-16 h-110 shadow">

              <h2 className="text-xl font-semibold mb-4">
                Eatiko event
              </h2>

              <div className="space-y-2 text-gray-700 text-xl">
                <p>Location : malappuram</p>
                <p>Email : example@email.com</p>
                <p>Owner : arun kumar</p>
                <p>Contact : +91 987654321</p>
                <p>Experience : 3</p>
                <p>Language : malayalam</p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE — Events */}
          <div className="w-1/2">

            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">
                Upcoming events :
              </h3>

              <button className="bg-green-600 text-white px-4 py-1 rounded-md text-sm">
                new
              </button>
            </div>

            {/* event cards */}
            <div className="flex flex-col gap-6 w-full">
              <div className="bg-white w-full h-28 rounded-xl shadow-md"></div>
              <div className="bg-white w-full h-28 rounded-xl shadow-md"></div>
              <div className="bg-white w-full h-28 rounded-xl shadow-md"></div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Agencies;
