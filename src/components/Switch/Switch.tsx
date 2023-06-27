import React, { MouseEvent, useEffect, useState } from "react";

interface CallBack {
	(...args: Array<any>): void;
}

export interface SwitchProps extends React.ComponentPropsWithoutRef<"switch"> {
	checked?: boolean;
	checkedIcon?: React.ReactNode;
	color?: "primary" | "secondary" | "default";
	// | "warning"
	// | "error"
	// | "info"
	// | "success"
	// | "string";
	size?: "small" | "medium" | string;
	defaultChecked?: boolean;
	disabled?: boolean;
	required?: boolean;
	edge?: "end" | "start" | false;
	icon?: React.ReactNode;
	id?: string;
	className?: string;
	labelContext?: string | boolean;
	callbackFns?: CallBack[];
}

const Switch: React.FC<SwitchProps> = ({
	checked = false,
	color = "primary",
	disabled = false,
	onChange,
	defaultChecked = false,
	size = "medium",
	required = false,
	className = "",
	labelContext = false,
	callbackFns = [],
	...rest
}) => {
	const [checkStatus, setCheckStatus] = useState(defaultChecked);
	const [bgColor, setbgColor] = useState<string | undefined>(undefined);

	const constructClassName: (tagName: string) => string = (tagName: string) => {
		let colorCls = `${tagName}`;
		colorCls += checkStatus ? `-${color}` : "-unchecked";
		console.log(colorCls);
		const sizeCls = `${tagName}-${size}`;
		return [tagName, colorCls, sizeCls].join(" ");
	};

	const handleClick = () => {
		setCheckStatus((prev) => !prev);

		callbackFns.forEach((cb) => {
			return cb();
		});
	};

	return (
		<div
			className={
				constructClassName("switch") + (className ? " " + className : "")
			}
			onClick={handleClick}
		>
			<input
				type="checkbox"
				className={
					constructClassName("checkbox") + (className ? " " + className : "")
				}
				checked={checkStatus}
				disabled={disabled}
				defaultChecked={defaultChecked}
			/>

			<span
				className={
					constructClassName("span") + (className ? " " + className : "")
				}
				style={{
					backgroundColor: bgColor,
				}}
			>
				<span
					className={
						constructClassName("span-inner") +
						(className ? " " + className : "")
					}
				></span>
			</span>
		</div>
	);
};

export default Switch;
