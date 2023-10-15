import {useEffect, useRef, useState} from "react";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const Verify = () => {
    const navigate = useNavigate()
    const [inp1, setInp1] = useState(null)
    const [inp2, setInp2] = useState(null)
    const [inp3, setInp3] = useState(null)
    const [inp4, setInp4] = useState(null)
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const code = Cookies.get("code")
    const mobile = Cookies.get("mobile")


    useEffect(() => {
        ref1.current.focus()
        if (inp1) {
            ref2.current.focus()
        }
        if (inp2) {
            ref3.current.focus()
        }
        if (inp3) {
            ref4.current.focus()
        }

        if (inp1 && inp2 && inp3 && inp4) {
            const myCode = `${inp1}${inp2}${inp3}${inp4}`

            if (+myCode === +code){
                navigate("/")
            }else{
                toast.error("کد صحیح نمیباشد!")
            }
        }


        // return () => {
        //     Cookies.remove("code")
        //     Cookies.remove("mobile")
        // }

    }, [inp1, inp2, inp3, inp4])


    return (
        <div className='flex relative  min-h-screen  2xl:max-w-[1536px]  '>
            <div className="w-full h-full brightness-50 absolute bg-park-bg bg-no-repeat bg-cover">

            </div>
            <div className="flex flex-col gap-y-4 w-full relative justify-center items-center">
                <p className="text-2xl text-white">کد تایید را وارد نمایید : </p>
                <div className="flex gap-x-2" dir="ltr">
                    <input onChange={(e) => setInp1(e.target.value)} ref={ref1}
                           className="w-16 flex items-center justify-center text-center text-xl h-16 rounded"
                           type="number" name="" id=""/>
                    <input onChange={(e) => setInp2(e.target.value)} ref={ref2}
                           className="w-16 flex items-center justify-center text-center text-xl h-16 rounded"
                           type="number" name="" id=""/>
                    <input onChange={(e) => setInp3(e.target.value)} ref={ref3}
                           className="w-16 flex items-center justify-center text-center text-xl h-16 rounded"
                           type="number" name="" id=""/>
                    <input onChange={(e) => setInp4(e.target.value)} ref={ref4}
                           className="w-16 flex items-center justify-center text-center text-xl h-16 rounded"
                           type="number" name="" id=""/>
                </div>

                {/*<button className="bg-green-600 text-white hover:bg-green-700 px-6 py-2 mt-4 rounded">تایید کد</button>*/}
            </div>
        </div>
    );
};

export default Verify;