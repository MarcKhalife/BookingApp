import moment from 'moment';
const Booking = ({ booking, onDelete }) => {
  return (
    <div className='booking'>
      <div>
        <div>
          {booking.name}
        </div>
        <div>
          {booking.email}
        </div>
        <div>
          {moment.utc(booking.date).format('DD/MM/YYYY')}
          {" at "}
          {moment.utc(booking.time, 'hh:mm:ss').format('h:mm a')}
        </div>
      </div>
      <button className="dlt-btn" value='Delete' onClick={() => onDelete(booking.id)}>Delete</button>
    </div>


  )
}

export default Booking