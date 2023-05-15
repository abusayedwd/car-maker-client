import { useLoaderData } from "react-router-dom"; 
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";



const Checkout = () => {
        const singleServies = useLoaderData();
        const {user} = useContext(AuthContext)
          const {_id, price, service_id,img, title}  = singleServies;

          const handleBook = event => {
                event.preventDefault();

                const form = event.target;
                const name = form.name.value;
                const email = user?.email;
                const date = form.date.value;
                const booking = {
                        costomername: name,
                        email,
                        date,
                        img,
                        service:title,
                        service_id:_id,
                        price:price,
                }
                console.log(booking)
                fetch('http://localhost:5000/bookings', {
                  method: 'POST',
                  headers: {
                    'content-type':'application/json'
                  },
                  body:JSON.stringify(booking)
                })
                .then(res=> res.json())
                .then(data => {
                  console.log(data)
                  if(data.insertedId){
                    Swal.fire({
                      title: 'Are you sure?',
                      text: "You want to added user!",
                      icon: 'success',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      confirmButtonText: 'Yes, added it!'
                    }).then((result) => {
                      if (result.isConfirmed) {
                        Swal.fire(
                          'Added!',
                          'Your booking is success.',
                          'success'
                        )
                      }
                    })
                  }
                })
          }
        return (
                <div>
                       <div className="hero" style={{ backgroundImage: `url(${img})`,
                       height: '400px',
                        
                       
                 }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
          </div>
     </div>
 </div> 
 
      <section className="m-4 bg-gray-100 shadow-2xl md:px-28 py-12 ">
        <h1 className="text-center text-3xl font-bold">Book Servies: {title}</h1>                 
       <form onSubmit={handleBook}  className=" p-6">
       <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 ">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" /> 
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name="price" defaultValue={'$'+price} className="input input-bordered" /> 
        </div>

       </div>
  <textarea className="w-full mt-3 p-4" name="area" id="" rows={8}></textarea>

        <div className="form-control mt-6">
           
          <input className="btn btn-success" type="submit" value="Order Confirm" />
        </div>
       </form>
      </section>
    
       
    
   
   



                </div>
        );
};

export default Checkout;