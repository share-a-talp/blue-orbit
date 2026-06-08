export default function LogoIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 9C4.791 9 3 10.791 3 13C3 15.209 4.791 17 7 17C8.737 17 10.222 15.891 10.766 14.336L13.234 9.664C13.778 8.109 15.263 7 17 7C19.209 7 21 8.791 21 11C21 13.209 19.209 15 17 15C15.263 15 13.778 13.891 13.234 12.336L10.766 7.664C10.222 6.109 8.737 5 7 5C4.791 5 3 6.791 3 9Z"
        stroke="url(#logo-g)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="logo-g" x1="3" y1="5" x2="21" y2="17" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00aeef" />
          <stop offset="1" stopColor="#8dc63f" />
        </linearGradient>
      </defs>
    </svg>
  );
}
