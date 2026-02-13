import Event from "../../assets/eventlogo.png";
import { Link } from "react-router-dom";

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
    <section className="bg-white mt-40 mb-24 px-4">
      <div className=" mx-auto space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex  justify-between gap-4 p-4 rounded-xl bg-[#0d3e38]
                       hover:scale-[1.02] transition-transform duration-300 "
          >
            <img src={Event} alt="event logo" className="h-14 w-14" />

            <div className="flex-1 text-left">
              <h1 className="font-semibold text-blue-50 text-lg">
                {event.place}
              </h1>
              <p className="text-blue-200 text-sm">{event.date}</p>
            </div>
            <Link to={`/hiring/${event.id}`}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                View
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Body;
