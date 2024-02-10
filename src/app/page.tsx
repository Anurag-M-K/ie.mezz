import BreLunDinn from "@/components/BreLunDinn";
import DeliveryBoyAnimation from "@/components/DeliveryBoyAnimation";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Image from "next/image";
import HowItWorks from "@/components/HowItWorks";
import Foods from "@/components/Foods";
import WhyChoseUs from "@/components/WhyChoseUs";
import Slider from "@/components/Slider";
import { breakFast, lunch , dinner } from "@/utils/constantImages";
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";


export default function Home() {
  return (
    <main>
      <DeliveryBoyAnimation/>
<FAQ/>
        <h1 className="text-center text-3xl font-bold my-3">Our Items</h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-3">
<div className="flex justify-center items-center"> 
      <Slider title={"BreakFast"} breakFast={breakFast}/>
</div>
<div className="flex justify-center items-center">
      <Slider title={"Lunch"} breakFast={lunch}/>
</div>
<div className="flex justify-center items-center">
      <Slider title={"Dinner"} breakFast={dinner}/>
</div>
      </div>
      <Introduction/>
      <HowItWorks/>
      <WhyChoseUs />
      <Feedback/>
      <Footer />
    </main>
  );
}
