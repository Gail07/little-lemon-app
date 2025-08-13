import BookingForm from "./Components/pages/BookingForm";

const Booking = (props)=>{
    return (
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch}  
        SubmitForm={props.SubmitForm} />
    )
}

export default Booking;