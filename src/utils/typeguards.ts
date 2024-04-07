interface ErrorObject {
  error: {
    error: string,
    status: string
  }
}

export function isError(value: unknown): value is ErrorObject {
  return (value as ErrorObject)?.error !== undefined;
}