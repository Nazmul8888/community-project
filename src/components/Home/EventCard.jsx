


const EventCard = ({event}) => {

    const {title,images} = event;

 
    return (
      <>

        <div className="card  bg-base-100 shadow-xl  ">
      
      <figure><img src={images} alt=""  /></figure>
      <div className="card-body">
        <h2 className="card-title">
         {title}
         
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        
      </div>
    </div>
      </>
        
  
    );
};

export default EventCard;