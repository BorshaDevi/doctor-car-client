

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row p-10">
<div className="lg:w-1/2 relative">
<img src="https://i.ibb.co/W6NCBMF/mechanic-working-engine.jpg" className="w-3/4 rounded-lg shadow-2xl " />
<img src="https://i.ibb.co/ypSx0qJ/mechanic-checking-car-parts.jpg" className="w-3/4 right-5 top-1/2 rounded-lg shadow-2xl absolute border-4 border-white  " />

</div>
    <div className="lg:w-1/2">
        <h3 className="text-orange-400 font-bold">About us</h3>
      <h1 className="text-5xl font-bold">We are  qualified & of experience in this field</h1>
      <p className="py-6">Routine maintenance keeps your car running smoothly and extends its lifespan. Do not skip scheduled services.
      Fluid checks prevent overheating and ensure vital systems operate at peak performance levels.Filter replacements maintain clean air intake and efficient fuel consumption for your vehicle.
      Transmission servicing keeps gears shifting smoothly, preventing costly transmission repairs.
      Cooling system maintenance prevents engine overheating, safeguarding against major damage.
      </p>
      <button className="btn bg-orange-500">Get more info</button>
    </div>
  </div>
</div>
    );
};

export default About;