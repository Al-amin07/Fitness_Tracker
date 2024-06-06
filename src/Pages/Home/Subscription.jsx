import Swal from "sweetalert2";
import sub from "../../../public/sub.jpg";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const Subscription = () => {

    const axiosCommon = useAxiosCommon();
    const handleSubs =async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        console.log(name, email);
        const subUser = {
            name,
            email,
            time: new Date().toLocaleDateString()
        }
        console.log(subUser);
        const { data } = await axiosCommon.post('/subscription', subUser);
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Welcome to Fitness Tracker Community",
                showConfirmButton: false,
                timer: 500
              });
        }
        // Welcome to [Your Fitness Tracker Brand] Community
    }

  return (
    <section className="bg-cyan-50 dark:text-gray-800">
      <div className="container  flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between px-16">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Subscribe to Our Newsletter
          </h1>
          <div className="mt-6">
          <form onSubmit={handleSubs} className="">
          <div className='mt-2'>
          
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full border  px-3 py-3 rounded-full focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
          <div className="relative  my-6 inline-flex w-full flex-row-reverse items-center rounded  text-sm text-slate-500">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                className="peer order-2 text-bg px-4 w-full py-[13px] border rounded-l-full"
              />
              <button className="inline-flex rounded-r-full h-12 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded bg-cyan-500 px-6 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-cyan-600 focus:bg-cyan-700 focus-visible:outline-none peer-disabled:cursor-not-allowed peer-disabled:border-cyan-300 peer-disabled:bg-cyan-300">
                
                Subscribe
              </button>
            </div>
          
          </form>
          </div>
      
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={sub}
            alt=""
            className="object-contain  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Subscription;
