import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
export default function Home() {
 

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center md:px-20 pt-5 gap-5">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-sm md:text-3xl font-bold">
          <Typewriter
            words={[
              "Hi, I'm Ramel!",
              "Building with React-Typescript Application",
              "Hope you like!",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1000}
          />
        </h1>
      </div>
      <div className="flex flex-wrap-reverse md:flex-nowrap items-center justify-center gap-5 w-full">
        <div className="relative w-[530px] max-w-[530px] aspect-[530/410.41] flex flex-col justify-around">
          <Image
            src={"/images/depression1.jpg"}
            className="rounded-md"
            sizes="(max-width: 768px) 100vw, 430px"
            alt="Blog Image"
            fill
            priority
          />
        </div>
        <div>
          <i className="text-[12px] md:text-[16px]">Better to wait than force things to happen :)</i>
        </div>
      </div>
    </div>
  );
}
