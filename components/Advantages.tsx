import Slide from "./Slide";

interface Advantage {
  title: string;
  description: string;
}

interface Advantagesprops {
  heading: string;
  subheading: string;
  advantage: Advantage[];
}
const Advantages: React.FC<Advantagesprops> = ({ heading, subheading, advantage }) => {
  return (
    <div>
       <Slide delay={0.24}>
      <div className="md2:grid grid-cols-2 flex flex-wrap justify-center w-screen mt-10 ">
        <div className=" flex flex-col flex-wrap items-center md2:items-start md2:my-20 mx-20  ">
          <div className=" text-red-500 text-[15px]"> {heading}</div>
          <div className=" text-black font-extrabold sm:text-[36px] text-[22px]  my-2"> {subheading}</div>
          <div className="flex ">
            <img className="text-[24px] w-[30px] h-[30px] my-2" src="https://iili.io/JmfOrqN.png" />
            <div className="my-3 ml-2 font-extrabold sm:text-[20px] text-[15px]">{advantage[0].title}</div>
          </div>
          <p className="opacity-50 ">{advantage[0].description}</p>
        </div>
        <div className="md2:mr-32 md2:my-8 md2:w-[500px] w-[350px]  flex items-center ">
          <img className="duration-500 hover:scale-125" src=" https://iili.io/JbtzF1e.png" alt="Image 1" />
          <div className="flex justify-end m-5">
            <img className=" rotate-45  w-[44px]  mx-7 " src="https://iili.io/JbE3pDu.png" />
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <img className=" rotate-45  w-[44px]  mx-7 " src="https://iili.io/JbE3pDu.png" />
      </div>
      </Slide>
      <Slide delay={0.24}>
      <div className="md2:grid grid-cols-2 flex flex-wrap-reverse justify-center">
        <div
          className="md2:mx-20 mx-10 md2:w-[450px] w-[350px] "
          style={{
            backgroundImage: "url(https://iili.io/JbX0k0u.png)",
            backgroundSize: "contain",
            backgroundPositionY: "100px",
            backgroundRepeat: "no-repeat"
          }}
        >
          <img className="duration-500 hover:scale-125" src="https://iili.io/JbtnjYx.png" alt="Image 1" />
        </div>

        <div className=" flex flex-col mt-20  mx-10 md2:ml-32 md2:items-start items-center">
          <div className="flex ">
            <img className="text-[24px] my-2 w-[30px] h-[30px] " src="https://iili.io/JmfrIPj.png" />
            <div className="my-2 ml-2 font-extrabold text-[20px]"> {advantage[1].title}</div>
          </div>
          <p className="opacity-50 ">{advantage[1].description}</p>
          <img className=" rotate-12 w-[44px] m-7 " src="https://iili.io/JbE3pDu.png" />
        </div>
        <div />
      </div>
      </Slide>
    </div>
  );
};
export default Advantages;
