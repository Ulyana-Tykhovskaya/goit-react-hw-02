import styles from "./Options.module.css";
const Options = ({ options, onFeedback, onReset, total }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          className={styles.button}
          key={option}
          onClick={() => onFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
      {total > 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default Options;
