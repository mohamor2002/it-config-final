import { useController } from "react-hook-form";

const TextInput = ({ control, name, label, placeholder, type, readOnly = false }) => {
  const { field, fieldState } = useController({ control, name });
  return (
    <div className=" w-full md:w-auto flex flex-col md:flex-row items-start gap-2 md:gap-0 md:items-center">
      <div className=" w-full md:w-[300px]">
        <label
          htmlFor={name}
          className="text-base md:text-xl  font-roboto text-itconfig-blue-dark font-medium text-wide"
        >
          {label}
        </label>
      </div>
      <div className=" w-full md:w-auto flex flex-col ">
        <input
          {...field}
          placeholder={placeholder}
          type={type}
          className="outline-none text-base md:text-xl text-itconfig-blu font-medium w-full md:min-w-[600px]  px-4 py-4  border-2 rounded-md border-itconfig-mauve placeholder:text-slate-500"
          readOnly={readOnly}
        />
        {fieldState.error && (
          <p className=" text-base font-medium text-red-600">{fieldState.error.message}</p>
        )}
      </div>
    </div>
  );
};

export default TextInput;
