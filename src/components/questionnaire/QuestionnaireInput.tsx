import { ChangeEvent } from 'react';

type QuestionnaireInputProps = {
  question: string,
  value: string | number,
  checked?: boolean,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
};

const QuestionnaireInput = ({
  question,
  value,
  checked = false,
  onChange,
}: QuestionnaireInputProps) => {
  return (
    <div className="flex flex-row items-center">
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
        className="flex-none w-6 h-6 accent-blue-500"
      />
      <label className="w-full ml-2 p-2 bg-blue-200 rounded-xl">{question}</label>
    </div>
  );
};

export default QuestionnaireInput;
