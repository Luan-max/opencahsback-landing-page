import Image from "next/image";
import Container from "./Container";
import heroImg from "../assets/hero.png";
import styles from "@/styles/Home.module.css";
import { Banner } from '../assets/Icons'

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <Container className="flex flex-wrap">
          <div className="flex items-center w-full lg:w-1/2 lg:py-36 sm:py-0">
            <div className="max-w-2xl mb-20">
              <h1 className="text-4xl font-semibold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
                A solução de <a className="text-[#BDE322]">cashback</a> mais{" "}
                <br />
                simples, completa e inteligente.
              </h1>
              <p className="py-5 text-xl font-medium leading-normal text-white lg:text-xl xl:text-2x">
                Desconto é coisa do passado, e recorrência é só o começo <br />{" "}
                do futuro. Estratégias de recompensapara clientes para <br />{" "}
                todas as etapas do funil de vendas.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full lg:w-1/2 mb-14">
            <div className="">
              <Banner />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
