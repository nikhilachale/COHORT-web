import { useNavigate } from "react-router-dom";




const Main = () => {
    const navigate = useNavigate();
    return (

        <div className="bg-[#F7F4ED] border-b ">

            <div className="grid grid-cols-12">
                <div className="col-span-8 flex flex-col ml-36 py-44 ">
                    <div className="text-8xl font-medium font-serif">
                        <h1>
                            Human
                            <br />
                            stories & ideas
                        </h1>

                    </div>
                    <div className=" text-2xl py-5 font-light">
                        <h2>
                            A place to read, write, and deepen your understanding
                        </h2>
                    </div>
                    <button
                        onClick={() => navigate('/signin')}
                        type="button"
                        className="text-white ml-1 my-5 bg-black  rounded-full font-light cursor-pointer text-lg px-7 py-2 h-fit w-fit"
                    >
                        Start reading
                    </button>
                </div>
                <div className="col-span-4  ">
                    <div className="w-[460px] h-[600px] float-right mt-16">
                        <img
                            src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
                            alt="Medium Banner"
                            
                        />
                    </div>

                </div>
            </div>







        </div>
    )
}

export default Main