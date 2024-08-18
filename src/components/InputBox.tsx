import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  error?: string; // Може бути `string | undefined`
  placeholder?: string;
}

const InputBox = ({ labelText, error, placeholder, ...props }: Props) => {
  return (
    <div className={props.className}>
      {labelText && (
        <label className="block text-slate-600 mb-2 text-xs lg:text-sm xl:text-base">
          {labelText}
        </label>
      )}
      <input
        placeholder={placeholder}
        className={`border rounded-xl disabled:border-slate-100 w-full block outline-none py-4 px-[18px] transition-all text-xs lg:text-sm xl:text-base bg-slate-50 focus:shadow focus:shadow-blue-500
              ${error ? "border-red-500 animate-shake" : "border-slate-400"}`}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputBox;
