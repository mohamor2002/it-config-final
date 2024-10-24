import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "./TextInput";
import { MdModeEdit } from "react-icons/md";
import axios from 'axios'
import { useEffect } from "react";
const schema = yup.object({
  name: yup.string().required(),
  bandwith: yup.number().required(),
  ipAddress: yup
    .string()
    .required("IP Address is required")
    .matches(
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
      "Invalid IP address"
    ),
  port: yup
    .number()
    .required("Port is required")
    .min(1, "Port must be at least 1")
    .max(65535, "Port cannot be greater than 65535"),
});

const Form = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitSuccessful, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      bandwith: "",
      ipAdress: "",
      port: "",
    },
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/server"); // Adjust the URL based on your API
        const { name, total_bandwidth,ip,port } = response.data;

        // Update the form values with fetched data
        reset({
          name: name,
          bandwith: total_bandwidth,
          ipAdress:ip,
          port: port,
        });
      } catch (error) {
        console.error("Error fetching server data:", error);
      }
    };

    fetchServerData();
  }, [reset]); 

  const onSubmit = async (data) => {
    try {
      // Send PUT request to update the server data
      await axios.put("http://localhost:3000/server", {
        name: data.name,
        total_bandwidth: data.bandwith,
      });
      alert("Server data updated successfully!");
    } catch (error) {
      console.error("Error updating server data:", error);
      alert("Failed to update server data.");
    }
  };
  return (
    <div className=" space-y-2 md:space-y-4">
      <div className=" px-4 md:px-10 py-4 md:py-8 bg-itconfig-BGCard border-itconfig-blue-dark/10 border-[2px] rounded-lg space-y-4 md:space-y-8 ">
        <h2 className=" text-itconfig-blue-dark text-xl md:text-3xl font-bold italic font-roboto tracking-wide ">
          Server Info
        </h2>
        <form action=" " className=" space-y-4">
          <TextInput
            control={control}
            name="name"
            placeholder={"Enter the server name"}
            label={"Server Name: "}
            type={"text"}
           
          />
          <TextInput
            control={control}
            name="bandwith"
            placeholder={"Enter the maximum bandwith"}
            label={"Server Max Bandwidth: "}
            type={"text"}
          />
          <TextInput
            control={control}
            name="ipAdress"
            placeholder={"Enter the IP address"}
            label={"IP Adress: "}
            type={"text"}
            readOnly={true}
          />
          <TextInput
            control={control}
            name="port"
            placeholder={"Enter the Port"}
            label={"Port: "}
            type={"text"}
            readOnly={true}
          />
        </form>
      </div>
      <div className="w-full flex flex-row justify-end">
        <button onClick={handleSubmit(onSubmit)} className=" flex flex-row justify-center items-center gap-2 text-itconfig-BGCard font-bold px-4 py-2 rounded-md  bg-itconfig-mauve hover:bg-itconfig-mauve/90 font-roboto text-base md:text-lg">
          <MdModeEdit size={30} color="#f5f5f5" />
          <p>Apply changes</p>
        </button>
      </div>
    </div>
  );
};

export default Form;
