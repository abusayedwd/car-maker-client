import { Link } from "react-router-dom";

 
 
 
const ServiesCard = ({servies}) => {
        // console.log(servies)
        const {img, price, title,_id} = servies;
        return (
                <div>
                      <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                <img src= {img} className="rounded-xl h-60" />
                </figure>
                <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p>Price : {price}</p>
                <div className="card-actions">
                <Link to = {`/checkout/${_id}`}>
                <button className="btn btn-primary">Book Now</button>
                </Link>
                </div>
                </div>
</div>  
                </div>
        );
};

export default ServiesCard;