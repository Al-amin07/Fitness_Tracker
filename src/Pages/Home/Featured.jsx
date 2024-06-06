import { MdSpatialTracking } from "react-icons/md";
import { LuGoal } from "react-icons/lu";
import { ImSleepy2 } from "react-icons/im";
import { IoMdPerson } from "react-icons/io";
import { BiSolidCustomize } from "react-icons/bi";
const Featured = () => {
    return (
        <section className="m-4  md:m-8 dark:bg-gray-100 dark:text-gray-800">
        <div className="container mx-auto p-4 mb-8 space-y-2 text-center">
            <h2 className="text-5xl font-bold">Key Features of Our Fitness Tracker</h2>
            <p className="dark:text-gray-600 w-3/4 mx-auto mt-2">Explore the innovative features that make our fitness tracker the perfect companion for your health and wellness journey. Each feature is designed to enhance your experience and help you reach your goals with ease.</p>
        </div>
        <div className="container mx-auto grid justify-center  sm:grid-cols-2 lg:grid-cols-3">
            
            <div className="flex flex-col items-center p-6 border-b-2  border-cyan-600">
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-600">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg> */}
                <MdSpatialTracking className="text-4xl"/>
                <h3 className="my-3 text-3xl font-semibold">Real-Time Tracking</h3>
                <div className="space-y-1 leading-tight">
                    <p>Stay updated with live tracking of your activities, heart rate, and more. Get instant insights to keep your workouts on track and achieve your goals faster</p>
                    {/* <p>Tempore quasi porro</p>
                    <p>Blanditiis aut mollitia ex</p> */}
                </div>
            </div>

            <div className="flex flex-col items-center p-6 border-x-2 border-b-2 border-cyan-600">
                <IoMdPerson className="text-4xl"/>
                <h3 className="my-3 text-3xl font-semibold">Personalized Insights</h3>
                <div className="space-y-1 leading-tight">
                    <p>Receive tailored recommendations based on your activity patterns and health data. Our AI-driven insights help you make informed decisions about your fitness journey.</p>
                    
                </div>
            </div>

            <div className="flex flex-col items-center p-6 border-b-2 border-cyan-600">
             <LuGoal className='text-4xl'/>
                <h3 className="my-3 text-3xl font-semibold">Goal Setting</h3>
                <div className="space-y-1 leading-tight">
                    <p>Set, track, and achieve your fitness goals with ease. Whether it’s weight loss, muscle gain, or improving endurance, we’ve got you covered.</p>
                 
                </div>
            </div>

            <div className="flex flex-col items-center p-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-9 h-9 dark:text-violet-600">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
                <h3 className="my-3 text-3xl font-semibold">Activity History</h3>
                <div className="space-y-1 leading-tight">
                    <p>Keep a comprehensive record of all your workouts and activities. Analyze past performances to identify trends and make progress.</p>
                  
                </div>
            </div>

            <div className="flex flex-col items-center p-6 border-x-2 border-cyan-600">
              <BiSolidCustomize className="text-4xl"/>
                <h3 className="my-3 text-3xl font-semibold">Customizable Workouts</h3>
                <div className="space-y-1 leading-tight">
                    <p>Create and customize workout plans that suit your fitness level and goals. Enjoy a variety of exercises and routines to keep things interesting</p>
                
                </div>
            </div>

            <div className="flex flex-col items-center p-6 ">
               <ImSleepy2 className="text-4xl"/>
                <h3 className="my-3 text-3xl font-semibold"> Sleep Monitoring</h3>
                <div className="space-y-1 leading-tight">
                    <p>Track your sleep patterns and quality to ensure you’re getting the rest you need. Improve your sleep hygiene for better overall health.</p>
                  
                </div>
            </div>
        </div>
    </section>
    );
};

export default Featured;