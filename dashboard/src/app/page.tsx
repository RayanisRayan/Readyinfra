"use client";
import Image from "next/image";
import Header from "@/components/Header";
import InstancesMain from "@/components/InstancesMain";
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-start p-0">
      <Header />
      <InstancesMain/>
    </div>
    
  );
}
