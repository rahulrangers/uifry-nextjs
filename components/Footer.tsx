import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const Footer = () => {
  return (
    <div className="font-style hover:cursor-pointer ">
      <div className="m-5 sm:hidden flex justify-start">
        <Contact />
      </div>
      <div className=" m-16   text-[26px] flex-wrap justify-center hidden sm:flex">
        <div className=" flex flex-col text-[15px]">
          <div className="flex">
            <img className="my-9 w-10 h-10" src={"https://iili.io/Jb1Dle4.png"} alt="logo" />
            <div className="m-9 ml-0  text-[26px]  font-extrabold "> uifry</div>
          </div>
          <div className="flex ">
            <img className="m-2 ml-0 w-[20px] h-[20px] " src="https://iili.io/JmAAcVS.png" />
            <div className="my-2"> Help@Frybix.Com</div>
          </div>
          <div className="flex ">
            <img className="m-2 ml-0 w-[20px] h-[20px] " src=" https://iili.io/JmAlwv9.png " />
            <div className="my-2"> +1234 567889</div>
          </div>
        </div>
        <div className="m-7 text-[20px] flex flex-col items-start">
          <div className="text-[30px]  m-2  "> Links </div>
          <div className="m-2 hover:text-orange-400">Home</div>
          <div className="m-2 hover:text-orange-400">AboutUs</div>
          <div className="m-2 hover:text-orange-400">Booking</div>
          <div className="m-2 hover:text-orange-400"> Blog</div>
        </div>
        <div className="m-7 text-[20px] flex flex-col  items-start">
          <div className="text-[30px] m-2 "> Legal</div>
          <div className="m-2 hover:text-orange-400">Terms of Use</div>
          <div className="m-2 hover:text-orange-400">Privacy Policy</div>
          <div className="m-2 hover:text-orange-400">Cookie Policy</div>
        </div>
        <div className="m-7 text-[20px] flex flex-col items-start">
          <div className="text-[30px]  m-2  "> Product</div>
          <div className="m-2 hover:text-orange-400">Take Tour</div>
          <div className="m-2 hover:text-orange-400">Live Chat</div>
          <div className="m-2 hover:text-orange-400">Review</div>
        </div>
        <div className="m-7 text-[20px] flex flex-col items-start">
          <div className="text-[30px]  m-2 "> NewsLetter</div>
          <div className="m-2 hover:text-orange-400">Stay upto Date</div>
          <div className="m-2 hover:text-orange-400">AboutUs</div>
          <div className="flex">
            <input className="m-1s w-[120px] h-[50px] p-4 bg-slate-100 text-[15px]" placeholder="Your Email" />
            <button className="px-4  py-1 rounded-md bg-black text-white">Subscribe</button>
          </div>
        </div>
      </div>
      <hr className="h-full mx-4 border-l-2 border-gray-500" />
      <div className="flex justify-center m-3 text=[30px]">Copyright 2022 Uifry.com All Rights Reserved</div>
    </div>
  );
};

function Contact() {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          uifry
        </AccordionSummary>
        <AccordionDetails>Help@Frybix.Com</AccordionDetails>
        <AccordionDetails>+1234 567889</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          Links
        </AccordionSummary>
        <AccordionDetails>Home</AccordionDetails>
        <AccordionDetails>AboutUs</AccordionDetails>
        <AccordionDetails>Booking</AccordionDetails>
        <AccordionDetails>Blog</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          Legal
        </AccordionSummary>
        <AccordionDetails>Terms of Use</AccordionDetails>
        <AccordionDetails>Privacy Policy</AccordionDetails>
        <AccordionDetails>Cookie Policy</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          Product
        </AccordionSummary>
        <AccordionDetails>Take Tour</AccordionDetails>
        <AccordionDetails>Live Chat</AccordionDetails>
        <AccordionDetails>Review</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          NewsLetter
        </AccordionSummary>
        <AccordionDetails>Stay upto Date</AccordionDetails>
        <AccordionDetails>AboutUs</AccordionDetails>
        <AccordionDetails>
          <div className="flex">
            <input className="m-1s w-[120px] h-[50px] p-4 bg-slate-100 text-[15px]" placeholder="Your Email" />
            <button className="px-4  py-1 rounded-md bg-black text-white">Subscribe</button>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
          CopyRight
        </AccordionSummary>
        <AccordionDetails>Contact Us for any help consectetur adipiscing elit. Suspendisse</AccordionDetails>
      </Accordion>
    </div>
  );
}
export default Footer;
