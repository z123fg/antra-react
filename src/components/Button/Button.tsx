import React, {
  FC,
  FunctionComponent,
  MouseEvent,
  ReactNode,
  useState,
  useEffect,
} from "react";

type ButtonVariants = "contained" | "outlined" | "text";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariants;

  color?: "primary" | "secondary" | "default";

  size?: "small" | "medium" | "large";

  isLoading?: boolean;
}

interface CursorPos {
  x: number;
  y: number;
}
let counter = 0;
const Button: FC<ButtonProps> = ({
  color = "primary",
  variant = "contained",
  children,
  size = "medium",
  isLoading = false,
  disabled = false,
  onClick,
  className,
  ...rest
}) => {
  const [cursorPos, setCursorPos] = useState<CursorPos | null>(null);
  const [ripples, setRipples] = useState<ReactNode[]>([]);
  useEffect(() => {
    //create a ripple
    if (cursorPos === null) return;
    const newRipple = (
      <div
        key={counter++}
        className={`btn-ripple-${color}-${variant}`}
        style={{
          position: "absolute",
          top: cursorPos.y,
          left: cursorPos.x,
          transform: "translate(-50%, -50%)",
        }}
        onAnimationEnd={() => {
          setRipples((prev) => {
            let nextRipples = [...prev];
            nextRipples.shift();
            return nextRipples;
          });
        }}
      ></div>
    );
    setRipples((prev) => [...prev, newRipple]);
  }, [cursorPos]);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { offsetX, offsetY } = e.nativeEvent;
    setCursorPos({ x: offsetX, y: offsetY });
    onClick?.(e);
  };

  const constructClassName: () => string = () => {
    const colorVariantCls = `btn-${color}-${variant}`;
    const sizeCls = `btn-${size}`;
    return ["btn", colorVariantCls, sizeCls].join(" ");
  };

  return (
    <button
      disabled={disabled || isLoading}
      className={constructClassName() + (className ? " " + className : "")}
      onClick={handleClick}
      {...rest}
    >
      {children}
      {isLoading && (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}

      <span>{ripples}</span>
    </button>
  );
};

export default Button;
