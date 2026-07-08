import HeroFlower from "@/assets/Img/Flower.img.png";
export default function HeroImage() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[30%] z-10 pointer-events-none select-none">
        <img src={HeroFlower} alt="Flower"  className="w-[950px] xl:w-[1150px] 2xl:w-[1300px] max-w-none object-cover" />
    </div>
  )
}
