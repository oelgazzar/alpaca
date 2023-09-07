export default function ButtonGroup({
  options,
  selected,
  handleOnClick,
  buttonClass,
}) {
  return options.map((option, i) => (
    <button
      key={i}
      className={`btn m-2 ${buttonClass} ${
        selected === option ? "active" : ""
      }`}
      onClick={() => handleOnClick(option)}
    >
      {option}
    </button>
  ));
}
