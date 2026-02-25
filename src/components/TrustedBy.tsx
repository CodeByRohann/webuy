export function TrustedBy() {
    // Array duplicated to create standard infinite scroll effect
    const logos = [
        "Instant Payment", "Free Pickup", "Corporate Asset Handling", "Transparent Pricing", "Fast & Simple Process",
        "Instant Payment", "Free Pickup", "Corporate Asset Handling", "Transparent Pricing", "Fast & Simple Process",
    ];

    return (
        <section className="py-12 border-y border-gray-100 bg-gray-50/50 overflow-hidden flex flex-col items-center">
            <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-8 text-center">
                WeBuy Tech Trust Highlights
            </p>

            <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden">
                {/* Left and Right Fade masks removed as per feedback */}

                <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-16 px-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
                    {logos.map((logo, index) => (
                        <div key={index} className="text-xl md:text-3xl font-black text-gray-400 transition-all duration-300">
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
