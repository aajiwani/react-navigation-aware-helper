export function CreateCustomError(errorMessage, information = {})
{
  let error = new CustomError(errorMessage, {...information});
  return error;
}

class CustomError extends Error
{
  constructor(message, info)
  {
    super(message);
    this.name = 'CustomError';
    this.information = info;
  }
}
