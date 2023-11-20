import React, { useState } from "react";
import Button from "../Button/Button";

const SearchMultipleInput = ({ options, label, onChangeHandler }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setShowOptions(true);
  };

  const handleOptionClick = (option) => {
    if (!selectedValues.includes(option.name)) {
      setSelectedValues([...selectedValues, option.name]);
      onChangeHandler([...selectedValues, option.name]);
    }
    setShowOptions(false);
  };

  const handleRemoveClick = (option) => {
    setSelectedValues(selectedValues.filter((value) => value !== option.name));
    onChangeHandler(selectedValues.filter((value) => value !== option.name));
  };

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative mb-3">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="block w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        id={label}
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      {showOptions && (
        <ul className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          {filteredOptions.map((option) => (
            <li
              key={option.name}
              onClick={() => handleOptionClick(option)}
              className="px-3 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-2">
        {selectedValues.map((value) => (
          <div
            key={value}
            className="flex items-center bg-blue-200 rounded mt-2 p-2"
          >
            <p className="mr-2">{value}</p>
            <Button
              styleChoice="tertiary"
              clicked={() => handleRemoveClick({ name: value })}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMultipleInput;
