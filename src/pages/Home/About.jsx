 import person from '../../../public/assets/images/about_us/person.jpg'
 import parts from '../../../public/assets/images/about_us/parts.jpg'

const About = () => {
        return (
                <div>
                        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2 relative'>
    <img src= {person}className="w-3/4 rounded-lg shadow-2xl" />
    <img src= {parts}className=" w-1/2 absolute top-1/2 right-5 rounded-lg shadow-2xl border-8 border-white" />
    </div>
    <div className='lg:w-1/2 p-5'>
      <h2 className='text-2xl font-bold text-orange-400'>About Us</h2>
      <h1 className="text-5xl font-bold">We are qualified <br /> & of experience in <br /> this field!</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which   look even slightly believable. </p>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour. </p>
      <button className="btn btn-success">Get More Info</button>
    </div>
  </div>
</div>
                </div>
        );
};

export default About;