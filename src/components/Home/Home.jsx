
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import EventCard from "./EventCard";



const Home = () => {

    const event = useLoaderData();
    console.log(event);
   
    return (
        <div className="py-10" >
            <Banner></Banner>

            <div className="py-10">
                
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-60 pl-10 pr-10">
                

                {/* {
                    event.map(aEvent=><EventCard key={aEvent.id} event={aEvent}></EventCard>)
                } */}

                        {event.map((aEvent) => (
                <div key={event.id}>
                <Link to={`/services/${event.id}`} >
                <EventCard key={aEvent.id} event={aEvent}></EventCard>

                

             </Link>
            </div>
    
      ))}

    
                </div>
            </div>
            

            

           


        </div>
    );
};

export default Home;