import React from "react";

interface SearchInputProps {
  placeholder: string;
  value?: string;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onClick,
  onChange,
  className,
  value,
}) => {
  return (
    <div className=" reletive">
      <input
        type="text"
        className={`border-2 outline-none border-none ${className}`}
        placeholder={placeholder}
        value={value}
        aria-label="Search input"
        onClick={onClick}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
