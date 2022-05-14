interface LabelProps {
  caption: string;
  isRequired: boolean;
}

const Label = (props: LabelProps) => {
  const { isRequired, caption } = props;
  return (
    <label className='has-text-white'>
      <div className='mb-1 has-text-weight-semibold	'>
        {isRequired ? `${caption}*` : caption}
      </div>
    </label>
  );
};

Label.defaultProps = {
  isRequired: false,
};

export default Label;
