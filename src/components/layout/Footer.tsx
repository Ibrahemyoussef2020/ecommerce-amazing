
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import { navigations } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#180735] mt-10 py-10 text-zinc-300">
      <Container className="flex flex-col md:flex-row items-center gap-6 navigations-center justify-between flex-wrap">
        <Logo className="!text-stone-500" spanClassName="bg-white text-black relative top-1" />
        <ul className="flex gap-6 navigations-center justify-center flex-wrap">
          {navigations.map((navigation) => (
            <Link href={navigation?.link} key={navigation?.id}>
              <li className="hover:text-white duration-200">{navigation?.title}</li>
            </Link>
          ))}
        </ul>
        <p className="text-right">Join me with @reactbd.com</p>
      </Container>
    </div>
  );
};

export default Footer;