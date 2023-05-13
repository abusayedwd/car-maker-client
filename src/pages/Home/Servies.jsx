import { useEffect, useState } from "react";
import ServiesCard from "./ServiesCard";

 

const Servies = () => {
        const [services, setServices] = useState([])

        useEffect( () => {
                fetch('services.json')
                .then(res => res.json())
                .then(data => setServices(data))
        }, [])
        return (
                <div className='mt-8'>
                        <div className='text-center'>
                        <h1>Service</h1>
                        <h1 className='text-4xl font-bold '>Our Service Area</h1>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which  look even slightly believable. </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6 p-8">
                                {services.map(servies => <ServiesCard
                                key={servies._id}
                                servies = {servies}
                                ></ServiesCard>)}
                        </div>
                </div>
        );
};

export default Servies;