interface AuthInputProps {
  label: string;
  value: any;
  required?: boolean;
  notRender?: boolean;
  type?: 'text' | 'email' | 'password';
  valueChanged: (newValue: any) => void;
}

const AuthInput = (props: AuthInputProps) => {
  return props.notRender ? null : (
    <div className={`flex flex-col mt-4`}>
      <label>{props.label}</label>
      <input
        type={props.type ?? 'text'}
        value={props.value}
        onChange={(e) => props.valueChanged?.(e.target.value)}
        required={props.required}
        className={`
        px-4 py-3 rounded-lg bg-gray-200 mt-2 focus:bg-white
        border focus:border-blue-500 focus:outline-none
        `}
      />
    </div>
  );
};

export default AuthInput;
