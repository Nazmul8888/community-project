import { useParams } from "react-router-dom";


const Services = () => {

    const {id} = useParams
    return (
        <div>
            <p>{id}</p>
        </div>
    );
};

export default Services;