export default function SectionLabel({ text, lime = false }) {
  return (
    <div className="bo-section-label">
      <div className={`bo-label-line${lime ? " lime" : ""}`} />
      <span className={`bo-label-text${lime ? " lime" : ""}`}>{text}</span>
    </div>
  );
}
