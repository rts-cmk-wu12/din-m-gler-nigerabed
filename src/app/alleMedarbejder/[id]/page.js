import AnsvaligMælgerCard from "@/components/AnsvaligMælgerCard";


export default async function AgentsDetailsPage({ params }) {
  const response = await fetch(
    `https://dinmaegler.onrender.com/agents/${params.id}`
  );
  const allagentsDetails = await response.json();
  //   console.log("allagents Dataaaa", allagentsDetails);
  return (
    <>
            
          <AnsvaligMælgerCard key={allagentsDetails.id} agent={allagentsDetails} />
          <div>
            <h3 className="font-semibold">{allagentsDetails.name}</h3>
            <div className="h-[.2em] w-[3em] bg-black mt-[1em]"></div>
            <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority <br />
             have suffered alteration in some form, by injected humour, or randomised words <br />
              which don't look even slightly believable. <br /> <br />
              There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form by injected humour.</p>
          </div>
          <form action="">
            <h1></h1>
            <div></div>
            <div>
                <label htmlFor="">
                    <input type="text" />
                </label>
                <label htmlFor="">
                    <input type="text" />
                </label>
            </div>
            <label htmlFor="">
                <input type="text" name="" id="" />
            </label>
            <label htmlFor="">
                <textarea name="" id=""></textarea>
            </label>
            <button></button>

          </form>
        
      
    </>
  );
}
