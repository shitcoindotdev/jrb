import pumppill from '../assets/logo.webp';

const Button = (props) => {
  return (
    <a
      href={props.href}
      target={props.target}
      className={`flex h-10 px-6 items-center justify-center  rounded-full text-[14px] font-extrabold transition duration-300 ease-in-out w-full xl:w-fit xl:px-4  ${
        props.blue
          ? 'text-[#f4f4f4] bg-[#08388b]'
          : 'text-[#fef9ec] font-extrabold bg-[#C00C15]'
      } ${props.classNames}`}
    >
      <span
        className={`${props.textClasses} flex items-center justify-center gap-2`}
      >
        {props.text}
        {props.pill && <img className="h-4 w-auto" src={pumppill} />}
      </span>
    </a>
  );
};

export default Button;
