import { ChangeEvent, InputHTMLAttributes } from "react";
import { InputElement } from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  hasTextRightAligned?: boolean;
}

const Input = ({
  value,
  changeHandler,
  hasTextRightAligned = false,
  ...props
}: Props) => {
  return (
    <InputElement
      value={value}
      onChange={changeHandler}
      hasTextRightAligned={hasTextRightAligned}
      {...props}
    />
  );
};

export { Input };
