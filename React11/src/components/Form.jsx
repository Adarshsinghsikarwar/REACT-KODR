import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
const Form = ({ notes, setNotes, setToggle }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    const updatedNotes = [...notes, { ...data, id: nanoid() }];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    reset();
    setToggle(false);
  };

  return (
    <div className="w-[40%] h-[40vh] bg-blue-100 p-5 rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4 text-center">Form Information</h1>
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <input
          {...register("title", { required: "Title is required" })}
          className="px-3 py-2 rounded-md outline-none border border-gray-300 focus:border-blue-500"
          type="text"
          placeholder="Title"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
        <input
          {...register("description", { required: "Description is required" })}
          className="px-3 py-2 rounded-md outline-none border border-gray-300 focus:border-blue-500"
          type="text"
          placeholder="Description"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
        <input
          type="submit"
          className="px-3 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600 transition-colors"
        />
      </form>
    </div>
  );
};

export default Form;
