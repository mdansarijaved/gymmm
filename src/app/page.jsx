
import Up from "@/components/Up";
import Body from "@/components/body";


import Heading from "@/components/heading";
import NavBar from "@/components/navBar";
import WhatsButton from "@/components/whatsButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div>
      <NavBar/>
      <Heading/>
      <WhatsButton/>
      <Body/>
      <Up/>
    
    </div>
    </>
  );
}
