import Head from "next/head";
import styles from "./page.module.css";
type Props = {
  params: { id: string };
};

// 临时的引用过来
import QuestionInput from "@/components/QuestionInput";
import QuestionRadio from "@/components/QuestionRadio";
export default async function QuestionPage({ params }: Props) {
  const { id } = await params;
  return (
    <>
      <Head>
        <title>问卷页面</title>
      </Head>
      <main>
        <form action="">
          <input type="hidden" name="questionId" value={id} />
          <QuestionInput
            fe_id="1"
            props={{ title: "问卷1", placeholder: "请输入问卷1" }}
          />
          <QuestionRadio
            fe_id="2"
            props={{
              title: "你的性别",
              options: [
                { value: "male", text: "男" },
                { value: "female", text: "女" },
              ],
              value: "male",
              isVertical: true,
            }}
          ></QuestionRadio>
          <div className={styles.submitBtnContainer}>
            <button type="submit">提交</button>
          </div>
        </form>
      </main>
    </>
  );
}
