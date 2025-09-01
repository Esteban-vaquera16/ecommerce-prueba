const Boton = ({ text, img, onClick, className }) => {
  return (
    <button onClick={onClick} className={className}>
      {img && <img src={img} alt={text} />}
      {text}
    </button>
  );
};

export default Boton 