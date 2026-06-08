import SectionLabel from "../SectionLabel";
import "../../styles/cards.css";

const ITEMS = [
  { name: "반응 구조 진단",    tag: "DIAGNOSIS",    lime: false },
  { name: "구매 이유 재정의",  tag: "REDEFINE",     lime: false },
  { name: "판매 메시지 설계",  tag: "MESSAGING",    lime: true  },
  { name: "실행 우선순위 정리", tag: "EXECUTION",   lime: true  },
];

export default function TabServices() {
  return (
    <div className="bo-section">
      <SectionLabel text="Architecture" />
      <h2>
        진단 결과로<br />판매 전략을<br />새롭게 설계합니다
      </h2>
      <p className="bo-section-copy">
        블루오빗은 제품에 대한 관점을 바꾸어 시장이 먼저 찾는 이유를 만들어 드립니다.
        시장이 자연스럽게 제품에 집중하도록 바로 실행 가능한 액션을 함께 만들어 드립니다.
      </p>
      <div className="bo-services-list">
        {ITEMS.map((item) => (
          <div key={item.name} className="bo-service-item">
            <span className="bo-service-name">{item.name}</span>
            <span className={`bo-service-tag${item.lime ? " lime" : ""}`}>{item.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
