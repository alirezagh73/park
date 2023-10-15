
const TextField = ({textFiledClasses , inputClasses,labelClasses, placeholder,label, name, id, register , validationSchema , type, children}) => {
    return (
        <div className={textFiledClasses}>
            <label className={labelClasses} htmlFor={name}>{label}</label>
            <input className={inputClasses}
                   placeholder={placeholder}
                   {...register(name, validationSchema)}
                   type={type} name={name}
                   id={id}/>


            {children}

        </div>
    );
};

export {TextField};