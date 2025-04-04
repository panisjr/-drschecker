import Image from "next/image";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [view, setView] = useState<boolean>(false);

  const addUser = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/addUser", {
        method: "POST",
        body: JSON.stringify({ firstname, lastname }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("An error occurred: ", error);
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center px-20 pt-5 gap-5">
      <div>
        <h1 className="text-3xl font-bold">
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
      <div className="flex items-center gap-5">
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
          <i>Better to wait than force things to happen :)</i>
        </div>
      </div>
    </div>
  );
}
