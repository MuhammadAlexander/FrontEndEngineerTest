
const Button = (props) => {
  const { children, size, color } = props;

  return (
    <button className={`${color} rounded-lg font-bold ${size}`}>
      {children}
    </button>
  );
};

export default Button;
