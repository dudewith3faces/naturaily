import { IButton } from '../interface';

export const Button = ({ onClick, label, disabled }: IButton) => {
  return (
    <div className="form-group">
      <button
        type="submit"
        className="form-control btn btn-primary submit px-3"
        onClick={onClick}
        disabled={disabled}
      >
        {label}
      </button>
    </div>
  );
};
