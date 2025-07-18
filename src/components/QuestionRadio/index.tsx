import styles from "./index.module.css";

type PropsType = {
  fe_id: string;
  props: {
    title: string;
    options: Array<{ value: string; text: string }>;
    value: string;
    isVertical: boolean;
  };
};

const QuestionInput = ({ fe_id, props }: PropsType) => {
  const { title, options, value, isVertical } = props;
  return (
    <>
      <p>{title}</p>
      <ul>
        {options.map((option) => {
          const { value: val, text } = option;

          // 判断竖向、横向
          let className = "";
          if (isVertical) className = styles.verticalItem;

          return (
            <li key={val} className={className}>
              <input
                type="radio"
                name={fe_id}
                value={val}
                defaultChecked={value === val}
              />
              {text}
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default QuestionInput;
