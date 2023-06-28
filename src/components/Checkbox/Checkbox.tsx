/*
Follow the UIUX of the MUI checkbox component(React Checkbox component - Material UI )

Find the UI design rederence on Figma Material UI Kit 1.0.2 (Copy) 

Developers should be able to choose the size of the component among some predefined size options from props.

Developers should be able to choose the color of the component among some predefined color options from props.

Developers should be able to decide the icons used to represent the checked/unchecked state of the component by passing the icon from props.

Developers can decide the label of the component by passing props.

developers can control the checked/unchecked state of the component from outside of the component by passing a prop.

Developers can listen to the change of the checked/unchecked event from outside of the component by passing the onChange callback function as a prop.
 */

import React, { FC, FunctionComponent, MouseEvent, ReactNode, useState, useEffect } from "react";

interface CheckboxProps extends Omit<React.ComponentPropsWithoutRef<'input'>, 'size'> {
    /**
     * Used to decide the size of the checkbox
     **/
    size?: "small" | "medium";
  
    /**
     * Used to decide the color of the checkbox
     **/
    color?: "primary" | "secondary" | "default";
  
    /**
     * Icon to show when the checkbox is checked
     **/
    checkedIcon?: React.ReactNode;
  
    /**
     * Icon to show when the checkbox is unchecked
     **/
    uncheckedIcon?: React.ReactNode;
  
    /**
     * Label for the checkbox
     **/
    label?: string;
  }
  
  const Checkbox: FC<CheckboxProps> = ({
    size = "medium",
    color = "default",
    checkedIcon,
    uncheckedIcon,
    label,
    ...props
  }) => {
  
    return (
      // <label className={`checkbox checkbox-${color} checkbox-${size}`}>
      //   <input type="checkbox" {...props} />
      //   {props.checked ? checkedIcon : uncheckedIcon}
      //   {label && <span>{label}</span>}
      // </label>
      <div className="checkbox-label-container">
        <div className={`checkbox-container-${size}`}>
      <input type="checkbox" className={`checkbox checkbox-${color} checkbox-${size}`} id="myCheckbox"/>
      <span className={`checkmark checkmark-${color} checkmark-${size}`}></span>
      </div>
      <label htmlFor="myCheckbox" className="checkbox-label">{label}</label>
      </div>
      // <label className="container">{label}
      //   <input type="checkbox"/>
      //   <span className={`checkmark checkmark-${color} checkmark-${size}`}></span>
      // </label>
    );
  };
  
  export default Checkbox;