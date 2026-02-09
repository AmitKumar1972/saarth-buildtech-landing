import Link from "next/link";

type ButtonProps = {
  label: string;
  link: string;
  size?: "lg" | "sm";
  icon?: boolean;
};

const Button = ({ label, link, size = "sm", icon = false }: ButtonProps) => {
  return (
    <Link
      href={link}
      className={`flex items-center justify-center gap-1 bg-primary-600 font-semibold text-white
        ${size === "lg" ? "px-6 py-4 text-body-sm" : "px-5 py-3 text-body-xs"}
      `}
    >
      {label}

      {icon && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M14.1668 5.83301L5.8335 14.1663"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.6665 5.83301H14.1665V13.333"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </Link>
  );
};

export default Button;
