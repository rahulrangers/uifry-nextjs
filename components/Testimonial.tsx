
interface Testimonialprop {
    heading: string;
    subHeading: string;
    name: string;
    title: string;
    feedback: string;
    avatar: string;
  }
const Testimonial: React.FC<Testimonialprop>= ({ heading, subHeading, name,title,feedback,avatar })=>{
return (
<div className="font-style  ">
    <div className="flex justify-end m-5">
<img  className=" rotate-45 lg2:w-[64px] w-[44px]  mx-7 " src="https://iili.io/JbE3pDu.png"></img>
</div>
    <div className="text-[15px]  flex justify-center">{heading}</div>
    <div className="text-[36px] flex justify-center font-extrabold">{subHeading}</div>
    <div className="text-[36px] flex justify-center font-extrabold">Say AboutUs?</div>
    <div className=" md2:grid mb-20 grid-cols-2  flex flex-wrap justify-center">
        <div className=" ">
        <div className="md2:mx-24 w-30 md2:w-[400px] w-[350px] md2:mr-5" style={{
                backgroundImage: "url(https://iili.io/JbX0k0u.png)",
                backgroundSize: "contain",
                backgroundPositionY: "0px",
            backgroundRepeat:"no-repeat",
              }}>
        <img src={avatar} className="duration-500 hover:scale-125" alt="Image 2" />
</div>
        </div>
        <div className="m-5 flex flex-col justify-end flex-wrap ">
         <div className="m-2 font-extrabold flex justify-center md2:justify-start md2:text-[20px] ">{title}</div>
         <p className="m-2 opacity-50">{feedback}</p>
         <div className="m-2 font-extrabold"> {name}</div>
        </div>
    </div>

      </div>
      
)

}
export default Testimonial;
