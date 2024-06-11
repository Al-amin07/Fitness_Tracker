import useAllTrainer from "../../Hooks/useAllTrainer";
import Loading from "../../Loading/Loading";


const Team = () => {
    const [trainers, ,isLoading] = useAllTrainer()
    if(isLoading) return <Loading/>
    return (
        <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">Our Top Trainers </h2>
            <p className="text-slate-500 lg:w-8/12 mx-auto text-center mt-4 mb-10">Learn about the extensive qualifications and professional training credentials that set these trainers apart, including recognized certifications from prestigious institutions and ongoing education efforts</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    trainers?.slice(0,3).map(item =>  <div key={item._id} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                    {/*  <!-- Image --> */}
                    <figure>
                      <img
                        src={item.profile_image}
                        alt="card image"
                        className="aspect-video w-full"
                      />
                    </figure>
                    {/*  <!-- Body--> */}
                    <div className="p-6">
                      <header className="mb-4">
                        <h3 className="text-xl font-medium text-slate-700">
                     {item?.full_name}
                        </h3>
                       
                      </header>
                      <p>
                      I’m {item?.full_name}, a certified fitness trainer with over 10 years of experience in helping individuals achieve their fitness goals. My passion for fitness began in high school when I joined the track team, and it has been a significant part of my life ever since. 
                      </p>
                      <p className="text-black mt-2">Expert at : {item?.skills.map((skill, index) => <span className="font-semibold mr-2" key={index}>{skill}</span>)}</p>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Team;