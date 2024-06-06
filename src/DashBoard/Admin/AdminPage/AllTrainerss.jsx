import Swal from "sweetalert2";
import useAllTrainer from "../../../Hooks/useAllTrainer";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

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
    <h2 className="text-3xl font-medium text-center mb-8 text-slate-500">All Trainers Details</h2>
      <table className="min-w-full leading-normal">
        {/* <thead >
          <tr >
            <th
            
              scope="col"
              className="px-5 py-3 shadow-2xl bg-white  border-b border-gray-200 text-gray-800  text-left text-lg uppercase font-medium"
            >
             
            </th>
            <th
              scope="col"
              className="px-5 py-3 shadow-2xl bg-white  border-b border-gray-200 text-gray-800  text-left text-lg uppercase font-medium"
            >
              Full Name
            </th>
            <th
              scope="col"
              className="px-5 py-3 shadow-2xl bg-white  border-b border-gray-200 text-gray-800  text-left text-lg uppercase font-medium"
            >
              Age
            </th>
            <th
              scope="col"
              className="px-5 py-3 shadow-2xl bg-white  border-b border-gray-200 text-gray-800  text-left text-lg uppercase font-medium"
            >
              Years Of Experience
            </th>

            <th
              scope="col"
              className="px-5 py-3 shadow-2xl bg-white  border-b border-gray-200 text-gray-800  text-left text-lg uppercase font-medium"
            >
              Action
            </th>
          </tr>
        </thead>
z        <tbody>
            {
                trainers.map(item =>  <tr className="hover:bg-red-400" key={item._id}>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                     <img className="h-12 w-12 rounded-full" src={item.profile_image} alt="" />
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap'>{item.full_name}</p>
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    {item.age} 
                    </td>
              
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap text-center'>{item.years_of_experience} Years</p>
                   
                    </td>
                    <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
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
        </tbody> */}
      </table>
      <table
          className="w-full text-left border border-separate rounded border-slate-200"
          cellspacing="0"
        >
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Serial
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Image
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Name
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Email
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-lg font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Experience
              </th>
              <th
              scope="col"
              className="h-12 px-6 text-lg font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100"
              >
                Action
              </th>
              
            </tr>
           {
            trainers.map((item, index) =>  <tr key={item._id} className="transition-colors duration-300 hover:bg-slate-50">
            <td className="h-12 px-6 text-sm font-semibold transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
             {index + 1}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
              <img className="h-12 w-12 rounded-full" src={item.profile_image} alt="" />
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
         {item.full_name}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
              {item.email}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
            {item.years_of_experience} 
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
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
