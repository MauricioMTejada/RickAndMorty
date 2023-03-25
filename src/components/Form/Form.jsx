import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    setUserData({ ...userData, [property]: value });
    setErrors(validation({ ...userData, [property]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">User: </label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
          />
          <p>{errors.username}</p>

        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          />
          <p>{errors.password}</p>
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
