interface InputLabelProps {
  htmlFor: 'small' | 'large';
  resolution: string;
  size: string | number;
  extention: string;
}

export const InputLabel = ({ htmlFor, resolution, size, extention }: InputLabelProps) => {
  return (
    <>
      <label className="pre" htmlFor={htmlFor}>
        {resolution}
        &emsp;&emsp;
        {size}
        &emsp;&emsp;
        {extention}
      </label>
      <br />
    </>
  );
};
