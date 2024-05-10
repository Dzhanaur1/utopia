import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[400px] md:h-[500px] flex justify-center items-center flex-col">
      <h1 className=" text-center text-[40px] lg:text-[80px] mb-[30px]">
        Упс... <span className=" font-coiny ">404</span>!{" "}
      </h1>
      <div>
        <Link
          href="/"
          className=" cursor-pointer transition duration-200 hover:scale-105 inline-block font-coiny text-white bg-black px-[2rem] py-[1rem] rounded-[10px]"
        >
          Вернуться в <span className=" font-coiny">"УТОПИЮ"</span>
        </Link>
      </div>
    </div>
  );
}
