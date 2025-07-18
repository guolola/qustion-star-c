import styles from "./index.module.css";

type PropsType = {
  fe_id: string;
  props: {
    title: string;
    placeholder?: string;
  };
};

const QuestionInput = ({ fe_id, props }: PropsType) => {
  const { title, placeholder } = props;
  return (
    <>
      <p>{title}</p>
      <div className={styles.inputWrapper}>
        <input type="text" placeholder={placeholder} />
      </div>
    </>
  );
};

export default QuestionInput;
