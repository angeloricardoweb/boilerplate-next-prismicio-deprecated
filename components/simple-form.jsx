import React from "react";

const SimpleForm = () => {
  return (
    <form class=" relative ">
      <label for="name-with-label" class="text-gray-700">
        Email
      </label>
      <input
        type="text"
        id="name-with-label"
        class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        name="email"
        placeholder="Your name"
      />

      <button
        type="button"
        class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        Enviar
      </button>
    </form>
  );
};

export default SimpleForm;
