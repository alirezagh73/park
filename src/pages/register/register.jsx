import RegisterForm from "@/features/auth/components/registerForm.jsx";

const Register = () => {

    return (
        <div className=' relative  min-h-screen  2xl:max-w-[1536px]  '>
            <div className="w-full h-full brightness-50 absolute bg-park-bg bg-no-repeat bg-cover">

            </div>

            <div className="relative">
                <h2 className="text-2xl text-white font-bold border-b p-8">
                    فرم عضویت
                </h2>
                <div className='mt-8 sm:mt-10 sm:p-8 p-4'>
                    <RegisterForm/>
                </div>
            </div>

        </div>
    );
};

export default Register;

// <div className="min-h-screen 2xl:max-w-[1536px]">
//     <h2 className="text-2xl font-bold border-b p-8">
//         فرم عضویت
//     </h2>
//     <div className='my-8 sm:mt-10 sm:p-8 p-4'>
//         <RegisterForm/>
//     </div>
// </div>