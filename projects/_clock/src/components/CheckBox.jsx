const CheckBox = ({ index, item, handleDone }) => {
  return (
    <div>
      <label className={item.done ? "cross" : ""} htmlFor={"option-" + index}>
        <input
          onChange={() => handleDone(index)}
          type="checkbox"
          name={"option-" + index}
          value={item.text}
        />
        {item.text}
      </label>
    </div>
  );
};

export default CheckBox;
