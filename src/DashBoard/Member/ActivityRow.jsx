import { useState } from "react";
import { FaRegEye } from "react-icons/fa6";
import FeedbackModal from "../Modal/FeedbackModal";
import PropTypes from 'prop-types'

const ActivityRow = ({item, index}) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
      setIsOpen(false);
    };
    return (
        <tr key={item._id} className="  bg-white shadow-lg">
              <td className="h-12 px-6 text-sm border-0 border-b border-slate-300   bg-white">
                {index + 1}
              </td>
              <td className="h-12 px-6 text-sm border-0 border-b border-slate-300  bg-white">
                <img
                  className="h-12 w-12 rounded-full"
                  src={item.profile_image}
                  alt=""
                />
              </td>
              <td className="h-12 px-6 text-sm border-0 border-b border-slate-300   bg-white">
                {item.full_name}
              </td>
              <td className="h-12 px-6 text-sm border-0 border-b border-slate-300    bg-white">
                {item.email}
              </td>
              <td className="h-12 px-6 text-sm border-0 border-b border-slate-300  bg-white">
                {item.status === "pending" ? (
                  <span className="text-cyan-500 bg-cyan-50 py-1 px-2 rounded-full">
                    Pending
                  </span>
                ) : (
                  <>
                    <span className="text-red-500 bg-red-50 font-medium py-1 px-2 rounded-full">
                      Rejected{" "}
                    </span>{" "}
                    <span
                      onClick={() => setIsOpen(true)}
                      className="text-cyan-600  bg-cyan-100 py-1 px-1 text-xl ml-2 hover:bg-cyan-200 rounded-full font-bold"
                    >
                      <FaRegEye
                        // onClick={() => setIsOpen(true)}
                        className="inline-block"
                      />
                   
                    </span>
                    <FeedbackModal
                        isOpen={isOpen}
                        closeModal={closeModal}
                        feedback={item?.feedback}
                      />
                  </>
                )}
              </td>
            </tr>
    );
};

ActivityRow.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number
}

export default ActivityRow;