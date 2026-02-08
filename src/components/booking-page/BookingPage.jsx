
import "./BookingPage.css"

function Bookingpage(){
    return(
    <section class="section">
        <div class="bdata">
            <div class="eventd">
              <p>Event: <span id="eventName">Name</span></p>
              <p>Place:<span id="venue">Venue</span></p>
              <p>Time:<span id="time">9:30</span></p>
              <p>Date:<span id="time">19-08-2026</span></p>
              <p>Outfit: <span id="outfit">provided</span></p>
              <p>Salary:<span id="payment">12345</span></p>
              <p>Slot:<span id="slot">20</span></p>
            </div>
            <div class="booking">
              <form class="data">
                <input type="text" name="name" placeholder="name" required />
                <input type="number" name="age" placeholder="age" min="18" required />
                <input type="text" name="place" placeholder="place" required />
                <input type="number" name="Phone" placeholder="Phone" required />
              </form>
              <div class="submit"><button class="submit2">Submit</button></div>
            </div>
       </div>
    </section>
    )
}

export default Bookingpage;