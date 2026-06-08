import SectionLabel from "../SectionLabel";
import "../../styles/buttons.css";
import "../../styles/cards.css";

export default function TabCTA({ onContact }) {
  return (
    <div className="bo-section">
      <SectionLabel text="About BlueOrbit" />
      <h2>
        블루오빗은 매출 향상을 위한<br />시장 반응 구조 진단 서비스입니다
      </h2>
      <p className="bo-about-copy">
        블루오빗은 매출향상, 고객 증가, 판매 전환율 향상을 위해 제품 자체가 아니라
        시장 반응과 구매 이유 구조에서 분석합니다.
      </p>
      <p className="bo-about-copy">
        제품이 그대로여도 시장의 기대와 고객의 선택 기준이 바뀌면
        판매 반응은 약해질 수 있습니다.
      </p>
      <p className="bo-about-copy">
        블루오빗은 시장이 제품을 선택하는 이유를 진단하고,
        매출 향상을 위한 판매 구조를 재설계하는 실행 전략 파트너입니다.
      </p>

      <div className="bo-divider" />

      <SectionLabel text="Verification" />
      <h2 style={{ fontSize: "clamp(22px, 4.5vw, 36px)", marginBottom: 14 }}>
        어디서 판매 흐름이<br />막혔는지 확인해보세요
      </h2>
      <p className="bo-section-copy">
        시장의 선택 기준은 바뀔 수 있습니다.
        구매 이유와 판매 흐름을 진단하고, 실행 전략을 함께 제안합니다.
      </p>
      <button
        className="bo-btn-primary"
        style={{ maxWidth: 360 }}
        onClick={onContact}
      >
        구조 진단 프로세스 시작하기
      </button>
    </div>
  );
}
