import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='flex relative  min-h-screen  2xl:max-w-[1536px]  '>
            <div className="w-full h-full brightness-50 absolute bg-park-bg bg-no-repeat bg-cover">

            </div>
            <div
                className=' m-8 my-12 relative xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full rounde-lg p-4 flex flex-col gap-y-8 rounded-lg'>
                <div className="absolute w-full h-full left-0 glass bg-white/25 top-0 rounded-lg">

                </div>
                <button
                    className='basis-1/4 z-20 border rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition-colors'>
                    ادامه با کد رهگیری
                </button>

                <Link to={"/register"}
                      className='basis-1/2 z-20 flex justify-center items-center border rounded-lg bg-gray-500 text-white hover:bg-gray-700 transition-colors'>
                    عضویت
                </Link>

                <button
                    className='basis-1/4 z-20 border rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition-colors'>
                    آخرین وضعیت
                </button>
            </div>
        </div>
    );
};

export default Home;