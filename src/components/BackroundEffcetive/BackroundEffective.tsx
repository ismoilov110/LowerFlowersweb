const blurEffects = [
    {
        id: 1,
        color: "#43FFD2",
        size: 700,
        top: 80,
        left: -300,
        opacity: 0.18,
    },
    {
        id: 2,
        color: "#7D2253",
        size: 650,
        top: 150,
        right: -250,
        opacity: 0.15,
    },
];

export default function BackgroundEffects() {
    return (
        <>
            {blurEffects.map((blur) => (
                <div
                    key={blur.id}
                    className="absolute rounded-full blur-[220px] "
                    style={{
                        backgroundColor: blur.color,
                        width: blur.size,
                        height: blur.size,
                        top: blur.top,
                        left: blur.left,
                        right: blur.right,
                        opacity: blur.opacity,
                    }}
                />
            ))}
        </>
    );
}