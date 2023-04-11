import { firstToUpperCase } from '@/utils';

export interface Field {
  value: string;
  setValue: any;
  title: string;
  service: any;
}

const InputField = (props: Field) => {
  const { value, setValue, title, service } = props;

  const handleChange = (e: any, title: string) => {
    const { value } = e.target;
    setValue({ ...service, [title]: value });
  };

  return (
    <div className="relative z-0 w-full mb-4 group">
      <input
        value={value}
        onChange={(e) => handleChange(e, title)}
        type="text"
        name={`floating_${title}`}
        id={`floating_${title}`}
        className="block py-2.5 px-0 w-full text-sm bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
        placeholder=" "
        required
      />
      <label
        htmlFor={`floating_${title}`}
        className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-neutral-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {firstToUpperCase(title)}
      </label>
    </div>
  );
};

export default InputField;
