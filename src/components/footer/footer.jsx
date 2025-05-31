"use client";
import React from "react";
import { FacebookIcon } from "../../../public/icons/facebook-iocn";
import { WhatsappIcon } from "../../../public/icons/whatsapp-icon";
import { TelegramIcon } from "../../../public/icons/telegram-icon";
import { InstagramIcon } from "../../../public/icons/instagram-icon";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Footer = () => {
    const { register, handleSubmit, reset } = useForm();

    const Submit = async (data) => {
        const message = `Ismi: ${data.name}\nRaqami: ${data.number}`;

        const url = `https://api.telegram.org/bot7756346699:AAGJvRdpDiVqLRUdIoHkIL9dGUfnJlBSUoQ/sendMessage`;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: "-1002287931753",
                    text: message,
                }),
            });

            if (response.ok) {
                toast.success("Muvaffaqiyatli yuborildi");
                reset();
            } else {
                toast.error("Xatolik yuz berdi");
            }
        } catch (error) {
            toast.error("Xatolik yuz berdi");
        }
    };

    return (
        <>
            <div className="bg-[url('/imgs/footer-bg.png')] bg-cover bg-center  pt-[54px] pb-[47px] ">
                <div className="container lg:w-[1200px] mx-auto ">
                    <div className="flex gap-[179px] justify-center">
                        <div className="w-[510px] ">
                            <h3 className="font-[700] text-[24px] mb-[31px]">
                                Ariza Qoldiring
                            </h3>
                            <form
                                id="contact-form"
                                onSubmit={handleSubmit(Submit)}
                            >
                                <div className="mb-[31px]">
                                    <input
                                        {...register("name", {
                                            required: true,
                                        })}
                                        className=" pb-[10px] border-b-[1px] border-white font-[400] text-[14px] w-[100%] outline-none placeholder:font-[400]  placeholder:text-white placeholder:text-[14px]"
                                        placeholder="Name"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <input
                                        {...register("number", {
                                            required: true,
                                        })}
                                        className=" pb-[10px] border-b-[1px] border-white font-[400] text-[14px] w-[100%] outline-none placeholder:font-[400]  placeholder:text-white placeholder:text-[14px]"
                                        placeholder="Phone"
                                        type="tel"
                                    />
                                </div>

                                <div className="mt-[22px] text-right">
                                    <button
                                        type="submit"
                                        className=" font-[400] text-[14px] pt-[12px] px-[16px] pb-[12px] bg-yellow cursor-pointer"
                                    >
                                        Yuborish
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="flex flex-col justify-between">
                            <h3 className="font-[700] text-[24px] mb-[31px] ">
                                Kontaktlar
                            </h3>
                            <div className="mb-[40px] ">
                                <p className="mb-[20px]">
                                    <a
                                        className="font-[400] text-[18px] "
                                        href="tel:+998944808804"
                                    >
                                        +998 94 480 88 04
                                    </a>
                                </p>
                                <p>
                                    <a
                                        className="font-[400] text-[18px]"
                                        href="tel:+998946205002"
                                    >
                                        +998 94 620 50 02
                                    </a>
                                </p>
                            </div>
                            <ul className="flex gap-5.5 items-center justify-center ">
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/"
                                    >
                                        <InstagramIcon />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/"
                                    >
                                        <TelegramIcon />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/"
                                    >
                                        <WhatsappIcon />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/"
                                    >
                                        <FacebookIcon />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};
