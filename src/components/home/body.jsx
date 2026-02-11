// import Event from "../../assets/eventlogo.png";
// const events = [
//   {
//     id: 1, 
//     place: "Kozhikode",
//     date: "19-05-2026",
//   },
//   {
//     id: 2,
//     place: "Palakkad",
//     date: "22-05-2026",
//   },
//   {
//     id: 3,
//     place: "Kochi",
//     date: "25-05-2026",
//   },
//   {
//     id: 4,
//     place: "Palakkad",
//     date: "25-05-2026",
//   },
//   {
//     id: 5,
//     place: "Palakkad",
//     date: "25-05-2026",
//   },
//   {
//     id: 6,
//     place: "Palakkad",
//     date: "25-05-2026",
//   },
//   {
//     id: 7,
//     place: "Palakkad",
//     date: "25-05-2026",
//   },
// ];

// function Body() {
//   return (
//     <>
//       <section className="space-y-4 bg-white mt-25 mb-25">
//         {events.map((event) => (
//           <div
//             key={event.id}
//             className="h-25 hover:scale-101 transition-transform duration-400  ml-25 mr-25 rounded-2xl flex justify-between items-center p-4 bg-[#0d3e38]"
//           >
//             <img src={Event} alt="events logo" className="h-17 w-17" />
//             <div>
//               <h1 className="font-bold text-blue-50 text-1">{event.place}</h1>
//               <h1 className="text-blue-50 text-1">{event.date}</h1>
//             </div>
//           </div>
//         ))}
//       </section>
//     </>
//   );
// }
// export default Body;
import Event from "../../assets/eventlogo.png";

const events = [
  { id: 1, place: "Kozhikode", date: "19-05-2026" },
  { id: 2, place: "Palakkad", date: "22-05-2026" },
  { id: 3, place: "Kochi", date: "25-05-2026" },
  { id: 4, place: "Palakkad", date: "25-05-2026" },
  { id: 5, place: "Palakkad", date: "25-05-2026" },
  { id: 6, place: "Palakkad", date: "25-05-2026" },
  { id: 7, place: "Palakkad", date: "25-05-2026" },
];

function Body() {
  return (
    <section className="bg-white mt-24 mb-24 px-4">
      <div className="max-w-4xl mx-auto space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center justify-between gap-4 p-4 rounded-xl bg-[#0d3e38]
                       hover:scale-[1.02] transition-transform duration-300 shadow-md"
          >
            {/* Logo */}
            <img
              src={Event}
              alt="event logo"
              className="h-14 w-14 object-contain"
            />

            {/* Event Info */}
            <div className="flex-1 text-left">
              <h1 className="font-semibold text-blue-50 text-lg">
                {event.place}
              </h1>
              <p className="text-blue-200 text-sm">
                {event.date}
              </p>
            </div>

            {/* CTA */}
            <button className="hidden sm:block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
              View
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Body;
