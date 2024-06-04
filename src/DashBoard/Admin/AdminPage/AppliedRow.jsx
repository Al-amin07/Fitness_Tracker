import { FaRegEye } from "react-icons/fa6";
import DetailsModal from "../../Modal/DetailsModal";
import PropTypes from "prop-types";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AppliedRow = ({  item , refetch}) => {
    const axiosSecure = useAxiosSecure();
    console.log('in Row', item);
    const [isOpen, setIsOpen]  = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }
 
    const modalHandler = async () => {
        const {status,_id, ...newItem} = item;
        console.log(newItem); 
        const { data: trainer } = await axiosSecure.post('/trainers', newItem);
        console.log(trainer);
        const { data: applied } =  await axiosSecure.delete(`/applied-trainers/${_id}`)
        console.log(applied);
        if( applied.deletedCount > 0){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.full_name} added as Trainer`,
            showConfirmButton: false,
            timer: 1000
          });
          refetch()
          setIsOpen(false)
        }
    }
  return (
    <tr key={item?._id}>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img
          className="h-12 w-12 rounded-full"
          src={item?.profile_image}
          alt=""
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{item?.full_name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {item?.age} Years
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap ">
          {item?.email} Years
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-4 py-3 font-semibold text-emerald-800 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-emerald-100 opacity-50 rounded-full"
          ></span>
          <span className="relative">
            <FaRegEye className="text-xl inline-block mr-2" />
            Details
          </span>
        </button>
        <DetailsModal
        closeModal={closeModal}
        isOpen={isOpen}
        modalHandler={modalHandler}
        item={item}
        
      />
      </td>
     
    </tr>
  );
};

AppliedRow.propTypes = {
  modalHandler: PropTypes.func,
  closeModal: PropTypes.func,
  setIsOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  item: PropTypes.object,
  refetch: PropTypes.func,
};

export default AppliedRow;