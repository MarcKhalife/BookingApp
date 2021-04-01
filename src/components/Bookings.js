import Booking from './Booking'

const Bookings = ({ bookings, onDelete}) => {
  return (
    // map from newest to oldest
    <div className="booking-list">
      {bookings.slice(0).reverse().map((booking) => (
        <Booking key={booking.id} booking={booking} onDelete = {onDelete}/>
      ))}
    </div>
    
  )
}

export default Bookings