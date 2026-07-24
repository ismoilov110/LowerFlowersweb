import { Styles } from "@/Styles/Styles";
import PopularProductCard from "./PopularProductCard";

export default function PopularProducts() {
    return (
        <section className={Styles.container}>
            <div className="mt-20">
                <h1 className=" mb-6 text-5xl text-white font-medium">Популярные Букеты</h1>
                <PopularProductCard />
            </div>
        </section>
    )
}
