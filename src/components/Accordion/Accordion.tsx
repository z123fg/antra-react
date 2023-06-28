import React, { useState, FC, ReactNode } from 'react';
import './_Accordion.scss';

interface AccordianProps {
    summary: ReactNode;
    details: ReactNode[];
    expandIcon: ReactNode;
    expanded?: boolean;
    onChange?: (expanded: boolean) => void;
}

const Accordion: FC<AccordianProps> = ({
    summary,
    details,
    expandIcon,
    expanded = false,
    onChange,
}) => {
    const [isExpanded, setIsExpanded] = useState(expanded);

    const handleToggle = () => {
        const nexExpanded = !isExpanded;
        setIsExpanded(nexExpanded);
        onChange && onChange(nexExpanded);
    };

    return (
        <div className={`accordion ${isExpanded ? 'expanded' : ''}`}>
            <div className="accordion-summary" onClick={handleToggle}>
                {summary}
                <div className="accordion-summary-expand-icon">
                    {expandIcon}
                </div>
            </div>
            {isExpanded && details.map((detail, index) => (
                <div className="accordion-details" key={index}>
                    {detail}
                </div>
            ))}
        </div>
    );
};

export default Accordion;
