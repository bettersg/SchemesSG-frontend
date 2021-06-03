export const createFormData = (form) => {
  const formData = new FormData();
  Object.keys(form).forEach((key) => formData.append(key, form[key]));
  return formData;
};
