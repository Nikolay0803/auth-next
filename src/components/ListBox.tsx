import React, { FC, Fragment, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";

interface Option {
  key: string;
  label: string;
}

interface ListBoxProps {
  label: string; 
  placeholder?: string;
  options: Option[];
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const ListBox: FC<ListBoxProps> = ({
  label,
  placeholder,
  options,
  className,
  value,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find((option) => option.key === value) || null
  );

  return (
    <div>
      <p className="mb-2 font-medium text-sm text-[#8A8A89] dark:text-[#B0B0B0]">
        {label}
      </p>
      <div
        className={`relative bg-white dark:bg-[#313131] rounded-3xl text-lg font-medium" ${className}`}
      >
        <Listbox
          value={selectedOption}
          onChange={(selected: Option) => {
            setSelectedOption(selected);
            onChange?.(selected.key);
          }}
        >
          {({ open }) => (
            <>
              <ListboxButton className="relative w-full rounded-3xl bg-selected-dark dark:bg-selected-dark-dark pl-[18px] pr-2 py-[14px] text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-main-white flex items-center dark:text-white">
                {selectedOption ? (
                  <span>{selectedOption.label}</span>
                ) : (
                  <span className="text-[#8A8A89] dark:text-[#B0B0B0]">
                    {placeholder}
                  </span>
                )}
                <span
                  className={`absolute right-2 flex items-center ${
                    open ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#121417] dark:text-[#E0E0E0]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </ListboxButton>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-in duration-150"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition ease-out duration-150"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <ListboxOptions className="absolute mt-1 w-full py-1 bg-white dark:bg-[#313131]  border border-gray-300 dark:border-gray-700 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 dark:ring-gray-600 z-40">
                  {options.map((option) => (
                    <ListboxOption key={option.key} value={option}>
                      {({ active, selected }) => (
                        <li
                          className={`cursor-pointer px-4 py-2 ${
                            active
                              ? "bg-gray-100 text-[#121417] dark:bg-gray-700 dark:text-white"
                              : "text-[#8A8A89] dark:text-[#B0B0B0]"
                          } ${selected ? "font-semibold" : ""}`}
                          style={{ listStyleType: "none" }}
                        >
                          {option.label}
                        </li>
                      )}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
};

export default ListBox;
