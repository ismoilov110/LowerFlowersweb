"use client";

import { useEffect, useRef, useState } from "react";
import LeaveDecorition from "./LeaveDecorition";
import leafImg from "@/assets/Img/image 144.png";
import DetialPaymentInfo from "./DetialPaymentInfo";
import ReviewsPanel from "./ReviewsPanel";

type TabKey = "delivery" | "reviews";

const TABS: { key: TabKey; label: string }[] = [
  { key: "delivery", label: "Доставка и оплата" },
  { key: "reviews", label: "Отзывы (0)" },
];

export default function DetialProductPayment() {
  const [activeTab, setActiveTab] = useState<TabKey>("delivery");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const tabRefs = useRef<Record<TabKey, HTMLButtonElement | null>>({
    delivery: null,
    reviews: null,
  });

  useEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeTab]);

  return (
    // 1) Butun section shu yerda - relative + overflow-hidden
    <div className="relative min-h-[500px] sm:min-h-[580px] overflow-hidden pb-10 sm:pb-14">
      {/* 2) Barg butun sectionga nisbatan fon sifatida joylashadi */}
      {/* <LeaveDecorition imageSrc={leafImg} /> */}

      {/* 3) Haqiqiy kontent (tablar + panellar) alohida qatlamda, z-index bilan barg ustida */}
      <div className="relative z-10">
        <div className="relative flex justify-center gap-6 sm:gap-10 border-b border-white/10">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              ref={(el) => {
                tabRefs.current[tab.key] = el;
              }}
              onClick={() => setActiveTab(tab.key)}
              className={`relative cursor-pointer pb-4 text-sm font-bold uppercase tracking-wider transition-colors duration-300 ${activeTab === tab.key
                ? "text-white"
                : "text-[#43FFD2] hover:text-white/70"
                }`}
            >
              {tab.label}
            </button>
          ))}

          <span
            className="absolute -bottom-px h-[2px] rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-[0_0_12px_rgba(52,224,166,0.6)] transition-all duration-300 ease-out"
            style={{ left: indicator.left, width: indicator.width }}
          />
        </div>
        {/* Shartli render - asosiy ozgarish shu yerda */}
         {activeTab === "delivery" && <DetialPaymentInfo/>}
         {activeTab === "reviews" && <ReviewsPanel/>}

        {/* Keyingi qadamda shu yerga DeliveryInfoPanel / ReviewsPanel qo'shiladi */}
        {/* <DetialPaymentInfo /> */}
      </div>
    </div>
  );
}