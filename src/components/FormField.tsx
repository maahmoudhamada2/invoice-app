import Input from "./Input";
interface FormFieldProps {
  container: {
    size: string;
  };
  label: {
    text: string;
  };
  input: {
    id: string;
    type: string;
    disabled: boolean;
  };
  idPrefix?: string;
}

const FormField = ({ container, label, input, idPrefix }: FormFieldProps) => {
  const inputId = idPrefix ? `${idPrefix}${input.id}` : input.id;
  return (
    <div className={`relative flex flex-col gap-y-2.25 ${container.size}`}>
      <label className="text-body text-muted" htmlFor={inputId}>
        {label.text}
      </label>
      <Input {...input} id={inputId} />
    </div>
  );
};

export default FormField;
