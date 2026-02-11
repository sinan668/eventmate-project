import profile from "../assets/profiles.png"

function Userprofile() {
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
                <h2>MUHAMMED SINAN M</h2>
                <pre>Phone    :+91 987654321</pre>
                <pre>Email    :example@email.com</pre>
                <pre>Location :malappuram</pre>
                <pre>Age      :21</pre>
                <pre>Genter   :Maile</pre>
                <pre>Expreice :14</pre>
                <pre>Language :malayalam</pre>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE — Events */}
          <div className="w-1/2">


            {/* event cards */}
            <div className="flex flex-col gap-6 w-full">
              <div className="bg-white w-full h-33 rounded-xl shadow-md"></div>
              <div className="bg-white w-full h-33 rounded-xl shadow-md"></div>
              <div className="bg-white w-full h-33 rounded-xl shadow-md"></div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Userprofile