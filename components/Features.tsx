
interface Feature {
  title: string;
  description: string;
  icon: string;
}
interface Featuresprops {
  heading: string;
  subheading: string;
  feature: Feature[];
}
const Features: React.FC<Featuresprops>= ({ heading, subheading, feature })=>{
return (
    <div>
     <div className="md2:grid grid-cols-2 w-screen flex flex-wrap-reverse justify-center">
        <div className="md2:mx-16  md:flex md:justify-center md2:w-[450px] w-[350px]" style={{
                backgroundImage: "url(https://iili.io/JbX0k0u.png)",
                backgroundSize: "contain",
                backgroundPositionY: "40px",
                backgroundRepeat:"no-repeat",
              }}>
         <img  className="duration-500 hover:scale-125" src="https://iili.io/JbtfpeI.png"  />
       
    </div>
        <div className=" flex flex-col flex-wrap md2:items-start items-center m-5">
  <div className=" text-red-500 text-[15px] "> {heading}</div>
  <div className=" text-black font-extrabold text-[36px]"> {subheading}</div>
  {feature.map((x:Feature)=>{
    return(
      <>
<div className="flex ">
    <img className ="text-[24px] my-2" src={x.icon}/>
    <div className="my-2 ml-2 font-extrabold">{x.title}</div>
  </div>
  <p className="opacity-50 ">{x.description}</p>
  </>
    )
  })}
         </div>
        </div>
         </div>
         
 
)
}
export default Features;
