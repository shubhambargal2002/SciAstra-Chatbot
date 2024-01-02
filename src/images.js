const ChatSendSvg = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      width="20"
      height="20"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
    >
      <path
        d="M14.0292 12.4929L1 10.4121L25.5415 1L14.0292 12.4929Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0293 12.4929L16.1295 25.5415L25.5416 1L14.0293 12.4929Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { ChatSendSvg };
