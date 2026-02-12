import React from "react";

const TwoWayBinding = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    mobile: "",
  });

  console.log(formData);

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-5"
        >
          <input
            name="userName"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 placeholder-white/30 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            value={formData.userName}
            type="text"
            placeholder="Enter your username"
            onChange={onchange((e) =>
              setFormData({ ...formData, userName: e.target.value })
            )}
          />

          <input
            name="email"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 placeholder-white/30 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            value={formData.email}
            type="email"
            placeholder="Enter your email"
            onChange={onchange((e) =>
              setFormData({ ...formData, email: e.target.value })
            )}
          />

          <input
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/10 focus:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
            value={formData.mobile}
            type="tel"
            placeholder="Enter your mobile number"
            onChange={onchange((e) =>
              setFormData({ ...formData, mobile: e.target.value })
            )}
          />

          <button
            type="submit"
            className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold tracking-wide shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TwoWayBinding;
