import React, { FC, useState, useEffect } from "react";
import Button from "../Button/Button";
import './Select.scss';


export interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    options: Option[];
    color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'grey' | 'text' | 'common';
    onChange?: (value: string[]) => void;
    open?: boolean;
    multiSelect?: boolean;
  }

const CustomSelect: React.FC<SelectProps> = ({ options, color = 'primary', onChange, open, multiSelect }) => {
    const [isOpen, setIsOpen] = useState(open ?? false);
    const [selectedOption, setSelectedOption] = useState<Option[]>([]);
    
    const handleOptionClick = (option: Option) => {
        let newOptions: Option[];
        setSelectedOption(prevOptions => {
            if (multiSelect) {
                newOptions = prevOptions.find(opt => opt.value === option.value)
                ? prevOptions.filter(opt => opt.value !== option.value)
                : [...prevOptions, option];

            } else {
                newOptions = [option];
            }

            onChange && onChange(newOptions.map(opt => opt.value));
            return newOptions;
        });
        //setIsOpen(false);
    }

    useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            const target = event.target as Node;
            const dropdownElement = document.querySelector('.select-container');
            if (dropdownElement && !dropdownElement.contains(target)) {
                setIsOpen(false);
            }
        };
    
        document.addEventListener('click', handleDocumentClick);
    
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);
    

    return (
        <div className={`select-container ${color}`}>
            <button className="select-button" onClick={() => setIsOpen(!isOpen)}>
                {selectedOption.length > 0 ? selectedOption.map(option => option.label).join(", ") : "select..."}
            </button>
            {isOpen && (
                <ul className="selected-options">
                {options.map((option, index) => (
                    <li key={index} onClick={() => handleOptionClick(option)}>
                        <input type="checkbox" checked={!!selectedOption.find(opt => opt.value === option.value)} readOnly />
                        {option.label}
                    </li>
                ))}
                </ul>
            )}
        </div>
    )
}

export default CustomSelect;