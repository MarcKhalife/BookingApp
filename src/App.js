import { useEffect,useState } from 'react';
import './App.css';
import Form from './components/Form';
import Bookings from './components/Bookings';

const URL = "https://bookingskws-backend.herokuapp.com/"
function App() {
  //state of bookings
  const [bookings, setBookings] = useState([])
  
  //get bookings from database on load
  useEffect(() => {
    const getBookings = async () =>{
    const res = await fetch(URL)
    const data = await res.json() 
    setBookings(data);
  }
  getBookings();
  }, [])

  //add a booking to database
  const addBooking = async(booking) => {
    const res = await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    
    if (res.status === 201){
      //add new booking to state
      const data = await res.json()
      setBookings([...bookings, data[0]])
      console.log(data[0])
    } else{
      alert('Error Adding Booking')
    }
  }

  //Delete booking
  const onDelete = async (id) => {
    const res = await fetch(URL+id, {
      method: 'DELETE',
    })
      if (res.status === 200){
        //Kepp all bookings except the one removed
        setBookings(bookings.filter((booking) => booking.id !== id))
      } else{
        alert('Error Deleting Booking')
      }
  }

  return (
    <div className="container">
      <h2>Booking Form</h2>
      <Form className="form" addBooking = {addBooking}/>
      <Bookings bookings={bookings} onDelete={onDelete}/>
    </div>
  );
}

export default App;