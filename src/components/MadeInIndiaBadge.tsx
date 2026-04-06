import madeInIndiaImg from "@/assets/made-in-india.jpg";

const MadeInIndiaBadge = () => (
  <div className="fixed bottom-4 right-4 z-40">
    <img
      src={madeInIndiaImg}
      alt="Made in India"
      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover shadow-lg border-2 border-background/80 opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
    />
  </div>
);

export default MadeInIndiaBadge;
