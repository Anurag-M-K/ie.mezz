import BreLunDinn from "@/components/BreLunDinn";
import DeliveryBoyAnimation from "@/components/DeliveryBoyAnimation";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Image from "next/image";
import HowItWorks from "@/components/HowItWorks";
import Foods from "@/components/Foods";
import WhyChoseUs from "@/components/WhyChoseUs";

export default function Home() {
  return (
    <main>
      <DeliveryBoyAnimation/>
      <Foods/>
      <Introduction/>
      <HowItWorks/>
      <WhyChoseUs />
      <Footer />
    </main>
  );
}
