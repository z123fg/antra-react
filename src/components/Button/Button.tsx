import React, { FC, FunctionComponent, MouseEvent, ReactNode, useState, useEffect } from "react";
/* 
typescript compiler:
  type checking
  compiling

*/
type ButtonVariants = "contained" | "outlined" | "text";

/* interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  color?:"primary"|"secondary" | "default";
  size?:"small" | "medium" | "large";
  isLoading?:boolean;
} */

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    /**
     * Used to decide the variant of the appearance
     **/
    variant?: ButtonVariants;
    /**
     * Used to decide the color of the appearance
     **/
    color?: "primary" | "secondary" | "default";
    /**
     * Used to decide the size of the button
     **/
    size?: "small" | "medium" | "large";
    /**
     * Used to indicate the button is loading
     **/
    isLoading?: boolean;
}

//type extendedButtonProps = ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>

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
            disabled={disabled}
            className={constructClassName() + (className ? " " + className : "")}
            onClick={handleClick}
            {...rest}
        >
            {children}
            <span>{ripples}</span>
        </button>
    );
};

export default Button;
