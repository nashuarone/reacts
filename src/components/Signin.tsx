import { useState } from "react";
import { Input } from "./Input/Input";

interface InputProps {
    email: string;
    password: string;
}

interface SigninProps {
  onSubmit: (inputs: InputProps) => void;
  setSign: (sign: "signup" | "signin") => void
}

export const Signin = ({ onSubmit, setSign }: SigninProps) => {
  const [inputs, setInputs] = useState<InputProps>({
    email: "",
    password: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLFormElement>) => {
    console.log(e.target.name, e.target.value);
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputs);
  };

  return (
    <div>
      <form
        onChange={handleChangeInput}
        onSubmit={handleSubmit}
      >
        <Input
          name="email"
          label="Email"
          value={inputs.email}
          type="text"
          placeholder="enter your email"
          required
        />
        <Input
          name="password"
          label="Password"
          value={inputs.password}
          type="password"
          placeholder="type your password"
          required
          error="kakakha"
        />
        <button type="submit">Signin</button>
      </form>
      <button onClick={() => setSign("signup")}>Go to register</button>
    </div>
  );
};
