import "./inputError.css";

export const InputError = (error?: string) => {
  return (
    <div className="input-error-container">
      <p className="error">{error}</p>
    </div>
  );
};
