import { useState } from "react";
import { Input } from "./Input/Input";
import ViteSvg from "../assets/at.svg?react";

interface Gender {
  label: string;
  option: string;
}

interface InputProps {
  name: string;
  nick: string;
  gender: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignupProps {
  onSubmit: (inputs: InputProps) => void;
  setSign: (sign: "signup" | "signin") => void
}

const genders: Gender[] = [
  { label: "Male", option: "male" },
  { label: "Female", option: "female" },
  { label: "Other", option: "other" },
];

export const Signup = ({ onSubmit, setSign }: SignupProps) => {
  const [inputs, setInputs] = useState<InputProps>({
    name: "",
    nick: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeInput = (e: React.ChangeEvent<HTMLFormElement>) => {
    console.log(e.target.name, e.target.value);
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(inputs);
    e.preventDefault();
    onSubmit(inputs);
  };

  return (
    <div>
      <form onChange={handleChangeInput} onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Name"
          value={inputs.name}
          type="text"
          placeholder="enter your name"
          size="large"
          variant="filled"
          radius="circle"
        />
        <Input
          name="nick"
          label="Nick"
          value={inputs.nick}
          type="text"
          placeholder="enter your nickname"
          icon={<ViteSvg />}
          size="small"
          radius="quadro"
        />
        <Input
          name="email"
          label="Email"
          value={inputs.email}
          type="text"
          placeholder="enter your email"
          required
        />
        <div>
          <label>Gender</label>
          <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
            {genders.map((gender) => (
              <Input
                key={gender.option}
                value={gender.option}
                name="gender"
                label={gender.label}
                type="radio"
                checked={gender.option === inputs.gender}
              />
            ))}
          </div>
        </div>
        <Input
          name="password"
          label="Password"
          value={inputs.password}
          type="password"
          placeholder="type your password"
          required
          error="ashipka"
        />
        <Input
          name="confirmPassword"
          label="Confirm password"
          value={inputs.confirmPassword}
          type="password"
          placeholder="Confirm your password"
          required
          disabled={!inputs.password.length}
        />
        <button type="submit">Signin</button>
      </form>
      <button onClick={() => setSign("signin")}>I have an account</button>
    </div>
  );
};
