import { useRef } from "react";
import LogoIcon from "./LogoIcon";
import "../styles/tabs.css";

const TABS = [
  { id: "main",     label: "개요" },
  { id: "problem",  label: "문제 인식" },
  { id: "process",  label: "판매 구조" },
  { id: "services", label: "전략 설계" },
  { id: "cta",      label: "진단 확인" },
  { id: "contact",  label: "문의하기" },
];

export default function Header({ activeTab, onSwitch }) {
  const tabsRef = useRef(null);

  function handleSwitch(id) {
    onSwitch(id);
    setTimeout(() => {
      const btn = document.getElementById(`bo-tab-${id}`);
      if (btn && tabsRef.current) {
        btn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }, 50);
  }

  return (
    <header className="bo-header">
      <div className="bo-header-inner">
        <div className="bo-logo-row">
          <button className="bo-logo-btn" onClick={() => handleSwitch("main")}>
            <LogoIcon />
            <span className="bo-logo-text">BLUE ORBIT</span>
          </button>
          <span className="bo-badge">PRO ACTIVE AI SYSTEM</span>
        </div>

        <nav className="bo-tabs" ref={tabsRef} role="tablist">
          {TABS.map((t) => (
            <button
              key={t.id}
              id={`bo-tab-${t.id}`}
              role="tab"
              aria-selected={activeTab === t.id}
              className={`bo-tab-btn${activeTab === t.id ? " active" : ""}`}
              onClick={() => handleSwitch(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
