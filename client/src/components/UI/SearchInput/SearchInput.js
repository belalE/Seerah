import React, { useState } from "react";
// TODO: update the form so that clicking away hides options

function SearchInput(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionClick = (option) => {
    props.onChangeHandler(option);
    setSearchTerm(option.name);
    setShowOptions(false);
  };

  const filteredOptions = props.options.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputClick = () => {
    setShowOptions(true);
  };

  return (
    <div className="relative mb-3">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.label}
      >
        {props.label}
      </label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        onClick={handleInputClick}
        className="block w-full py-2 pl-3 pr-10 text-sm leading-5 text-gray-700 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Search"
      />
      {showOptions && (
        <ul className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          {filteredOptions.map((option) => (
            <li
              key={option.id}
              onClick={() => handleOptionClick(option)}
              className="px-3 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
