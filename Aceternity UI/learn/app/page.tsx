import { BackgroundBeams } from "@/components/background-beams";
import { ContainerScroll } from "@/components/container-scroll-animation";
import { FlipWords } from "@/components/flip-words";
import { GlowingEffect } from "@/components/glowing-effect";

export default function Home() {
  return (
    <>
      <BackgroundBeams />
      <div className="flex flex-col justify-center items-center min-h-screen w-full bg-black font-extrabold px-4">
        <header>
          {/* <h1 className="text-6xl md:text-7xl bg-gradient-to-b pb-7 from-neutral-200 to-neutral-600 bg-clip-text text-transparent text-center"> */}
            <FlipWords words={["NIKHIL ACHALE", "WEB", "DEVELOPER"]} />
          {/* </h1> */}
        </header>
        <p className="text-neutral-400 max-w-lg mx-auto my-4 text-base leading-relaxed text-center relative z-10">
        I’m Nikhil Achale, a passionate MERN stack developer from NIT Patna. I specialize in building dynamic, responsive web applications using MongoDB, Express.js, React, and Node.js. As a freelancer, I’ve worked on diverse projects, honing my skills in both front-end and back-end development.
        <br />

I love solving complex problems and bringing ideas to life through clean, efficient code. I’m always eager to learn new technologies and stay updated with the latest trends in web development. Whether it’s crafting a sleek user interface or optimizing server-side performance, I take pride in delivering high-quality solutions that meet and exceed client expectations.
        </p>
      </div>
      <ContainerScroll titleComponent={<h2 className="mb-10">Scroll Down</h2>}>
      <FlipWords words={["NIKHIL ACHALE", "WEB", "DEVELOPER"]} />
      </ContainerScroll>
      <GlowingEffect color="blue" intensity={0.5}>
  <div className="text-center">
    <h1>Nikhil here</h1>
  </div>
</GlowingEffect>
    </>
  );
}