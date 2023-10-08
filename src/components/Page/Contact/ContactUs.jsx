


const ContactUs = () => {


    const contactHandel = e=>{
        e.prevenDeaful()
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;

        console.log(name,phone,address)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-yellow-600">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">We are here to help you!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={contactHandel} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Full Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input type="text" name="phone" placeholder="Your Phone Number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input type="address" name="address" placeholder="Your Address" className="input input-bordered" required />
        </div>
        
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
            </div>

      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactUs;