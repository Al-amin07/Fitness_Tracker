import Swal from "sweetalert2";
import useAllTrainer from "../../../Hooks/useAllTrainer";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";

const AllTrainerss = () => {
  const [trainers, refetch] = useAllTrainer();
  console.log(trainers);
  const axiosSecure = useAxiosSecure();
  const handleDelete = async(id, email) => {
    
    Swal.fire({
        title: "Are you sure?",
        
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async(result) => {
        if (result.isConfirmed) {
            const { data } = await axiosSecure.delete(`/trainer/${id}?email=${email}`)
           
            
            if(data.deletedCount > 0){
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
       
        }
      });
  }
  return (
    <div className="w-full overflow-x-auto">
        <Helmet>
        <title> Admin | AllTrainers</title>
      </Helmet>
    <h2 className="text-3xl font-medium text-center mb-8 text-slate-500">All Trainers Details</h2>
     
      <table
          className="w-full text-left border border-separate rounded border-slate-200"
          // cellspacing="0"
        >
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Serial
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-0  stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Image
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-0  stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Name
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-0  stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Email
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-0  stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Experience
              </th>
              <th
              scope="col"
              className="h-12 px-6 text-lg font-medium border-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Action
              </th>
              
            </tr>
           {
            trainers.map((item, index) =>  <tr key={item._id} className="transition-colors duration-300 hover:bg-slate-50">
            <td className="h-12 px-6 text-bg font-semibold transition duration-300 bg-white border-0 border-b-0 shadow-sm border-slate-200 stroke-slate-500 text-slate-500 ">
             {index + 1}
            </td>
            <td className="h-12 px-6 bg-white text-sm transition duration-300 border-0 border-b-0 shadow-sm border-slate-200 stroke-slate-500 text-slate-500 ">
              <img className="h-12 w-12 rounded-full" src={item.profile_image} alt="" />
            </td>
            <td className="h-12 px-6 bg-white text-sm transition duration-300 border-0 border-b-0 shadow-sm border-slate-200 stroke-slate-500 text-slate-500 ">
         {item.full_name}
            </td>
            <td className="h-12 px-6 text-sm bg-white transition duration-300 border-0 border-b-0 shadow-sm border-slate-200 stroke-slate-500 text-slate-500 ">
              {item.email}
            </td>
            <td className="h-12 px-6 text-sm bg-white transition duration-300 border-0 border-b-0 shadow-sm border-slate-200 stroke-slate-500 text-slate-500 ">
            {item.years_of_experience} 
            </td>
            <td className='px-5 py-5 stroke-slate-500 text-slate-500 border-0 border-b-0 shadow-sm border-gray-200 bg-white  text-sm'>
                      <button onClick={() => handleDelete(item._id, item.email)}  className='relative cursor-pointer inline-block px-4 py-3 font-semibold text-cyan-800 leading-tight'>
                        <span
                          aria-hidden='true'
                          className='absolute inset-0 bg-cyan-100 opacity-50 rounded-full'
                        ></span>
                        <span className='relative'>Delete Trainer</span>
                      </button>
                   
                    </td>
       
          </tr>)
           }
           
          </tbody>
        </table>
    </div>
  );
};

export default AllTrainerss;
