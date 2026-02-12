import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   let first = useRef();
  //   console.log(first);
  return (
    <div>
      {/* <input type="text" ref={first} />
      <button onClick={console.log(first.current.value)}></button> */}

      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true, minLength: 7 })}
        />
        {errors.name && <p>Name is required</p>}
        <input
          type="text"
          placeholder="email"
          {...register("email", { required: true, minLength: 7 })}
        />
        {errors.email && <p>Email is required</p>}
        <input
          type="text"
          placeholder="password"
          {...register("password", { required: true, minLength: 7 })}
        />
        {errors.password && <p>Name is required</p>}
      </form>
    </div>
  );
};

export default ReactHookForm;
