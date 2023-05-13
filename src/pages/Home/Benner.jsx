  
  import benner1 from '../../../public/assets/images/banner/1.jpg'
  import benner2 from '../../../public/assets/images/banner/2.jpg'
  import benner3 from '../../../public/assets/images/banner/3.jpg'
  import benner4 from '../../../public/assets/images/banner/4.jpg'
  

const Benner = () => {
        return (
                <div>
           <div className="carousel w-full h-[600px] mt-8">
  <div id="slide1" className="carousel-item relative w-full">
    <img src= {benner1} className="w-full" />
    <div className='absolute  text-white w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full'>
     <div className='md:ml-40  md:mt-28 ml-12 mt-12'>
     <h1 className='text-3xl font-bold w-48'>Affordable Price For Car Servicing</h1>
     <p className='mt-4'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
     <button className="btn btn-success mt-5 mr-3">Success</button>
     <button className="btn btn-outline btn-secondary">Button</button>
     </div>
    </div>
    <div className="absolute flex transform -translate-y-1/2 
    right-0 bottom-0 mr-16 ">
      <a href="#slide4" className="btn btn-circle mr-4 bg-orange-400">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-green-400">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src= {benner2} className="w-full" />
    <div className='absolute  text-white w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full'>
     <div className='md:ml-40  md:mt-28 ml-12 mt-12'>
     <h1 className='text-3xl font-bold w-48'>Affordable Price For Car Servicing</h1>
     <p className='mt-4'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
     <button className="btn btn-success mt-5 mr-3">Success</button>
     <button className="btn btn-outline btn-secondary">Button</button>
     </div>
    </div>
    <div className="absolute flex  transform -translate-y-1/2  right-0 bottom-0 mr-16">
      <a href="#slide1" className="btn btn-circle mr-4 bg-orange-400">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-green-400">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src= {benner3}className="w-full" />
    <div className='absolute  text-white w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full'>
     <div className='md:ml-40  md:mt-28 ml-12 mt-12'>
     <h1 className='text-3xl font-bold w-48'>Affordable Price For Car Servicing</h1>
     <p className='mt-4'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
     <button className="btn btn-success mt-5 mr-3">Success</button>
     <button className="btn btn-outline btn-secondary">Button</button>
     </div>
    </div>
    <div className="absolute flex transform -translate-y-1/2  right-0 bottom-0 mr-16">
      <a href="#slide2" className="btn btn-circle mr-4 bg-orange-400">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-green-400">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src= {benner4} className="w-full" />
    <div className='absolute  text-white w-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full'>
     <div className='md:ml-40  md:mt-28 ml-12 mt-12'>
     <h1 className='text-3xl font-bold w-48'>Affordable Price For Car Servicing</h1>
     <p className='mt-4'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
     <button className="btn btn-success mt-5 mr-3">Success</button>
     <button className="btn btn-outline btn-secondary">Button</button>
     </div>
    </div>
    <div className="absolute flex   transform -translate-y-1/2  right-0 bottom-0 mr-16">
      <a href="#slide3" className="btn btn-circle mr-4 bg-orange-400">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-green-400">❯</a>
    </div>
  </div>
</div>
                </div>
        );
};

export default Benner;