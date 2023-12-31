import { useLoaderData } from "react-router-dom";



const Services = () => {

    const news = useLoaderData()

    console.log(news)

    return (
        <div>
            
                    <>
                    
            <div className="grid grid-cols-1 bg-[#6FEDD6] place-items-center gap-4 ">
              {news.map((item, index) => (
        <div className="user my-20" key={index}>
             <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
     src={item.img}
      alt="image"
      className="h-full w-full object-cover"
    />
    </div>
    <div className="p-6">
    <h6 className="mb-4 block font-sans text-3xl font-semibold uppercase leading-relaxed tracking-normal text-black-500 antialiased">
        {item.title_category}
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      {item.details}
    </p>
    <a className="inline-block" href="#">
      <button
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>
        </div>
      ))}

                    </div>
                   
                   
                       
                    </>
                    

                
            
        </div>
   
    );
};

export default Services;