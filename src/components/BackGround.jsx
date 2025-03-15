export default function BackGround() {
  return (
    <div className="w-full h-screen fixed z-[2]">
      <div className="absolute top-[5%] w-full text-xl text-zinc-600 flex justify-center font-semibold py-10">
        Documents
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13vw] md:text-[10vw] lg:text-[6vw] leading-none tracking-tighter font-semibold text-zinc-900">
        Docs.
      </h1>
    </div>
  );
}
