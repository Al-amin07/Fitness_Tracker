import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md';

const SlotRow = ({index, item, handleDelete}) => {
    let slot = '';

    if(item.split(' ')[1] === '8.00AM' || item.split(' ')[1] === '10.00AM') {
        slot = 'Morning';
    }
    else if(item.split(' ')[1] === '1.00PM' || item.split(' ')[1] === '4.00PM'){
        slot = 'Afternoon'
    }
    else{
        slot = 'Evening'
    }

    return (
        <tr className="transition-colors duration-300 hover:bg-slate-50">
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
             {index + 1}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
         {slot}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
              {item.split(' ')[0]}
            </td>
            <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
              {item.split(' ')[1] + ' - ' + item.split(' ')[3]}
            </td>
            <td className="h-12 text-center px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
            
         


  
    <>
      {/*<!-- Component: Base outline button with icon  --> */}
      <button onClick={() => handleDelete(item)} className="inline-flex h-10 items-center justify-center gap-2 self-center whitespace-nowrap rounded border border-cyan-500 px-5 text-sm font-medium tracking-wide text-cyan-500 transition duration-300 hover:border-cyan-600 hover:text-cyan-600 focus:border-cyan-700 focus:text-cyan-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-cyan-300 disabled:text-cyan-300 disabled:shadow-none">
      <MdDelete className="text-2xl  mx-auto  font-bold"/>
      </button>
     
    </>
  


            </td>
       
          </tr>
    );
};

SlotRow.propTypes = {
    index: PropTypes.number,
    item: PropTypes.string,
    handleDelete: PropTypes.func
}

export default SlotRow;