import { cn } from "../../lib/utils";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isClicked?: number | null;
  value: number | string;
  isDisable ?: boolean;
};

   
const Button = ({ className, handleClick, isClicked, value,isDisable,type }: ButtonProps) => {
  return (
    <button
      value={value}
      onClick={handleClick}
      type={type}
      disabled={isDisable}
      className={cn(
        `cursor-pointer hover:bg-white transition-all ease-in-out duration-200 `,
        className,
        isClicked === value && "bg-Orange text-VeryDarkBlue",
        isDisable && "bg-slate-600 text-lightGray cursor-not-allowed"
      )}
    >
      {value}
    </button>
  );
};

export default Button;
