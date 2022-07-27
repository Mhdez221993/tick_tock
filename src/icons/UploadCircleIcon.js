export default function UploadCircleIcon({ progress }) {
  return (
    <svg
      className="rc-progress-circle undefined"
      viewBox="0 0 100 100"
      style={{ width: 78 }}
    >
      <path
        className="rc-progress-circle-trail"
        d="M 50,50 m 0,-48
a 48,48 0 1 1 0,96
a 48,48 0 1 1 0,-96"
        stroke="#161823"
        strokeLinecap="round"
        strokeWidth={4}
        fillOpacity={0}
        strokeOpacity="0.12"
        style={{
          stroke: "rgb(22, 24, 35)",
          strokeDasharray: "301.593px, 301.593px",
          strokeDashoffset: 0,
          transition:
            "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s",
        }}
      />
      <path
        className="rc-progress-circle-path"
        d="M 50,50 m 0,-48
a 48,48 0 1 1 0,96
a 48,48 0 1 1 0,-96"
        strokeLinecap="round"
        strokeWidth={4}
        fillOpacity={0}
        style={{
          stroke: "rgb(45, 140, 240)",
          strokeDasharray: `${progress * 3}px, 301.593px`,
          strokeDashoffset: 0,
          transition:
            "stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s ease 0s, stroke-width 0.06s ease 0.3s",
        }}
      />
    </svg>
  );
}
