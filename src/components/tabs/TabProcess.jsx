import SectionLabel from "../SectionLabel";
import "../../styles/cards.css";

const STEPS = [
  {
    num: "01",
    title: "현재 반응 확인",
    body: "광고·상세페이지·상담 중 어디서 고객반응이 끊기는지 점검합니다.",
  },
  {
    num: "02",
    title: "구매 이유 추출",
    body: "실제 구매 고객이 어떤 말에 반응했는지, 무엇이 결정을 만들었는지 확인합니다.",
  },
  {
    num: "03",
    title: "시장 언어 비교",
    body: "지금 시장에서 통하는 표현과 우리가 쓰는 메시지가 얼마나 다른지 비교합니다.",
  },
  {
    num: "04",
    title: "판매 구조 재정의",
    body: "첫 노출부터 구매까지의 흐름에서 구매 욕구가 약해지는 구간을 찾아냅니다.",
  },
  {
    num: "05",
    title: "실행 우선순위 재정렬",
    body: "매출과 전환에 직접 연결되는 핵심 실행 과제부터 우선순위를 재정렬합니다.",
  },
];

export default function TabProcess() {
  return (
    <div className="bo-section">
      <SectionLabel text="Audit" />
      <h2>
        제품 바꾸기 전,<br />판매 구조<br />점검부터 합니다.
      </h2>
      <p className="bo-section-copy">
        블루오빗은 기능이나 디자인을 먼저 고치지 않습니다.
      </p>
      <p className="bo-section-copy">
        고객이 제품을 어떻게 받아들이고 있는지,
        왜 구매욕구가 약한지 먼저 진단합니다.
      </p>
      <div className="bo-steps">
        {STEPS.map((step) => (
          <div key={step.num} className="bo-step">
            <span className="bo-step-num">{step.num}</span>
            <div className="bo-step-content">
              <strong>{step.title}</strong>
              <p>{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
