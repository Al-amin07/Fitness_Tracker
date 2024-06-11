import { useQuery } from "@tanstack/react-query";

import { FaUserFriends } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Loading/Loading";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const AdminDashBoard = () => {
   
    const axiosSecure = useAxiosSecure();
    const { data: stat, isLoading } = useQuery({
        queryKey: ['admin-data'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/admin-data');
            return data;
        }
    })
    console.log(stat);
    if(isLoading) return <Loading/>
    // const { paymentCollection } = stat;

    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };
    
    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    const data = [
      {
        name: ' Newsletter Subscribers',
        uv: stat?.uniqueSubsCount,
        pv: 2400,
        amt: 2400,
      },
      {
        name: ' Total Paid Members',
        uv: stat?.uniqueUserCount,
        pv: 1398,
        amt: 2210,
      },
    
    ];
    



    
  return (
    <div>
      <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex p-4 bg-[#E2BB7C] text-white space-x-4 rounded-lg md:space-x-2 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 dark:text-gray-100"
              >
                <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">{stat.payments}</p>
              <p className="capitalize">Bookings</p>
            </div>
          </div>
          <div className="flex p-2  bg-[#00C49F] text-white space-x-4 rounded-lg md:space-x-2 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
           <FaUserFriends className="text-4xl font-extrabold"/>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">{stat.users}</p>
              <p className="capitalize">New Users</p>
            </div>
          </div>
          <div className="flex p-4 bg-[#73B6FF] text-white space-x-4 rounded-lg md:space-x-2 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 dark:text-gray-100"
              >
                <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                <rect width="32" height="32" x="80" y="264"></rect>
                <rect width="32" height="32" x="240" y="128"></rect>
                <rect width="32" height="32" x="136" y="168"></rect>
                <rect width="32" height="32" x="400" y="264"></rect>
                <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">${stat.price}</p>
              <p className="capitalize">Revenue</p>
            </div>
          </div>
          <div className="flex bg-purple-500 text-white p-4 space-x-4 rounded-lg md:space-x-2 dark:bg-gray-50 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="h-9 w-9 dark:text-gray-100"
              >
                <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
              </svg>
            </div>
            <div className="flex flex-col justify-center ">
              <p className="text-3xl font-semibold leading-none">{stat.classess}</p>
              <p className="capitalize">Total Classes</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-5 mt-6">
        {/* Chart */}
        <div className="flex-1 ">
        
        <BarChart
      width={500}
      height={350}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis  />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>

        </div>
        <div className="flex-1">
          <h3 className="text-3xl font-semibold text-center mb-8">Recent Financial Activities : </h3>
          <table
          className="w-full text-left "
          // cellspacing="0"
        >
          <tbody>
            <tr className="shadow-lg border-b-2 ">
              <th
                scope="col"
                className="h-12 px-3 text-lg font-medium  bg-white text-slate-700  border-0"
              >
                Name
              </th>
              <th
                scope="col"
                className="h-12 px-3 text-lg font-medium bg-white text-slate-700  border-0"
              >
                Email
              </th>
              <th
                scope="col"
                className="h-12 px-3 text-lg font-medium  bg-white text-slate-700  border-0"
              >
                Price
              </th>
              {/* <th
                scope="col"
                className="h-12 px-3 text-lg font-medium  stroke-slate-700 text-slate-700  border-0"
              >
                Transaction Id
              </th> */}
         
              
            </tr>
            {
              stat?.paymentsItem?.slice(0,6).map(item =>  <tr key={item._id} className="transition-colors duration-300 hover:bg-slate-50">
        
        <td className="h-12 px-6 text-sm transition bg-white shadow-md duration-300 border-0 border-b border-slate-200 stroke-slate-500 text-slate-500 ">
                {item.name}
              </td>
              <td className="h-12 px-6 text-sm transition bg-white shadow-md duration-300 border-0 border-b border-slate-200 stroke-slate-500 text-slate-500 ">
              {item.email}
              </td>
              <td className="h-12 px-6 text-sm transition bg-white shadow-md duration-300 border-0 border-b border-slate-200 stroke-slate-500 text-slate-500 ">
               $ {item.price}
              </td>
          
            </tr>)
            }
       
           
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
