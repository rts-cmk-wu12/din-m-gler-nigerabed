import HeroContainer from "@/components/HeroContainer";
import Medarbejdersection from "@/components/MedarbejderSection";
import MæglerErgaring from "@/components/MæglerErfaring";
import SalgsProcessen from "@/components/SalgsProcessen";
import UdvalgteBoliger from "@/components/UdvalgteBoliger";

export default function Home() {
  return (
    <>
      <main>
        <HeroContainer />
        <MæglerErgaring />
        <UdvalgteBoliger />
        <Medarbejdersection />
        <SalgsProcessen />
      </main>
    </>
  );
}
