import { useForm } from "react-hook-form";
const AddTask = ({ addTask }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let handleForm = (data) => {
    data = { ...data, completed: false};
    addTask(data);
    reset();
  };
  return (
    <div className="px-10 py-2">
      <form
        onSubmit={handleSubmit(handleForm)}
        className="rounded-xl flex flex-col gap-5 border p-5"
      >
        <h1 className="text-3xl font-bold"> Add New Task</h1>
        <input
          {...register("taskName", { required: "TaskName is required" })}
          className="bg-zinc-100 text-xl px-4 py-2 rounded-xl w-full"
          type="text"
          placeholder="Task title"
        />
        {errors.taskName && (
          <p className="text-red-500">{errors.taskName.message}</p>
        )}
        <textarea
          {...register("taskDescription", {
            required: "Task Description is Required",
            minLength: {
              value: 10,
              message: "At least 10 character",
            },
          })}
          className="bg-zinc-100 text-xl px-4 py-2 rounded-xl w-full"
          type="text"
          placeholder="Task Description"
        ></textarea>
        {errors.taskDescription && (
          <p className="text-red-500">{errors.taskDescription.message}</p>
        )}
        <select
          {...register("priority")}
          className="bg-zinc-100 text-xl px-4 py-2 rounded-xl w-full"
        >
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
          <option value="Low">Low Priority</option>
        </select>
        <button className="w-fit bg-[#00B158] rounded-xl text-xl font-bold px-7 text-white  py-2">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
