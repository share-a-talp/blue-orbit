import SectionLabel from "../SectionLabel";
import "../../styles/cards.css";

const ITEMS = [
  {
    num: "01",
    title: "초기 반응 약화",
    body: "초기에는 반응했지만 지금은 같은 메시지에 구매가 일어나지 않습니다.",
  },
  {
    num: "02",
    title: "구매 이유 흐림",
    body: "고객이 왜 지금 사야 하는지 바로 이해하지 못합니다.",
  },
  {
    num: "03",
    title: "경쟁 메시지 동조화",
    body: "경쟁사와 비슷한 설명이 반복되면 가격 비교로 이동합니다.",
  },
  {
    num: "04",
    title: "판매 구조 고착",
    body: "광고, 상세페이지, 상담 흐름이 예전 구매 이유에 머물러 있습니다.",
  },
];

export default function TabProblem() {
  return (
    <div className="bo-section">
      <SectionLabel text="Analysis" />
      <h2>
        제품 효용성이 아닌<br />구매 욕구 자극이 핵심입니다
      </h2>
      <p className="bo-section-copy">
        소비자의 변화하는 욕구를 따라가지 못하는 판매구조가 문제입니다.
        제품 개선은 소비욕구를 자극한 후에 이루어져야 합니다.
      </p>
      <div className="bo-cards-stack">
        {ITEMS.map((item) => (
          <div key={item.num} className="bo-problem-card">
            <span className="bo-problem-num">{item.num}</span>
            <div className="bo-problem-body">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
