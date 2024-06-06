import PropTypes from "prop-types";

const Button = ({ text, bgcolor='bg-cyan-600', color='text-white' }) => {
  return (
    <button className={`inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide  transition duration-300 rounded focus-visible:outline-none whitespace-nowrap  disabled:shadow-none ${bgcolor} ${color}`} >
      <span>{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  bgcolor: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
