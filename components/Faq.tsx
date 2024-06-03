interface FaqItem {
  title: string;
  description: string;
}

interface FaqProps {
  faqItems: FaqItem[];
}

const Faq = ({ faqItems }: FaqProps) => {
  return (
    <div className="font-style ">
      <div className="text-red-500 text-[18px] flex m-5 md:mx-32 md:justify-start justify-center ">FAQ</div>
      <div className="flex">
        <div className="flex flex-wrap text-[36px] w-[500px] md:ml-32 md:justify-start justify-center ml-20 font-extrabold">
          Frequently Asked Questions
        </div>
        <img src="https://iili.io/JbE3pDu.png" className="w-[40px] h-[40px] mt-10" />
      </div>
      <div className="md2:grid  grid-cols-2 m-5 md2-text-[26px] text-[22px] ">
        <div className="md2:ml-20 md2:mr-0 mx-10">
          <div className="bg-red-500 p-4 m-1 rounded-md ">
            <div className=" text-white">{faqItems[0].title} </div>
            <p className="text-white"> {faqItems[0].description} </p>
          </div>
          <div className=" m-5">
            <div className=" ">{faqItems[1].title} </div>
            <p className=""> {faqItems[1].description}</p>
          </div>
          <div className="bg-red-500 m-1 p-4  rounded-md">
            <div className=" text-white">{faqItems[0].title} </div>
            <p className="text-white"> {faqItems[0].description}</p>
          </div>
        </div>
        <div className="md2:mr-20 md2:ml-0 mx-10 ">
          <div className=" m-5">
            <div className=" ">{faqItems[0].title} </div>
            <p className="">{faqItems[0].description}</p>
          </div>
          <div className="bg-red-500 m-1 p-4  rounded-md">
            <div className=" text-white">{faqItems[0].title} </div>
            <p className="text-white"> {faqItems[0].description}</p>
          </div>
          <div className=" m-5">
            <div className="">{faqItems[0].title} </div>
            <p className="">{faqItems[0].description}</p>
          </div>
        </div>
      </div>

      <div className=" lg2:mx-24 md2:mx-25 sm:mx-16 m-5 md:grid bg-black grid-cols-2 rounded-md ">
        <div className="md:m-20  lg2:mr-5 m-10">
          <div className="font-style text-white  lg2:text-5xl md2:text-4xl sm:text-2xl text-xl  pt-10 pb-5 sm:py-5 flex justify-center sm:justify-start">
            ReadyToGetStarted?
          </div>
          <div className="font-style text-white flex justify-center sm:justify-start">
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.Risus habitant leo egestas mauris diam eget morbi
            tempus vulputate
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="bg-white rounded-md px-6 py-3 my-4 hover:cursor-pointer mr-3  hover:bg-slate-200 flex items-center justify-center">
              <div> Download App </div>
              <img className="ml-2 w-[27px] h-[33px]" src="https://iili.io/Jmuu4st.png" />
            </div>
          </div>
          <div className="mt-5">
            <img
              className="rotate-45 lg2:w-[54px] w-[44px] filter invert mx-20"
              src="https://iili.io/JbE3pDu.png"
              alt="Secondary Hero Logo"
            />
          </div>
        </div>
        <div className="flex justify-end md2:h-[400px] my-20 md:h-[350px]">
          <img src="https://iili.io/JbkDQe4.png " className="hidden md:inline" alt="Image 2" />
        </div>
      </div>
    </div>
  );
};
export default Faq;
