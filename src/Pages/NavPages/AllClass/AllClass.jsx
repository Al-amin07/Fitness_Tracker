
import { Helmet } from "react-helmet";
import useAllClass from "../../../Hooks/useAllClass";
import Loading from "../../../Loading/Loading";
import SingleClass from "./SingleClass";


const AllClass = () => {
  
    const [classes, ,isLoading] = useAllClass();
    console.log(classes);
    if(isLoading) return <Loading/>
    return (
        <div>
            <Helmet>
                <title> Vite || All Class</title>
            </Helmet>
            <h2 className="text-3xl font-medium text-slate-500 text-center mb-12">See Our Latest Classes</h2>
            <div className="grid grid-cols-2 gap-12">
             
                {
                    classes.map(item => <SingleClass 
                        key={item._id}
                        item={item}
                        />)
                }
            </div>
        </div>
    );
};

export default AllClass;