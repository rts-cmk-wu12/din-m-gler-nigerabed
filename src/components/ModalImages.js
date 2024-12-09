export function ModalImages({ image }) {
    return (
      <img
        src={`/${image}.jpeg`}
        className="object-cover rounded shadow-lg h-[66vh] w-full"
      />
    );
  }