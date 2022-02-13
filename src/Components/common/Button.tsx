import { IButton } from '../interface';
import { Button as BootStrapButton } from 'reactstrap';

export const Button = ({ onClick, label, disabled }: IButton) => {
  return (
    <div className="form-group">
      <BootStrapButton
        onClick={onClick}
        disabled={disabled}
        className="form-control btn btn-primary submit px-3"
      >
        {label}
      </BootStrapButton>
    </div>
  );
};
