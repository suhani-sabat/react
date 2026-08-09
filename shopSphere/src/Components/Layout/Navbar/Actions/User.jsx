import userIcon from "../../../../Assets/user.svg";

export default function User() {
  return (
    <button
      type="button"
      className="p-2 rounded-full hover:bg-purple-200 transition-colors duration-200 cursor-pointer"
      aria-label="User account"
    >
      <img
        src={userIcon}
        alt="User"
        className="w-7 h-7"
      />
    </button>
  );
}