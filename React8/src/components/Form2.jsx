import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const Form2 = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const [users, setUsers] = useState([]);

  // Safe localStorage load
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const values = watch();

  const onSubmit = (data) => {
    const updatedUsers = [...users, data];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    reset();
  };

  // Safe skills display
  const formatSkills = (skills) => {
    if (!skills) return "";
    if (Array.isArray(skills)) return skills.join(", ");
    return skills; // if single string
  };

  return (
    <div className="bg-zinc-100 min-h-screen p-10 font-sans">
      {/* FORM + PREVIEW */}
      <h1 className="text-4xl font-black text-center mb-12 tracking-tighter text-zinc-900">
        User Registration
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start max-w-7xl mx-auto">
        {/* FORM */}
        <form
          className="w-full lg:w-1/2 bg-white shadow-xl rounded-2xl p-8 flex flex-col gap-5 border border-zinc-200"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-2">
            <h2 className="text-xl font-bold tracking-tight text-zinc-900">
              Add New User
            </h2>
            <p className="text-sm text-zinc-500 font-medium">
              Fill in the details below.
            </p>
          </div>

          <div className="space-y-1">
            <input
              {...register("name", { required: true })}
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white"
            />
            {errors.name && (
              <p className="text-red-500 text-xs font-bold pl-1">
                Name is required
              </p>
            )}
          </div>

          <div className="space-y-1">
            <input
              {...register("email", { required: true })}
              placeholder="Email Address"
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white"
            />
            {errors.email && (
              <p className="text-red-500 text-xs font-bold pl-1">
                Email is required
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <input
                {...register("age", { required: true })}
                placeholder="Age"
                type="number"
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white"
              />
              {errors.age && (
                <p className="text-red-500 text-xs font-bold pl-1">Required</p>
              )}
            </div>

            <select
              {...register("gender")}
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 text-sm font-semibold text-zinc-600 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="py-2">
            <h3 className="font-bold text-sm mb-3 text-zinc-800">
              Select Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {["React", "Node", "Mongo", "Express", "Next.js"].map((skill) => (
                <label
                  key={skill}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-200 bg-zinc-50 cursor-pointer hover:bg-zinc-100 hover:border-zinc-300"
                >
                  <input
                    type="checkbox"
                    {...register("skills")}
                    value={skill}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-semibold text-zinc-600 select-none">
                    {skill}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <input
              {...register("experience", { required: true })}
              placeholder="Years of Experience"
              type="number"
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white"
            />
            {errors.experience && (
              <p className="text-red-500 text-xs font-bold pl-1">
                Experience is required
              </p>
            )}
          </div>

          {watch("experience") > 2 && (
            <textarea
              {...register("majorProduct")}
              placeholder="Describe your major product..."
              rows="3"
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white resize-none"
            />
          )}

          <input
            {...register("file")}
            placeholder="Profile Image URL"
            className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white"
          />

          <div className="space-y-1">
            <input
              {...register("bio", { required: true })}
              placeholder="Short Bio"
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 bg-zinc-50 text-sm font-semibold text-zinc-900 placeholder:text-zinc-400 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white"
            />
            {errors.bio && (
              <p className="text-red-500 text-xs font-bold pl-1">
                Bio is required
              </p>
            )}
          </div>

          <button className="mt-4 w-full bg-zinc-900 text-white py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-zinc-800 active:bg-zinc-950">
            Create User Profile
          </button>
        </form>

        {/* LIVE PREVIEW */}
        <div className="w-full lg:w-1/2 sticky top-6">
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-zinc-200 relative overflow-hidden">
            {/* Decorative Background Blob */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full translate-x-10 -translate-y-10"></div>

            <h2 className="text-xl font-bold mb-6 tracking-tight text-zinc-900 relative z-10">
              Live Preview
            </h2>

            <div className="flex items-start gap-6 relative z-10">
              {values.file ? (
                <img
                  src={values.file}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-xl border-2 border-zinc-100 shadow-sm"
                />
              ) : (
                <div className="w-24 h-24 rounded-xl bg-zinc-100 border-2 border-zinc-200 flex items-center justify-center text-zinc-400 text-xs font-bold">
                  No Image
                </div>
              )}

              <div className="flex-1 space-y-1">
                <h3 className="text-2xl font-black text-zinc-900 break-words leading-tight">
                  {values.name || "User Name"}
                </h3>
                <p className="text-zinc-500 text-sm font-medium">
                  {values.email || "user@example.com"}
                </p>
                <div className="flex gap-2 mt-2">
                  {values.gender && (
                    <span className="px-2 py-1 bg-zinc-100 rounded text-xs font-bold text-zinc-600">
                      {values.gender}
                    </span>
                  )}
                  {values.age && (
                    <span className="px-2 py-1 bg-zinc-100 rounded text-xs font-bold text-zinc-600">
                      {values.age} Years
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4 relative z-10">
              <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">
                  Biography
                </p>
                <p className="text-sm font-medium text-zinc-700 leading-relaxed">
                  {values.bio || "No biography provided yet."}
                </p>
              </div>

              <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {values.skills && values.skills.length > 0 ? (
                    values.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-1 bg-white border border-zinc-200 rounded text-xs font-bold text-zinc-700 shadow-sm"
                      >
                        {s}
                      </span>
                    ))
                  ) : (
                    <span className="text-sm text-zinc-400 italic">
                      No skills selected
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 flex justify-between items-center">
                <div>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Experience
                  </p>
                  <p className="text-sm font-bold text-zinc-900">
                    {values.experience || 0} Years
                  </p>
                </div>
                {values.majorProduct && (
                  <div className="text-right">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Major Product
                    </p>
                    <p className="text-sm font-bold text-blue-600">
                      {values.majorProduct}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* USER CARDS */}
      <div className="mt-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black tracking-tight text-zinc-900">
            Registered Users
          </h2>
          <span className="px-3 py-1 bg-zinc-200 rounded-full text-xs font-bold text-zinc-600">
            {users.length} Total
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {users.map((user, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-sm border border-zinc-200 p-5 hover:border-zinc-300 hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-4">
                {user.file ? (
                  <img
                    src={user.file}
                    alt={user.name}
                    className="w-16 h-16 object-cover rounded-xl border border-zinc-100"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-400 text-xs font-bold">
                    N/A
                  </div>
                )}
                <div className="text-right">
                  <span className="block text-xs font-bold text-zinc-400">
                    EXP
                  </span>
                  <span className="block text-lg font-black text-zinc-900 leading-none">
                    {user.experience}
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-zinc-900 tracking-tight leading-tight mb-1">
                {user.name}
              </h3>
              <p className="text-xs font-medium text-zinc-500 mb-4 truncate">
                {user.email}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {user.skills &&
                  Array.isArray(user.skills) &&
                  user.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-zinc-50 border border-zinc-100 rounded text-[10px] font-bold text-zinc-600"
                    >
                      {skill}
                    </span>
                  ))}
                {user.skills && user.skills.length > 3 && (
                  <span className="px-2 py-1 bg-zinc-50 border border-zinc-100 rounded text-[10px] font-bold text-zinc-400">
                    +{user.skills.length - 3}
                  </span>
                )}
              </div>

              <div className="pt-4 border-t border-zinc-100">
                <p className="text-xs text-zinc-600 leading-relaxed line-clamp-2">
                  {user.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form2;
