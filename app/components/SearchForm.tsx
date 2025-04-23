import React from "react";

const SearchForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert("Form submitted!");
    // Handle form submission logic here
    console.log("Form submitted!");
  };
  return (
    <div className="w-full md:w-1/2 flex items-center">
      <form
        className="w-full bg-white bg-opacity-90 p-4 rounded shadow-md flex flex-col sm:flex-row gap-4"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Eg: AI Engineer"
          className="flex-1 p-3 rounded focus:outline-none"
        />

        <button
          type="submit"
          className="hidden md:block p-3 bg-blue-500 text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
