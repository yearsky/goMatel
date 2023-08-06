import { TextInput } from "react-native";
import useAddHook from "../../hook/Nopol/useAddHook";

const InputComponent = ({ name, value, handleInputChange }) => {
  return (
    <TextInput
      className="bg-gray-100 border-gray-500 border rounded-md p-3 text-black"
      value={value}
      name={name}
      placeholder="nama leasing"
      onChangeText={(value) => handleInputChange(name, value)}
    ></TextInput>
  );
};

export default InputComponent;
