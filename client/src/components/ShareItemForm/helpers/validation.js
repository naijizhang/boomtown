export default function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = '* Title is required.';
  }

  return errors;
}
