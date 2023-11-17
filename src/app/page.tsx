import BreLunDinn from "@/components/BreLunDinn";
import DeliveryBoyAnimation from "@/components/DeliveryBoyAnimation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OurMission from "@/components/OurMission";
import OurVision from "@/components/OurVision";
import Rates from "@/components/Rates";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <DeliveryBoyAnimation/>
      <BreLunDinn />
      <Rates />
      <OurVision />
      <OurMission />
      <Footer />
    </main>
  );
}
