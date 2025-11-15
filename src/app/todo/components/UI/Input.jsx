import clsx from "clsx";

const Input = ({className, ...props}) => {
    return (
        <>
            <input className={clsx("px-3 border border-gray-300 focus:border-blue-500 rounded-md outline-none focus-ring-2 focus:ring-blue-300 w--full h-10 transition", className)} {...props}/>
        </>
    );
}
export default Input;