  
const Bookingraw = ({ booking,bookingDelete, handlUpdate }) => {
        console.log(booking)
        const { costomername,_id, price, date, email, img, service,status } = booking; 

        return (


                <tr>
                        <th>
        <button onClick={() => bookingDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
                        </th>
                        <td>

                                <div className="avatar">
                                        <div className="mask mask-squircle w-16 h-16">
                                                <img src={img} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                </div>
                                <div>
                                        <div className="font-bold">{service}</div>
                                </div>

                        </td>
                        <td>
                                {costomername}
                        </td>
                        <td>{email}</td>
                        <td>{date}</td>
                        <td>{price}</td>
                        <th>
                                {
                                  status === 'confirm'? <span className='text-primary font-bold'>Confirmed</span> :          
                    <button onClick={() => handlUpdate(_id)} className="btn btn-ghost btn-xs">please Update</button>}
                        </th>
                </tr>

        );
};

export default Bookingraw;