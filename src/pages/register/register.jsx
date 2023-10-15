import RegisterForm from "@/features/auth/components/registerForm.jsx";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()

    return (
        <div className=' relative  min-h-screen  2xl:max-w-[1536px]  '>
            <div className="w-full h-full brightness-50 absolute bg-park-bg bg-no-repeat bg-cover">

            </div>

            <div className="relative">
                <div className="flex justify-between text-white font-bold border-b p-8">
                    <h2 className="text-2xl ">
                        فرم عضویت
                    </h2>
                    <button onClick={() => navigate(-1)}>
                        صفحه قبلی
                    </button>
                </div>
                <div className='mt-8 sm:mt-10 sm:p-8 p-4'>
                    <RegisterForm/>
                </div>
            </div>

        </div>
    );
};

export default Register;

