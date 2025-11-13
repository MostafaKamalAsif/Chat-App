import Image from "next/image";
import Login from "./Components/Login";

export default function Home() {
  return (
   <>
  <div className="bg-[url('/banner.jpg')] bg-cover bg-center min-h-[800px] py-[100px] w-full">
  
  <Login/>
  
  </div>
   </>
  );
}
