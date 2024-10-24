import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "./TextInput";
import { MdModeEdit } from "react-icons/md";

const schema = yup.object({
  name: yup.string().required(),
});
const AccountInfo = () => {
    const {
        control,
        handleSubmit,
        formState: { isValid, isSubmitSuccessful, isSubmitting },
      } = useForm({
        defaultValues: {
          name: "",
        },
        resolver: yupResolver(schema),
        mode: "onBlur",
      });
  return (
    <div className=" space-y-2 md:space-y-4">
      <div className="  px-4 md:px-10 py-4 md:py-8 bg-itconfig-BGCard border-itconfig-blue-dark/10 border-[2px] rounded-lg space-y-8 ">
        <h2 className=" text-itconfig-blue-dark text-xl md:text-3xl font-bold italic font-roboto tracking-wide ">
          Account Info
        </h2>
        <form action="" className=" space-y-4">
          <TextInput
            control={control}
            name="name"
            placeholder={"Enter the username"}
            label={"Username :"}
            type={"text"}
          />
        </form>
      </div>
      <div className="w-full flex flex-row justify-end">
        <button className=" flex flex-row justify-center items-center gap-2 text-itconfig-BGCard font-bold px-4 py-2 rounded-md  bg-itconfig-mauve hover:bg-itconfig-mauve/90 font-roboto text-base md:text-lg">
          <MdModeEdit size={30} color="#f5f5f5" />
          <p>Apply changes</p>
        </button>
      </div>
    </div>
  );
};

export default AccountInfo;
