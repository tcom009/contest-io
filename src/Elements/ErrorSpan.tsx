interface ErrorSpanProps {
  errorMessage: string;
}
const ErrorSpan = (props: ErrorSpanProps) => {
  const { errorMessage } = props;
  if (errorMessage) {
    return <div className='has-text-danger'>{errorMessage}</div>;
  } else {
    <></>;
  }
};

export default ErrorSpan;
