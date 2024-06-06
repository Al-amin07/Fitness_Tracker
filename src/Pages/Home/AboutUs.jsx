
import team from '../../../public/team.avif'
import mission from '../../../public/mission.webp'
import offer from '../../../public/offer2.webp'

const AboutUs = () => {
    return (
        <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
            <h2 className="text-5xl font-bold text-center">About Us</h2>
            <h1 className="text-slate-800 w-1/2 text-center mt-2 mx-auto mb-6">Discover our mission, vision, and the team behind Your Fitness Tracker Brand. We are committed to continuous improvement and innovation. We listen to our customers and use their feedback to make our products better. </h1>
        <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img src={team} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col flex-1 p-6 dark:bg-gray-50">
                   
                    <h3 className="text-2xl font-bold">Who We Are</h3>
                    <p className="my-4 dark:text-gray-600 text-lg">At Fitness Tracker , we are passionate about helping you achieve your health and fitness goals. Our mission is to empower individuals to live healthier lives through innovative technology and personalized insights. We believe that everyone has the potential to reach their fitness goals, and we’re here to provide the tools and support you need to succeed.</p>
                    <button  className="bg-cyan-600 lg:w-2/6 px-3 py-2 rounded text-white font-medium">Learn More</button>
                </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                <img src={mission} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                   
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                    <p className="my-6 dark:text-gray-600 text-lg">Our mission is to revolutionize the way people approach fitness by providing state-of-the-art tracking solutions that are accessible, accurate, and easy to use. We strive to make fitness tracking an integral part of everyday life, helping you stay motivated and informed on your journey to better health.</p>
                    <button  className="bg-cyan-600 lg:w-2/6 px-3 py-2 rounded text-white font-medium">Learn More</button>
                </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img src={offer} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                 
                    <h3 className="text-2xl font-bold">What We Offer</h3>
                  <ul className='my-6'>
                    <li className=''><span className='font-medium text-lg'>Advanced Fitness Tracking : </span>  <span className=" dark:text-gray-600">Monitor your daily activities, workouts, sleep, and more with precision.</span></li>
                    <li className=''><span className='font-medium text-lg'>Personalized Insights : </span>  <span className=" dark:text-gray-600">Receive tailored recommendations to help you achieve your fitness goals.</span></li>
                    <li className=''><span className='font-medium text-lg'>Community Support : </span>  <span className=" dark:text-gray-600"> Join a community of like-minded individuals who share your passion for health and fitness.</span></li>
                   
                  </ul>
                  
                    <button  className="bg-cyan-600 lg:w-2/6 px-3 py-2 rounded text-white font-medium">Learn More</button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default AboutUs;