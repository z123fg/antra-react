import React, { FC, FunctionComponent, MouseEvent, ReactNode, useState, useEffect } from "react";



/* interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  color?:"primary"|"secondary" | "default";
  size?:"small" | "medium" | "large";
  isLoading?:boolean;
} */

export interface DrawerProps extends React.ComponentPropsWithoutRef<"div"> {
    /**
     * Direction where drawer opens
     **/
    anchor?: "left" | "right" | "top" | "bottom";
    /**
     * Used to decide the color of the appearance
     **/
    variant?: "permanent" | "persistent" | "temporary";
    /**
    * Used to decide the color of the appearance
    **/
    open?: boolean;
    width?: number;
    onClose?: Function;
}

const Drawer: FC<DrawerProps> = ({
    anchor = "left",
    variant = "temporary",
    open = true,
    width = 240,
    children,
    onClose,
    className = "myDrawer",
    ...rest
}) => {
    const constructClassName: () => string = () => {
        const anchorVariantCls = `dwr-${anchor}-${variant}`;
        return ["dwr", anchorVariantCls].join(" ");
    };


    const handleClose = (e: MouseEvent<HTMLDivElement>) => {
        onClose?.();
    }

    return (
        <div
            className={className ? " " + className : ""}
            style={open ? {} : { visibility: "hidden" }}
        >
            {(() => {
                console.log(variant)
                if(variant === "temporary") {
                    return <div
                    className="dwrBackground"
                    onClick={handleClose}
                ></div>
                }
            })()}
            <div
                style={width ? { width: `${width}px` } : {}}
                className={constructClassName()}
                {...rest}
            >
                {children}
            </div>
        </div>
    );
}

export default Drawer;