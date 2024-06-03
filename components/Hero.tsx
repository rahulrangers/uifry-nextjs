type HeroProps = {
  headline: string;
  subheadline: string;
  ctaButtons: { text: string; link: string }[];
};
const Hero: React.FC<HeroProps> = ({ headline, subheadline, ctaButtons }) => {
  return (
    <div className="font-style">
      <img className="rotate-45 w-[44px] mx-7" src="https://iili.io/JbE3pDu.png" alt="Hero Logo" />
      <div className="md2:grid grid-cols-2 w-screen mb-10 lg2:m-10 m-5 flex justify-center flex-wrap">
        <div className="flex flex-col md2:items-start items-center">
          <div
            className="mx-5 flex flex-wrap justify-center"
            style={{
              backgroundImage: "url(https://iili.io/JbX0k0u.png)",
              backgroundSize: "contain",
              backgroundPositionY: "-10px",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className="bold text-[44px] font-style m-1  flex justify-center  mt-16">{headline}</div>
            <div className="text-[16px] m-3  opacity-50 text-black">{subheadline}</div>
            <div className="flex md2:justify-start justify-center items-center  w-full m-3">
              <a
                href={ctaButtons[0].link}
                className="md2:text-[20px] text-[15px] bg-black text-white px-5 py-2 rounded-md hover:bg-slate-800 hover:text-white"
              >
                {ctaButtons[0].text}
              </a>
              <img className="ml-2 hover:cursor-pointer" src="https://iili.io/JbkWeAN.png" alt="Play Icon" />
              <div className="text-[16px] px-5 py-2"> {ctaButtons[1].text}</div>
            </div>
          </div>
          <div className="flex  mt-5">
            <img
              className="rotate-45 lg2:w-[54px] w-[44px]  mx-7"
              src="https://iili.io/JbE3pDu.png"
              alt="Secondary Hero Logo"
            />
          </div>
          <div className="w-[350px] hidden md2:inline md2:mx-20">
            <img className="ml-2" src="https://iili.io/JbbRWmu.png" alt="Secondary Image" />
          </div>
        </div>
        <div
          className="md2:w-[520px] lg2:w-[650px] w-[450px] flex md2:mb-[100px]  items-start justify-start"
          style={{
            backgroundImage: "url(https://iili.io/JbX0k0u.png)",
            backgroundSize: "contain",
            backgroundPositionY: "0px",
            transform: "rotate(180deg)",
            backgroundRepeat: "no-repeat"
          }}
        >
          <img src="https://iili.io/JbtIcFe.png" className="rotate-180 duration-500 hover:scale-110" alt="Image 1" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
