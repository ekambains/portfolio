import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-max max-w-screen">
      <div className="max-w-[600px] sm:max-w-2xl sm:px-8 sm:py-8 px-5 py-5">
        <Navbar />
        <Intro />
      </div>
    </div>
  );
}
