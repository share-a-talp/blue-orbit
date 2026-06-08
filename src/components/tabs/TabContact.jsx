import { useState } from "react";
import SectionLabel from "../SectionLabel";
import "../../styles/buttons.css";
import "../../styles/cards.css";

export default function TabContact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ company: "", contact: "", issue: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bo-section">
        <div className="bo-success">
          <div className="bo-success-icon">✓</div>
          <h3>진단 요청이 접수되었습니다</h3>
          <p>빠른 시일 내에 연락드리겠습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bo-section">
      <SectionLabel text="Contact" lime />
      <h2>
        시작의 흐름을 바꿀<br />준비가 되셨나요?
      </h2>
      <p className="bo-section-copy">
        제품의 잠재력을 가로막는 유입 단절, 이탈 마찰력을 해소합니다.
        간단한 정보를 남겨주시면 진단 검토를 진행합니다.
      </p>
      <form className="bo-form" onSubmit={handleSubmit}>
        <div className="bo-field">
          <label htmlFor="company">회사명 / 브랜드명</label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="예: 블루오빗"
            value={form.company}
            onChange={handleChange}
          />
        </div>
        <div className="bo-field">
          <label htmlFor="contact">담당자 연락처 (이메일 또는 전화번호)</label>
          <input
            id="contact"
            name="contact"
            type="text"
            required
            placeholder="info@blueorbit.biz"
            value={form.contact}
            onChange={handleChange}
          />
        </div>
        <div className="bo-field">
          <label htmlFor="issue">현재 가장 막혀있다고 느끼는 지점</label>
          <textarea
            id="issue"
            name="issue"
            placeholder="상세페이지 이탈이 심하거나, 초기 광고 반응 대비 실구매 전환이 떨어지는 문제 등"
            value={form.issue}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="bo-btn-primary" style={{ maxWidth: "100%" }}>
          제품 판매 구조 진단 요청 제출
        </button>
      </form>
    </div>
  );
}
