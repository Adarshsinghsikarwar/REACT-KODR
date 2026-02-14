import { useForm } from "react-hook-form";
const AddTask = ({ addTask }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let handleForm = (data) => {
    data = { ...data, completed: false };
    addTask(data);
    reset();
  };
  return (
    <div className="py-6">
      <form
        onSubmit={handleSubmit(handleForm)}
        className="rounded-2xl flex flex-col gap-6 bg-white dark:bg-zinc-800 p-8 shadow-sm border border-slate-100 dark:border-zinc-700 hover:shadow-md transition-shadow"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-indigo-500 rounded-full"></div>
          <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">
            Add New Task
          </h1>
        </div>

        <div className="space-y-4">
          <div>
            <input
              {...register("taskName", { required: "TaskName is required" })}
              className="w-full bg-slate-50 dark:bg-zinc-900/50 text-slate-800 dark:text-slate-100 text-lg px-5 py-3 rounded-xl outline-none border border-slate-200 dark:border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 transition-all placeholder:text-slate-400"
              type="text"
              placeholder="What needs to be done?"
            />
            {errors.taskName && (
              <p className="text-red-500 text-sm mt-1 font-medium ml-1">
                {errors.taskName.message}
              </p>
            )}
          </div>

          <div>
            <textarea
              {...register("taskDescription", {
                required: "Task Description is Required",
                minLength: {
                  value: 10,
                  message: "At least 10 character",
                },
              })}
              className="w-full bg-slate-50 dark:bg-zinc-900/50 text-slate-800 dark:text-slate-100 text-lg px-5 py-3 rounded-xl outline-none border border-slate-200 dark:border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 transition-all placeholder:text-slate-400 min-h-[120px] resize-none"
              placeholder="Add some details..."
            ></textarea>
            {errors.taskDescription && (
              <p className="text-red-500 text-sm mt-1 font-medium ml-1">
                {errors.taskDescription.message}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative w-full sm:w-1/3">
              <select
                {...register("priority")}
                className="w-full bg-slate-50 dark:bg-zinc-900/50 text-slate-800 dark:text-slate-100 text-lg px-5 py-3 rounded-xl outline-none border border-slate-200 dark:border-zinc-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-900 transition-all appearance-none cursor-pointer"
              >
                <option value="Medium">Medium Priority</option>
                <option value="High">High Priority</option>
                <option value="Low">Low Priority</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-500">
                ▼
              </div>
            </div>

            <button className="w-full sm:w-2/3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-xl text-lg font-bold px-8 text-white py-3 shadow-lg shadow-indigo-200 dark:shadow-none transform active:scale-95 transition-all flex items-center justify-center gap-2">
              <span>Add Task</span>
              <span className="text-xl">+</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
