import { ITextInput } from '../interface';

export const TextInput = ({
  type,
  label,
  value,
  onChange,
  placeholder,
  name,
}: ITextInput) => {
  return (
    <div className="form-group mb-3">
      <label className="label">{label}</label>
      <input
        type={type}
        name={name}
        className={`form-control`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
