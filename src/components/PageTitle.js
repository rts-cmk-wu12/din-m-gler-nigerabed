export default function PageTitle({title}) {
  return (
    <div className="relative bg-[url('/architecture.jpg')] h-[8em] bg-cover bg-center ">
      <div className="absolute inset-0 bg-[#162A41] opacity-80"></div>

      <h2 className="absolute inset-0 flex justify-center items-center text-white font-bold text-[2.5em] z-10">
        {title}
      </h2>
    </div>
  );
}
