import React, {
  FC,
  FunctionComponent,
  MouseEvent,
  ReactNode,
  useState,
  useEffect,
} from "react";
import "./_Rating.scss";

/*
typescript compiler:
  type checking
  compiling

*/

interface RatingProps {
  /**
   * The default value. Use when the component is not controlled.
   **/
  defaultValue?: number;
  /**
   * If true, the component is disabled.
   **/
  disabled?: boolean;
  /**
   * Maximum rating.
   **/
  max?: number;
  /**
   * If true, the component is disabled.
   **/
  onChange?: (event: React.SyntheticEvent, value: number) => void;
  /**
   * Callback fired when the value changes.
   **/
  onChangeActive?: (event: React.SyntheticEvent, value: number) => void;
  /**
   * Callback function that is fired when the hover state changes.
   **/
  readOnly?: boolean;
  /**
   * The size of the component.
   **/
  size?: "small" | "medium" | "large";
  /**
   * The rating value.
   **/
  value?: number;
}

const Rating: FC<RatingProps> = ({
  defaultValue = null,
  disabled = false,
  max = 5,
  onChange,
  onChangeActive,
  readOnly = false,
  size = "medium",
  value,
}) => {
  const [rating, setRating] = useState(value ?? defaultValue);
  const [hoveredRating, setHoverdRating] = useState(defaultValue);

  const isHighlighted = (val: number) => {
    return (rating && val <= rating) || (hoveredRating && val <= hoveredRating);
  };

  const handleClick = (val: number, event: React.MouseEvent) => {
    if (disabled || readOnly) return;
    setRating(val);
    onChange?.(event, val);
  };
  const handleMouseEnter = (val: number, event: React.MouseEvent) => {
    if (disabled || readOnly) return;
    setHoverdRating(val);
    onChangeActive?.(event, val);
  };
  const handleMouseLeave = () => {
    setHoverdRating(rating);
  };

  const icons = [];
  for (let i = 1; i <= max; i++) {
    icons.push(
      <i
        key={`rating-icon-${i}`}
        className={`fa-star ${
          isHighlighted(i)
            ? "fa-solid rating-highlighted"
            : "fa-regular rating-default"
        } rating-${size} ${disabled && "rating-disabled"}`}
        onClick={(e) => handleClick(i, e)}
        onMouseEnter={(e) => handleMouseEnter(i, e)}
        onMouseLeave={() => handleMouseLeave()}
      ></i>
    );
  }

  return <div className="rating">{icons.map((icon) => icon)}</div>;
};

export default Rating;
