import { useQuery } from "@tanstack/react-query";

import useAxiosCommon from "../../../Hooks/useAxiosCommon";
import SingleTrainer from "./SingleTrainer";
import useAllTrainer from "../../../Hooks/useAllTrainer";
import Loading from "../../../Loading/Loading";
import { Helmet } from "react-helmet";

const AllTrainer = () => {
  const [trainers, , isLoading] = useAllTrainer();
  console.log(trainers);
  if (isLoading) return <Loading />;

  return (
    <div>
      <Helmet>
        <title> FitnessSynced | All Trainer</title>
      </Helmet>
      <h2 className="text-3xl font-medium text-slate-500 text-center mb-12">
        See Our Expert Trainers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {trainers.map((trainer) => (
          <SingleTrainer key={trainer._id} trainer={trainer} />
        ))}
      </div>
    </div>
  );
};

export default AllTrainer;
