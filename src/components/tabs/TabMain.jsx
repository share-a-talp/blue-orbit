import "../../styles/hero.css";
import "../../styles/buttons.css";

export default function TabMain({ onContact }) {
  return (
    <div className="bo-hero">
      <div className="bo-hero-glow" />
      <div className="bo-hero-inner">
        <h1>
          지금 판매 흐름의<br />어디가 막혔는지<br />확인하세요
        </h1>
        <p className="bo-hero-sub">
          시장이 제품을 선택하는 기준은 이미 바뀌었을 수 있습니다.<br />
          블루오빗과 함께 구매 이유를 재설계하십시오.
        </p>
        <div className="bo-hero-tags">
          <span className="bo-tag">시장 반응</span>
          <span className="bo-tag">구매 이유</span>
          <span className="bo-tag">반응 분석</span>
        </div>
        <button className="bo-btn-primary" onClick={onContact}>
          제품 판매 구조 진단 요청
        </button>
      </div>
    </div>
  );
}
