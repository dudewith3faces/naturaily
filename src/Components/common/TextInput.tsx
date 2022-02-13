import { Input } from 'reactstrap';
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
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {/* <input
        type={type}
        name={name}
        className={`form-control`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      /> */}
    </div>
  );
};
