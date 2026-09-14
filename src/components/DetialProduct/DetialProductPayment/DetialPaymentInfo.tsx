import { DetialPaymentDataInfo, DeliveryConditionsInfo } from "@/Constants/Data";

export default function DetialPaymentInfo() {
  return (
    <section className="mt-10 space-y-8 text-sm leading-relaxed text-white">
      {DetialPaymentDataInfo.map((block, index) => (
        <div key={index}>
          <h3 className="font-bold text-[20px] leading-none uppercase text-[#D978AC] mb-4">
            {block.title}
          </h3>
          <ul className="space-y-2 list-disc list-inside text-white/90">
            {block.items.map((items, i) => (
              <li key={i}>
                {items.bold && <span className="font-bold">{items.bold} </span>}
                {items.text}{" "}
                {items.highlight && (
                  <span className="text-emerald-400">{items.highlight}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div>
        <h3 className="font-bold text-[20px] leading-none uppercase text-[#D978AC] mb-4">
          {DeliveryConditionsInfo.title}
        </h3>
        <p className="text-white/90">
          {DeliveryConditionsInfo.text}{" "}
          <span className="text-emerald-400">{DeliveryConditionsInfo.highlight}</span>
          <br />
          {DeliveryConditionsInfo.extra}
        </p>
      </div>
    </section>
  );
}