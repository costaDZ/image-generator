interface RadioInputProps {
  id: 'small' | 'large';
  action: () => void;
}

export const RadioInput = ({ id, action }: RadioInputProps) => {
  return <input type="radio" id={id} name="resolution" required onClick={action} />;
};
