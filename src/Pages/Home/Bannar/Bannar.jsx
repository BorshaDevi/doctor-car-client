

const Bannar = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/4WRx8tB/mechanic-servicing-car-engine.jpg" className="w-full rounded-xl" />

    <div className="absolute flex rounded-xl justify-start left-0 right-0 top-0 bottom-0 h-full  bg-gradient-to-r from-gray-700 to-">
    <div className="lg:space-y-8 lg:w-1/3 md:p-10">
        <h1 className="text-6xl text-white font-semibold">Affordable price <br></br>for car servicing</h1>
        <p className="text-white">Regular oil changes ensure optimal engine performance and prevent costly repairs down the road.</p>
        <div className="">
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent ml-2">Accent</button>  
        </div>
     </div>
    </div>
    <div className="absolute flex  justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src="https://i.ibb.co/C6jvW3T/industrial-worker-working-production-line-factory.jpg" className="w-full rounded-xl" />
    <div className="absolute flex rounded-xl justify-start left-0 right-0 top-0 bottom-0 h-full  bg-gradient-to-r from-gray-700 to-">
    <div className="lg:space-y-8 lg:w-1/3 md:p-10">
        <h1 className="text-6xl text-white font-semibold">Affordable price <br></br>for car servicing</h1>
        <p className="text-white">Regular oil changes ensure optimal engine performance and prevent costly repairs down the road.</p>
        <div className="">
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent ml-2">Accent</button>  
        </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/rmGXDVY/mechanic-working-engine.jpg" className="w-full rounded-xl" />
    <div className="absolute flex rounded-xl justify-start left-0 right-0 top-0 bottom-0 h-full  bg-gradient-to-r from-gray-700 to-">
    <div className="lg:space-y-8 lg:w-1/3 md:p-10">
        <h1 className="text-6xl text-white font-semibold">Affordable price <br></br>for car servicing</h1>
        <p className="text-white">Regular oil changes ensure optimal engine performance and prevent costly repairs down the road.</p>
        <div className="">
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent ml-2">Accent</button>  
        </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/59TyJbp/portrait-young-worker-hard-hat-large-metalworking-plant.jpg" className="w-full rounded-xl" />
    <div className="absolute flex rounded-xl justify-start left-0 right-0 top-0 bottom-0 h-full  bg-gradient-to-r from-gray-700 to-">
    <div className="lg:space-y-8 lg:w-1/3 md:p-10">
        <h1 className="text-6xl text-white font-semibold">Affordable price <br></br>for car servicing</h1>
        <p className="text-white">Regular oil changes ensure optimal engine performance and prevent costly repairs down the road.</p>
        <div className="">
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent ml-2">Accent</button>  
        </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Bannar;