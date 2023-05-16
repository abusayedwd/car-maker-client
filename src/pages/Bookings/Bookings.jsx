import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Bookingraw from './Bookingraw';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
  const {user} = useContext(AuthContext)
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate()

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect( () => {
        fetch(url, {
                method:'GET',
                headers :{
                        authorization: `Bearer ${localStorage.getItem('car-token')}`
                },
        })
        .then(res => res.json())
        .then(data => {
                if(!data.error){

                        setBookings(data)
                }
                else{
                        navigate('/');
                }
        })
  },[navigate, url])

  
const bookingDelete = id => { 
        Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'delete',
        })
        .then(res => res.json())
        .then(data => {
        if(data.deletedCount > 0){

                Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success' 
                )
           const remaining =  bookings.filter(booking => booking._id !== id);  
           setBookings(remaining)   
        }
       })
   }
}) 
}
const handlUpdate = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
                method:'PATCH',
                headers: {
                        'content-type':'application/json'
                },
                body: JSON.stringify({status : 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
           console.log(data)
           if(data.modifiedCount>0){
                const remaining = bookings.filter(booking => booking._id !==id);
                const updated = bookings.find(booking => booking._id === id);
                updated.status = 'confirm'
                const newBooking = [updated, ...remaining];
                setBookings(newBooking)
           }
        })
}

        return (
                <div className='mb-12'>
                        <h1>my booking pages : {bookings.length}</h1>
                        <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Service Name</th>
        <th>Name</th>
        <th>Email</th>
        <th>date</th>
        <th>Price</th>
        <th>action</th>
        <th></th>
      </tr>
    </thead>
    <tbody> 
         {
                bookings.map(booking=> <Bookingraw
                key={booking._id}
                booking = {booking}
                bookingDelete = {bookingDelete}
                handlUpdate = {handlUpdate}
                ></Bookingraw>)
         }
    </tbody>
              
  </table>
</div>
                </div>
        );
};

export default Bookings;