import Image from "next/image";
import erfaring from "../assets/images/erfaring.png";
import house from "../assets/images/house.png";
import home from "../assets/images/home.png";
import property from "../assets/images/property.png";
import location from "../assets/images/location.png";
import customer from "../assets/images/customer.png";

export default function MæglerErgaring() {
  return (
    <section className="flex flex-col justify-center items-center h-full mt-[2em] mb-[2em]">
        <div className="flex border-b-2 pb-[2em] ">
      <Image src={erfaring} height={200} width={300} alt="erfaring" />
      <article className="ml-[2em]">
        <h2 className="font-bold text-[1.3em]">Vi har fulgt danskerne hjem i <br /> snart 4 årtier</h2>
        <p className="font-semibold mb-[1em] mt-[1em]">Det synes vi siger noget om os!</p>
        <span className="text-xs">
          It is a long established fact that a reader will be distracted by the <br />
          readable content of a page when looking at its layout. The point of <br />
          using Lorem Ipsum is that it has normal distribution. <br /> <br />
          It is a long established fact that a reader will be distracted by the <br />
          readable content of a page when looking at its layout.
        </span>
        <div className="flex justify-between mt-[1.5em]">
          <div className="flex justify-center items-center">
          <Image src={house} height={40} width={40} alt="house" />
            <div className="ml-[1em]">
              <p className="font-bold">4829</p>
              <span  className="text-xs">boliger solgt</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
          <Image src={home} height={40} width={40} alt="home" />
            <div  className="ml-[1em]">
              <p className="font-bold">156</p>
              <span  className="text-xs">boliger til salg</span>
            </div>
          </div>
        </div>
      </article>
      </div>
  
      <div className="flex items-center mt-[1em]">
        <div className="flex ">
        <Image className="h-[2em]" src={property} height={25} width={25} alt="property" />
            <div className="ml-[1em]">
                <h3 className="font-semibold">Bestil et salgstjek</h3>
                <span className="text-xs">Med et Din Mægler Salgstjek <br /> bliver du 
                 opdateret på værdien <br /> af din bolig.</span>
            </div>
        </div>
        <div className="flex justify-center items-start m-[2em]">
        <Image src={location} height={25} width={25} alt="location" />
            <div className="ml-[1em]">
                <h3 className="font-semibold">74 butikker</h3>
                <span className="text-xs">Hos Din Mægler er din bolig til salg <br />
                 i alle vores 74 butikker,<br />
                 som er fordelt rundt om i Danmark.</span>
            </div>
        </div>
        <div className="flex m-[2em]">
        <Image className="h-[2em]" src={customer} height={25} width={25} alt="customer" />
            <div className="ml-[1em]">
                <h3 className="font-semibold">Tilmeld køberkartotek</h3>
                <span className="text-xs">Når du er tilmeldt vores køberkartotek,<br />
                 bliver du kontaktet 
                inden en ny <br /> bolig bliver annonceret.</span>
            </div>
        </div>
      </div>
    </section>

  );
}
