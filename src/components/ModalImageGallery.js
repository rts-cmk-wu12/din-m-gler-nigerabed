"use client";

import { useState } from "react";
import group1 from "../assets/images/Group1.png";
import group2 from "../assets/images/Group2.png";
import group3 from "../assets/images/Group3.png";
import group4 from "../assets/images/Group4.png";

import Image from "next/image";

export default function ModalImageGallery({ BoligDetailsData }) {

  const [openGallery, setOpenGallery] = useState(false)

  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlanOpen, setIsPlanOpen] = useState(false)

//gallery popup
  function handleOpenGallery(){
    setOpenGallery(true)
  }
  function handleCloseGallery(){
    setOpenGallery(false)
  }

function gotoNext(){
  if(currentSlide < BoligDetailsData.images.length - 1){
    setCurrentSlide(currentSlide + 1)
  }
}
function gotoPrevious(){
  if(currentSlide > 0){
    setCurrentSlide(currentSlide - 1)
  }
}

//Plan popUp
function openPlan(){
  setIsPlanOpen(true)
}
function closePlan(){
  setIsPlanOpen(false)
}



  return (
    <>
    
      <section className=" px-[15em] py-[2em]  ">
        <div className="flex justify-between items-center border-b-2 pb-[2em]">
          <div className="font-semibold text-lg">
            <h2>{BoligDetailsData.adress1}</h2>
            <span className="mr-[.3em]">{BoligDetailsData.postalcode}</span>
            <span>{BoligDetailsData.city}</span>
          </div>
          <div className="flex justify-around w-[10em] h-[2em]">
          

            <Image
              src={group1}
              height={20}
              width={20}
              alt="group1"
              className="pr-[1em] h-[1.5em] w-[2.5em]"
              onClick={handleOpenGallery}
            />
            
            
            <Image
              src={group2}
              height={20}
              width={20}
              alt="group1"
              className="pr-[1em]  h-[1.5em] w-[2.5em]"
              onClick={openPlan}
            />
         
        
          
            <Image
              src={group3}
              height={20}
              width={20}
              alt="group1"
              className="pr-[1em]  h-[1.5em] w-[2.5em]"
            />
            
            <Image
              src={group4}
              height={20}
              width={20}
              alt="group1"
              className="h-[1.5em] w-[2em]"
            />
          </div>
          <p className="font-semibold text-xl">Kr. {BoligDetailsData.price}</p>
        </div>
      </section>
       {/* Gallery Popup */}
       {openGallery && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative bg-white max-w-[90%] max-h-[90%] w-[800px] h-[500px] rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={handleCloseGallery}
                className="absolute top-3 right-3 text-white bg-black rounded-full p-2 z-10 hover:bg-red-500"
              >
                ✕
              </button>
              <div className="relative w-full h-full flex justify-center items-center bg-gray-100">
                <button
                  onClick={gotoPrevious}
                  disabled={currentSlide === 0}
                  className={`absolute left-5 p-2 rounded-full bg-black text-white z-10 hover:bg-gray-800 ${
                    currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  &#8592;
                </button>
                <Image
                  src={BoligDetailsData.images[currentSlide].url}
                  alt={`Slide ${currentSlide + 1}`}
                  width={800}
                  height={500}
                  className="max-w-full max-h-full object-contain"
                />
                <button
                  onClick={gotoNext}
                  disabled={currentSlide === BoligDetailsData.images.length - 1}
                  className={`absolute right-5 p-2 rounded-full bg-black text-white z-10 hover:bg-gray-800 ${
                    currentSlide === BoligDetailsData.images.length - 1
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Plan Popup */}
        {isPlanOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative bg-white max-w-[90%] max-h-[90%] w-[800px] h-[500px] rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={closePlan}
                className="absolute top-3 right-3 text-white bg-black rounded-full p-2 z-10 hover:bg-red-500"
              >
                ✕
              </button>
              <div className="flex justify-center items-center h-full bg-gray-100">
                <Image
                  src={BoligDetailsData.floorplan.url}
                  alt="Floorplan"
                  width={800}
                  height={500}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        )}
    </>
  );
}
