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
          {moment(booking.date).format('DD/MM/YYYY')}
          {"--"}
          {booking.time}
        </div>
      </div>
      <button className="dlt-btn" value='Delete' onClick={() => onDelete(booking.id)}>Delete</button>
    </div>


  )
}

export default Booking