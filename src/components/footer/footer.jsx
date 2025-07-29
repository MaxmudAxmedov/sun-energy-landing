// "use client";
// import React from "react";
// import { FacebookIcon } from "../../../public/icons/facebook-iocn";
// import { WhatsappIcon } from "../../../public/icons/whatsapp-icon";
// import { TelegramIcon } from "../../../public/icons/telegram-icon";
// import { InstagramIcon } from "../../../public/icons/instagram-icon";
// import { useForm } from "react-hook-form";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// export const Footer = () => {
//     const { register, handleSubmit, reset } = useForm();

//     const Submit = async (data) => {
//         const message = `Ismi: ${data.name}\nRaqami: ${data.number}`;

//         const url = `https://api.telegram.org/bot7756346699:AAGJvRdpDiVqLRUdIoHkIL9dGUfnJlBSUoQ/sendMessage`;

//         try {
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     chat_id: "-1002287931753",
//                     text: message,
//                 }),
//             });

//             if (response.ok) {
//                 toast.success("Muvaffaqiyatli yuborildi");
//                 reset();
//             } else {
//                 toast.error("Xatolik yuz berdi");
//             }
//         } catch (error) {
//             toast.error("Xatolik yuz berdi");
//         }
//     };

//     return (
//         <>
//             <div className=" bg-[url('/imgs/footer-bg.png')] bg-cover bg-center  pt-[54px] pb-[47px] ">
//                 <div className="container lg:w-[1200px] mx-auto ">
//                     <div className="lg:flex gap-[179px] justify-center px-[15px] lg:px-[0px]">
//                         <div className="lg:w-[510px]  ">
//                             <h3 className="font-[700] text-[24px] mb-[31px]">
//                                 Ariza Qoldiring
//                             </h3>
//                             <form
//                                 id="contact-form"
//                                 onSubmit={handleSubmit(Submit)}
//                             >
//                                 <div className="mb-[31px]">
//                                     <input
//                                         {...register("name", {
//                                             required: true,
//                                         })}
//                                         className=" pb-[10px] border-b-[1px] border-white font-[400] text-[14px] w-[100%] outline-none placeholder:font-[400]  placeholder:text-white placeholder:text-[14px]"
//                                         placeholder="Name"
//                                         type="text"
//                                     />
//                                 </div>
//                                 <div>
//                                     <input
//                                         {...register("number", {
//                                             required: true,
//                                         })}
//                                         className=" pb-[10px] border-b-[1px] border-white font-[400] text-[14px] w-[100%] outline-none placeholder:font-[400]  placeholder:text-white placeholder:text-[14px]"
//                                         placeholder="Phone"
//                                         type="tel"
//                                     />
//                                 </div>

//                                 <div className="mt-[22px] text-right">
//                                     <button
//                                         type="submit"
//                                         className=" font-[400] text-[14px] pt-[12px] px-[16px] pb-[12px] bg-yellow cursor-pointer"
//                                     >
//                                         Yuborish
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                         <div className="flex flex-col justify-between">
//                             <h3 className="font-[700] text-[24px] mb-[31px] ">
//                                 Kontaktlar
//                             </h3>
//                             <div className="mb-[40px] ">
//                                 <p className="mb-[20px]">
//                                     <a
//                                         className="font-[400] text-[18px] "
//                                         href="tel:+998944808804"
//                                     >
//                                         +998 94 480 88 04
//                                     </a>
//                                 </p>
//                                 <p>
//                                     <a
//                                         className="font-[400] text-[18px]"
//                                         href="tel:+998946205002"
//                                     >
//                                         +998 94 620 50 02
//                                     </a>
//                                 </p>
//                             </div>
//                             <ul className="flex gap-5.5 items-center justify-center ">
//                                 <li>
//                                     <a
//                                         target="_blank"
//                                         href="https://www.instagram.com/"
//                                     >
//                                         <InstagramIcon />
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a
//                                         target="_blank"
//                                         href="https://www.instagram.com/"
//                                     >
//                                         <TelegramIcon />
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a
//                                         target="_blank"
//                                         href="https://www.instagram.com/"
//                                     >
//                                         <WhatsappIcon />
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a
//                                         target="_blank"
//                                         href="https://www.instagram.com/"
//                                     >
//                                         <FacebookIcon />
//                                     </a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <ToastContainer />
//         </>
//     );
// };

import React from "react";
import { FooterIcon } from "../../../public/icons/footer-icon";
import { FcbIcon } from "../../../public/icons/fcb-iocn";
import { TgIcon } from "../../../public/icons/tg-icon";
import { InstaIcon } from "../../../public/icons/insta-icon";
import { BtnPhone } from "../../../public/icons/btn-phone";

export const Footer = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/imgs/NewFooter.png')",
        }}
        className="    py-[34px]  "
      >
        <div className=" max-w-[1400px]  mx-auto">
          <div className="  flex  items-center gap-[435px] mx-auto ">
            <div className="">
              <div className="mb-[43px]">
                <FooterIcon />
              </div>
              <div className="flex gap-[25px] mb-[43px]">
                <div>
                  <a href="#" className="flex items-center gap-1">
                    <FcbIcon />
                    FaceBook
                  </a>
                </div>
                <div>
                  <a href="#" className="flex items-center gap-1">
                    <TgIcon />
                    Telegram
                  </a>
                </div>
                <div className="flex items-center gap-1">
                  <a href="#" className="flex items-center gap-1">
                    <InstaIcon />
                    Instagram
                  </a>
                </div>
              </div>
              <div>
                <h3 className="mb-[13px] font-[700] text-[22px] leading-[182%] capitalize text-white pl-[50px]">
                  Aloqa
                </h3>
                <button className="bg-[#6acb20] rounded-[80px] font-[700] text-[18px] text-white flex items-center w-[440px] gap-[20px] pl-[31px] pt-[15px] pb-[8px]">
                  <div className="bg-[#fe5716] p-[18px] rounded-[100%]">
                    <BtnPhone />
                  </div>
                  <div>
                    Telefon raqami : <br />
                    <span className="font-[400] text-[16px] text-white">
                      +998 99 123 45 67
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="w-[435px]">
              <h3 className="font-[700] text-[22px] leading-[182%] capitalize text-white mb-[25px]">
                BSE Haqida
              </h3>
              <p className="font-[400] text-[16px] leading-[175%] text-[#fafafa] ">
                Quyosh energiyasining energiya saqlash tizimlari,
                elektromobillar va aqlli tarmoqlar bilan mukammal uyg‘unligi
                tufayli, bu soha texnologiya va tizimlarni yangilashning ilg‘or
                yo‘nalishida faoliyat olib boradi.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-[16px]">
            <p className=" font-[400]  text-[16px] leading-[250%] text-[#fafafa] capitalize">
              © Copyright Energix 2025. All Rights Reserved.
            </p>
            <div className="flex w-[447px] justify-between">
              <div>
                <a href="#">Privacy Policy</a>
              </div>
              <div>
                <a href="#"> Terms & Conditions </a>
              </div>
              <div>
                <a href="#">About U</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
