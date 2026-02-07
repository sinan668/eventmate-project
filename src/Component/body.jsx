import Event from "../assets/eventlogo.png";
const events = [
  {
    id: 1,
    place: "Kozhikode",
    date: "19-05-2026",
    time: "09:30 AM to 9:00 PM",
  },
  {
    id: 2,
    place: "Palakkad",
    date: "22-05-2026",
    time: "10:00 AM to 8:00 PM",
  },
  {
    id: 3,
    place: "Kochi",
    date: "25-05-2026",
    time: "11:00 AM to 7:00 PM",
  },
  {
    id: 4,
    place: "Palakkad",
    date: "25-05-2026",
    time: "11:00 AM to 7:00 PM",
  },
   {
    id: 5,
    place: "Palakkad",
    date: "25-05-2026",
    time: "11:00 AM to 7:00 PM",
  },
   {
    id: 6,
    place: "Palakkad",
    date: "25-05-2026",
    time: "11:00 AM to 7:00 PM",
  },
   {
    id:7 ,
    place: "Palakkad",
    date: "25-05-2026",
    time: "11:00 AM to 7:00 PM",
  },
];

function Body() {
  return (
    <>
      {/* <section>
            <div className="h-25 bg-cyan-700 ml-25 mr-25 rounded-2xl flex justify-between text-center">
                <div><img src={Event} alt="events logo" className="h-17 w-17 mt-3"></img></div>
                
                <div className="mt-3"><h1 className="font-bold m">kozhikode</h1>
                <h1>19-05-2026</h1>
                <h>09:30 Am to 9:00 Pm </h>
                </div>
            </div>
        </section> */}
      <section className="space-y-4 bg-white mt-15 mb-15">
        {events.map((event) => (
          <div
            key={event.id}
            className="h-25 hover:scale-101 transition-transform duration-400  ml-25 mr-25 rounded-2xl flex justify-between items-center p-4 bg-[#0d3e38]">
            <img src={Event} alt="events logo" className="h-17 w-17" />
            <div>
              <h1 className="font-bold text-blue-50">{event.place}</h1>
              <h1 className="text-blue-50 text-1">{event.date}</h1>
              <p className="text-blue-50">{event.time}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
export default Body;
