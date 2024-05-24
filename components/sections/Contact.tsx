"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { useInView } from "react-intersection-observer";
import { ContactProps } from "@/types";

const Contact = () => {
  const [form, setForm] = useState<ContactProps>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const handleSendMail = async () => {
    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        body: JSON.stringify({
          data: form,
        }),
      });

      if (response.ok) {
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Erro ao enviar a mensagem pela API");
      }
    } catch (error) {
      throw new Error("Não foi possível enviar a mensagem");
    }
  };

  return (
    <div className="mx-auto flex flex-col items-center py-4 lg:py-12 w-full sm:max-w-none max-w-[500px] lg:max-w-[1024px] 2xl:max-w-[1600px]">
      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Contact me
      </h1>
      <h3 className="cursive text-[20px] text-base text-gray-200 mb-10 text-center">
        Fill this form and send me a message
      </h3>

      <form
        className="w-full max-w-[500px] lg:max-w-[1024px] 2xl:max-w-[1600px] z-30 mt-16"
        onSubmit={async (e: React.SyntheticEvent) => {
          e.preventDefault();
          await handleSendMail();
        }}
      >
        <div className="flex justify-between gap-6">
          <motion.input
            variants={slideInFromLeft(0.3)}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="w-full outline-none text-gray-300 bg-[#33333360] px-4 py-3 border border-neutral-300 text-sm transition-all duration-200 focus:border-indigo-500"
            autoComplete="off"
            minLength={2}
            maxLength={60}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <motion.input
            variants={slideInFromRight(0.4)}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full outline-none text-gray-300 bg-[#33333360] px-4 py-3 border border-neutral-300 text-sm transition-all duration-200 focus:border-indigo-500"
            autoComplete="off"
            minLength={2}
            maxLength={60}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <motion.input
          variants={slideInFromLeft(0.5)}
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
          className="w-full outline-none text-gray-300 bg-[#33333360] px-4 py-3 border border-neutral-300 text-sm transition-all duration-200 focus:border-indigo-500 mt-10"
          autoComplete="off"
          minLength={2}
          maxLength={60}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          required
        />
        <motion.textarea
          variants={slideInFromRight(0.6)}
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Message"
          className="w-full outline-none text-gray-300 bg-[#33333360] px-4 py-3 border border-neutral-300 text-sm transition-all duration-200 focus:border-indigo-500 resize-none mt-10"
          autoComplete="off"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />

        <motion.button
          variants={slideInFromLeft(0.7)}
          className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-purple-500 group px-8 py-2 w-full mt-10 bg-[#140e1a]"
        >
          <span className="relative z-10 text-purple-500 group-hover:text-white text-lg duration-500 tracking-[0.5em] cursive text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-200">
            Send Message
          </span>
          <span className="absolute w-full h-full bg-purple-500 -left-[25rem] top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500" />
          <span className="absolute w-full h-full bg-purple-500 -right-[25rem] top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500" />
        </motion.button>

        {/* <button type='submit' className='w-full tracking-[0.5em] mt-10 border border-purple-500 px-4 py-2 text-purple-500'>
          Send Message
        </button> */}
      </form>
    </div>
  );
};

export default Contact;
