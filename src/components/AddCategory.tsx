import { useState } from "react";

export const AddCategory = ({ onNewCategory }: any) => {
  const [inputValue, setInputValue] = useState("OnePunch");

  const onInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text "
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={(event) => onInputChanged(event)}
      />
    </form>
  );
};
