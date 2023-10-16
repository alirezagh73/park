const Button = ({loading, type, loadingText, text, btnClasses}) => {
    return (
        <button disabled={loading} type={type}
                className={btnClasses}>
            {
                loading ? loadingText : text
            }
        </button>
    );
};

export default Button;