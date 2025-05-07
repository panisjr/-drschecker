import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10 lexend-normal ">
      <div className="w-full h-screen shadow-md shadow-[#808080]">
        <div className="absolute w-full h-screen flex items-center justify-start">
          <p className="text-sm md:text-2xl font-medium px-10 poppins-regular z-10 text-white">
            <i>Track your mental wellness with clarity and care.</i>
          </p>
        </div>
        <div className="relative w-full h-screen aspect-[3000/1988]">
          <Image
            src={"/images/card9.jpg"}
            // src={"/images/bg1.jpg"}
            sizes="(max-width: 3000px) 100vw, 1988"
            className="object-cover"
            alt="Landscape peaceful background"
            fill
            priority
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 w-full h-fit p-10">
        <div className="w-[500px] max-w-[500px] h-fit bg-white">
          <p className="text-sm md:text-[16px] lexend-normal">
            DRSChecker is a supportive space designed to help you better
            understand your emotional well-being through a simple,
            research-based depression rating scale.
          </p>
        </div>
        <div className="relative w-[500px] aspect-[530/400] rounded-lg">
          <Image
            src={"/images/p1.jpg"}
            sizes="(max-width: 768px) 100vw, 430px"
            className="object-cover rounded-lg shadow-lg shadow-[#808080] "
            alt="Peaceful Image"
            fill
            priority
          />
        </div>
      </div>
      <div className="flex flex-row-reverse items-center justify-center gap-5 w-full h-fit p-10">
        <div className="w-[500px] max-w-[500px] h-fit bg-white">
          <p className="text-sm md:text-[16px] lexend-normal">
            By answering a few guided questions, you can gain insights into your
            current mental state—and receive thoughtful, AI-generated messages
            that encourage self-care and seeking support when needed.
          </p>
        </div>
        <div className="relative w-[500px] h-fit aspect-[5760/3840] shadow-lg shadow-[#808080] rounded-lg">
          <Image
            src={"/images/p3.jpg"}
            sizes="(max-width: 5760) 100vw, 3840px"
            className="object-cover rounded-lg"
            alt="Peaceful Image"
            fill
            priority
          />
        </div>
      </div>
    </div>
  );
}
