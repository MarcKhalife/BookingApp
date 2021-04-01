import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

const AddBooking = ({addBooking}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState(new Date()); 
    const [time, setTime] = useState(new Date()); 

    const onSubmit = (e) => {
        e.preventDefault();

        //Format for sql 
        let formatedDate = moment(date).format('YYYY-MM-DD');
        let formatedTime = moment(time).format('HH:mm');

        addBooking ({name, email, formatedDate, formatedTime})

        //clear form
        setName("");
        setEmail("");
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col">
                    <label className="form-label" htmlFor = "name">Full Name</label>
                    <input id='name' type='text' className='form-control' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} required></input>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input type = 'email' id = "email" className='form-control' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label className="form-label" htmlFor = "date">Date</label>
                    <div> 
                    <DatePicker id='date'  className='form-control' selected={date} onChange={d => setDate(d)} 
                    dateFormat="dd/MM/yyyy"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    required/>
                    </div>
                </div>
                <div className="">
                    <div className="time"> 
                    <label htmlFor = 'time' className="form-label">Time</label>
                    <DatePicker
                    className='form-control'
                    id='time'
                    selected={time}
                    onChange={t => setTime(t)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={10}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    required
                    />
                    </div>
                </div>
            </div>
            <input type='submit' value='Add Booking' className='btn btn-block' />
        </form> 
    );
}

export default AddBooking