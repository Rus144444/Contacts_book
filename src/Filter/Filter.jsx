import React from "react";

const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={onFilterChange}
      placeholder="Введите имя для поиска"
    />
  );
};

export { Filter };
