// import slotShouldForwardProp from "@mui/material/styles/slotShouldForwardProp";
import PropTypes from "prop-types";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import DetailsModal from "./DetailsModal";

const SlotRow = ({ index, item, handleDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  // const modalDelete = () => {
  //   console.log('hiiii');
  // }
  console.log(item);
  return (
    <tr className="transition-colors duration-300  hover:bg-slate-50">
      <td className="h-12 px-6 text-sm  transition bg-white duration-300 border-0 border-b  border-slate-200 stroke-slate-500 text-slate-500 ">
        {index + 1}
      </td>
      <td className="h-12 px-6 bg-white text-sm transition duration-300 border-0 border-b  border-slate-200 stroke-slate-500 text-slate-500 ">
        {item.slotName}
      </td>
      <td className="h-12 px-6 bg-white text-sm transition duration-300 border-0 border-b  border-slate-200 stroke-slate-500 text-slate-500 ">
        {item.slotTime} Hours
      </td>
      <td className="h-12 px-6 bg-white text-sm transition duration-300 border-0 border-b  border-slate-200 stroke-slate-500 text-slate-500 ">
        {item.bookingDetails ? "Booked" : "Available"}
      </td>
      <td className="h-12 px-6 bg-white text-bg transition duration-300 border-0 border-b  border-slate-200 ">
        {item.bookingDetails ? (
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex px-3 py-2 rounded-full flex-1 items-center justify-center gap-2 justify-self-center whitespace-nowrap  bg-cyan-100 text-cyan-500 text-sm font-medium tracking-wide"
          >
            See Details
          </button>
        ) : (
          "N/A"
        )}
        <DetailsModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleDelete={handleDelete}
          index={index}
          item={item}
        />
      </td>

      <td className="h-12 text-center bg-white px-6 text-sm transition duration-300 border-0 border-b  border-slate-200 stroke-slate-500 text-slate-500 ">
        <>
          {/*<!-- Component: Base outline button with icon  --> */}
          <button
            onClick={() => handleDelete(item, index)}
            className="inline-flex h-10 items-center justify-center gap-2 self-center whitespace-nowrap rounded border border-cyan-500 px-5 text-sm font-medium tracking-wide text-cyan-500 transition duration-300 hover:border-cyan-600 hover:text-cyan-600 focus:border-cyan-700 focus:text-cyan-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-cyan-300 disabled:text-cyan-300 disabled:shadow-none"
          >
            <MdDelete className="text-2xl  mx-auto  font-bold" />
          </button>
        </>
      </td>
    </tr>
  );
};

SlotRow.propTypes = {
  index: PropTypes.number,
  item: PropTypes.string,
  handleDelete: PropTypes.func,
};

export default SlotRow;
