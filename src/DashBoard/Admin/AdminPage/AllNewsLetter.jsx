import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AllNewsLetter = () => {
    const axiosSecure = useAxiosSecure();
    const { data: subscribers } = useQuery({
        queryKey: ['subscription'],
        queryFn: async() => {
            const { data } = await axiosSecure.get('/subscription')
            return data
        }
    })
    console.log(subscribers);
    return (
        <div>
          <h2 className="text-4xl font-semibold text-center mb-6
          ">All New Subscribers </h2>
            <div>
                <table>
                <thead >
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
              Email
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
        <tbody>
            {
                subscribers.map((item, index) =>  <tr key={item._id}>
                    <th>
                        {index + 1}
                    </th>
                   
                    <td className='px-5 py-5   bg-white text-sm'>
                      <p className='text-gray-900 whitespace-no-wrap'>{item.name}</p>
                    </td>
                    <td className='px-5 py-5   bg-white text-sm'>
                    {item.email} 
                    </td>
              
                    <td className='px-5 py-5  bg-white text-sm'>
                    <p className='text-gray-900 whitespace-no-wrap text-center'>{item.years_of_experience} Years</p>
                   
                    </td>
                    <td className='px-5 py-5  bg-white text-sm'>
                      <button   className='relative cursor-pointer inline-block px-4 py-3 font-semibold text-cyan-800 leading-tight'>
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
        </div>
    );
};

export default AllNewsLetter;