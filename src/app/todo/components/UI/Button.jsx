'use client'
import clsx from "clsx";

const Button = ({children, variant = "primary", sizeBtn = "md", className, ...props}) => {
    const base = "inline-flex items-center justify-center font-medium rounded-md transition active:scale-95 cursor-pointer";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        succsess: "bg-green-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
        outline: "border border-grey-400 text-gray-900 hover:bg-gray-100 bg-transparent",
        danger: "bg-red-600 text-white hover:bg-red-700"
    };

    const sizes = {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
    };

    return (
        <button className={clsx(base, variants[variant], sizes[sizeBtn], className)} {...props}>
            {children}
        </button>
    )
}
export default Button;