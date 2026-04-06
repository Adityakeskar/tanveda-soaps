import madeInIndiaImg from "@/assets/made-in-india.jpg";

const MadeInIndiaBadge = () => (
  <div className="fixed bottom-4 right-4 z-40 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg border border-border/50 hover:scale-105 transition-all duration-300">
    <img
      src={madeInIndiaImg}
      alt="Make in India"
      className="h-8 md:h-10 w-auto object-contain"
    />
  </div>
);

export default MadeInIndiaBadge;
