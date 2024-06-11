import { useParams } from "react-router-dom";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../Loading/Loading";
import { IoMdTime } from "react-icons/io";
import moment from 'moment'

const CommunityDetails = () => {
    const { id } = useParams();
    const axiosCommon = useAxiosCommon();
    const { data: community = {}, isLoading } = useQuery({
        queryKey: ['community', id],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/community-details/${id}`)
            return data
        }
    })
    console.log('In Details ', community);
    const { description, email, name, image, role, user_image, time } = community
    const realTime = moment(time).format('ddd HH.mm YYYY ')
    if(isLoading) return <Loading/>
    return (
        <div className="shadow-2xl  flex flex-col lg:flex-row gap-8 rounded-xl">
        <div className="flex-1 ">
          <img className="w-full h-[250px] md:h-[300px] lg:h-[350px]" src={image} alt="" />
        </div>



        <div className="px-6 space-y-4 mt-3 flex-1 mb-4 md:mb-0">
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold"></h2>
          <h2 className="text-xl lg:text-3xl font-medium">Country : </h2>
          <h2 className="text-xl lg:text-3xl font-medium">Location : </h2>
          <h2 className="text-[#9B9D9D]"></h2> */}
          <div className="flex gap-4 items-center">
            <img className="h-12 w-12 rounded-full" src={user_image} alt="" />
            <div className="inline-block  text-center">
                <h1 className="text-lg font-medium ">{name}</h1>
                <h2 className={`${role === 'admin' ? 'bg-cyan-50 text-cyan-500 py-1 px-2 rounded-full' : 'bg-emerald-50 text-emerald-500 py-1 px-2 rounded-full'}`}>{role}</h2>
            </div>
          </div>

          
          <div className="flex flex-col md:flex-row gap-3 md:gap-8">
         <div className="flex gap-0  items-center text-[#23BE0A]">
            <h2 className="mr-2 font-bold">Posted Time : {realTime}</h2>
       
           
          </div>
  
         </div>
         <p className="text-slate-500 ">{description}</p>

      
          
       
        
         
        </div>
      </div>
    );
};

export default CommunityDetails;