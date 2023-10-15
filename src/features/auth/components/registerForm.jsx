import {useForm} from "react-hook-form";
import {useActionData, useNavigate, useNavigation, useRouteError, useSubmit} from "react-router-dom";
import {useEffect} from "react";
import {toast} from "react-toastify";

const RegisterForm = () => {
    const submitForm = useSubmit()
    const navigation = useNavigation()
    const navigate = useNavigate()

    const isSubmitting = navigation.state !== 'idle';
    const isSuccessOperation = useActionData()

    const routeErrors = useRouteError()


    const {register, handleSubmit, reset, formState: {errors}} = useForm()

    useEffect(() => {
        if (isSuccessOperation) {
            reset()
            setTimeout(() => {
                navigate("/validate")
            }, 1000)
        }
    }, [isSuccessOperation])

    useEffect(() => {
        if (routeErrors) {
            toast.error("خطایی رخ داده است!")
        }
    }, [routeErrors]);
    const onSubmit = (data) => {

        const {mobile} = data
        let code = Math.floor(1000 + Math.random() * 9000);

        submitForm({number: mobile, text: code}, {method: "POST"})
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className='flex max-w-6xl mx-auto bg-white flex-col gap-y-8 flex-wrap border border-gray-300 shadow-xl p-8 rounded-lg'>
            <div className='flex gap-x-8 flex-col gap-y-4 sm:flex-row'>
                <div className="basis-1/2 relative">
                    <label htmlFor="name">نام*</label>
                    <input className="w-full border border-gray-300 mt-2 px-2 py-2 rounded-lg"
                           {...register("name", {
                               required: "نام اجباری است!"
                           })}
                           type="text" name="name"
                           id="name"/>
                    {
                        errors.name && errors.name.type === "required" && (
                            <span className='text-xs text-red-500 absolute right-0 -bottom-6'>
                               {errors.name.message}
                            </span>
                        )
                    }
                </div>
                <div className="basis-1/2 relative">
                    <label htmlFor="lastname">نام خانوادگی*</label>
                    <input className="w-full border border-gray-300 mt-2 px-2 py-2 rounded-lg"
                           {...register("lastname", {
                               required: "نام خانوادگی اجباری است!"
                           })}
                           type="text" name="lastname"
                           id="lastname"/>
                    {
                        errors.lastname && errors.lastname.type === "required" && (
                            <span className='text-xs text-red-500 absolute right-0 -bottom-6'>
                               {errors.lastname.message}
                            </span>
                        )
                    }
                </div>
            </div>
            <div className='flex gap-x-8 flex-col gap-y-4 sm:flex-row'>
                <div className="basis-1/2 relative">
                    <label htmlFor="idcard">کد ملی*</label>
                    <input className="w-full border border-gray-300 mt-2 px-2 py-2 rounded-lg"
                           {...register("idcard", {
                               required: "کد ملی اجباری است!",
                               minLength: 10,
                               maxLength: 10
                           })}
                           type="text" name="idcard"
                           id="idcard"/>
                    {
                        errors.idcard && errors.idcard.type === "required" && (
                            <span className='text-xs text-red-500 absolute right-0 -bottom-6'>
                               {errors.idcard.message}
                            </span>
                        )
                    }

                    {
                        errors.idcard && (errors.idcard.type === "maxLength" || errors.idcard.type === "minLength") && (
                            <span className='text-xs text-red-500 absolute right-0 -bottom-6'>
                               کد ملی باید ۱۰ رقمی باشد!
                            </span>
                        )
                    }
                </div>
                <div className="basis-1/2 relative">
                    <label htmlFor="phone">شماره تلفن ثابت*</label>
                    <input className="w-full border border-gray-300 mt-2 px-2 py-2 rounded-lg"
                           placeholder="مثال‌ : 02112345678"
                           {...register("phone", {
                               required: "تلفن ثابت اجباری است!",
                               maxLength: 11,
                               minLength: 11
                           })}
                           type="text" name="phone"
                           id="phone"/>

                    {
                        errors.phone && errors.phone.type === "required" && (
                            <span className='text-xs text-red-500 absolute right-0 -bottom-6'>
                               {errors.phone.message}
                            </span>
                        )
                    }

                    {
                        errors.phone && (errors.phone.type === "maxLength" || errors.phone.type === "minLength") && (
                            <span className='text-xs text-red-500 absolute right-0 -bottom-6'>
                               شماره تلفن ثابت باید ۱۱ رقمی باشد!
                            </span>
                        )
                    }
                </div>
            </div>

            <div className='flex gap-x-8 flex-col gap-y-4 sm:flex-row'>
                <div className="basis-1/2 relative">
                    <label htmlFor="mobile">شماره همراه*</label>
                    <input className="w-full border border-gray-300 mt-2 px-2 py-2 rounded-lg"
                           placeholder="مثال : 09121112233"
                           {...register("mobile", {
                               required: "موبایل اجباری است!",
                               maxLength: 11,
                               minLength: 11
                           })}
                           type="text" name="mobile"
                           id="mobile"/>
                    {
                        errors.mobile && errors.mobile.type === "required" && (
                            <span className='text-xs text-red-500 absolute right-0 -bottom-6'>
                               {errors.mobile.message}
                            </span>
                        )
                    }

                    {
                        errors.mobile && (errors.mobile.type === "maxLength" || errors.mobile.type === "minLength") && (
                            <span className='text-xs text-red-500 absolute right-0 -bottom-6'>
                               شماره تلفن ثابت باید ۱۱ رقمی باشد!
                            </span>
                        )
                    }
                </div>
                <div className="basis-1/2 relative">
                    <label htmlFor="email">پست الکترونیک*</label>
                    <input className="w-full border border-gray-300 mt-2 px-2 py-2 rounded-lg"
                           {...register("email", {
                               required: "پست الکترونیک اجباری است!",
                               pattern: {
                                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                   message: "invalid email address"
                               }
                           })}
                           type="text" name="email"
                           id="email"/>

                    {
                        errors.email && errors.email.type === "required" && (
                            <span className='text-xs text-red-500 absolute right-0 -bottom-6'>
                               {errors.email.message}
                            </span>
                        )
                    }

                    {
                        errors.email && (errors.email.type === "pattern") && (
                            <span className='text-xs text-red-500 absolute right-0 -bottom-6'>
                               ایمیل معتبر وارد نمایید!
                            </span>
                        )
                    }
                </div>
            </div>

            <button disabled={isSubmitting} type="submit"
                    className='bg-green-500 disabled:bg-green-200 text-white self-center py-3 px-6 rounded-lg hover:bg-green-600'>
                {
                    isSubmitting ? "در حال انجام ..." : "عضویت"
                }
            </button>
        </form>
    );
};

export default RegisterForm;