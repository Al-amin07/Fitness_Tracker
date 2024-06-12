import { useNavigate } from "react-router-dom";
// import error from '/error.avif'

const Error = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1)
    }

    // bg-[url(/error.avif)] bg-no-repeat bg-cover bg-center
    return (
        <section  className="bg-[url(/error.avif)] bg-no-repeat bg-cover bg-center   flex flex-row-reverse items-center min-h-screen p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container  flex flex-col items-center px-5 mx-auto my-8">
            <div className=" bg-cyan-50 p-6 rounded-xl text-center">
                <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                    {/* <span className="sr-only">Error</span>404 */}
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                <button onClick={handleBack}  className="px-8 py-3 font-semibold rounded text-white bg-cyan-500 dark:text-gray-50">Go Back</button>
            </div>
        </div>
        {/* <div className="w-1/2">
            <img className="w-full" src={error} alt="" />
        </div> */}
    </section>
    );
};

export default Error;