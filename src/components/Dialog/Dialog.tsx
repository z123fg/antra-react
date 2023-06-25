import React, { FC, ReactNode, useEffect, useState } from "react";

export interface DialogProps {
  /**
   * 	If true, the component is shown.
   **/
  open: boolean;
  /**
   * 	Callback fired when the component requests to be closed.
   **/
  onClose: () => void;
  /**
   * Dialog children, usually the included sub-components.
   **/
  children?: ReactNode;
  /**
   * Title of the dialog
   **/
  title?: string;
  /**
   * Actions of the dialog
   **/
  actions?: {
    label: string;
    onClick: () => void;
  }[];
}

const Dialog: FC<DialogProps> = ({
  open,
  onClose = () => {},
  children,
  title = "",
  actions = [],
}) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const handelClose = () => {
    onClose();
  };

  if (!open) {
    return null;
  }

  return (
    <>
      <div className={`dialog`}>
        <div className="dialog-overlay" onClick={handelClose}></div>
        <div className="dialog-body">
          <div className="dialog-header">
            <h2>{title}</h2>
            <button className="dialog-close-button" onClick={handelClose}>
              &times;
            </button>
          </div>
          <div className="dialog-content">
            <p>{children}</p>
          </div>
          <div className="dialog-actions">
            {actions.map((action, index) => (
              <button
                key={index}
                className={`dialog-action-button`}
                onClick={action.onClick}
              >
                {action.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dialog;
