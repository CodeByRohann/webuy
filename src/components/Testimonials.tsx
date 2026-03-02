import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "WeBuy Tech handled our office relocation perfectly. They offered a bulk quote for 50+ mixed laptops within an hour and picked them up the very next day. Immediate IMPS payment was a huge plus.",
        image: "https://i.pravatar.cc/150?img=68",
        name: "Vikram Sharma",
        role: "IT Director",
    },
    {
        text: "Selling my old MacBook Pro was incredibly hassle-free. The quote was transparent, significantly higher than exchange offers, and the whole process took less than 24 hours.",
        image: "https://i.pravatar.cc/150?img=32",
        name: "Priya Patel",
        role: "Freelance Designer",
    },
    {
        text: "Outstanding service. We had several outdated workstations and servers. They completely wiped the data securely on-site before taking the hardware. Highly trustworthy.",
        image: "https://i.pravatar.cc/150?img=33",
        name: "Arjun Reddy",
        role: "Systems Administrator",
    },
    {
        text: "I contacted them via WhatsApp and got a response instantly. The pickup executive arrived exactly on time. Easiest way to monetise old tech in the city.",
        image: "https://i.pravatar.cc/150?img=56",
        name: "Rohan Desai",
        role: "Startup Founder",
    },
    {
        text: "Our agency upgrades Apple gear every two years. WeBuy Tech consistently offers the best buyback value compared to any other local or online vendor we've tried.",
        image: "https://i.pravatar.cc/150?img=48",
        name: "Ananya Iyer",
        role: "Creative Director",
    },
    {
        text: "Professional, fast, and secure. They dismantled and bought our entire call center's old desktop setups without disrupting our daily operations. 10/10.",
        image: "https://i.pravatar.cc/150?img=11",
        name: "Mohammed Tariq",
        role: "Operations Head",
    },
    {
        text: "The data destruction certificate gave our compliance team peace of mind. On top of that, the financial return for our scrap IT hardware was excellent.",
        image: "https://i.pravatar.cc/150?img=5",
        name: "Neha Gupta",
        role: "Compliance Officer",
    },
    {
        text: "I was skeptical about selling my assembled gaming PC, but they valued individual components like the GPU and RAM fairly and paid cash on the spot.",
        image: "https://i.pravatar.cc/150?img=12",
        name: "Karan Singh",
        role: "Software Engineer",
    },
    {
        text: "Superb experience overall. No haggling or sudden price drops at the time of pickup. The price quoted on WhatsApp was exactly what was paid into my account.",
        image: "https://i.pravatar.cc/150?img=26",
        name: "Sneha Nair",
        role: "Marketing Manager",
    },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
    return (
        <section id="clients" className="py-24 lg:py-32 bg-[#09090b] relative border-t border-white/10 overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[140px] transform-gpu will-change-transform opacity-30 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-700/10 rounded-full blur-[150px] transform-gpu will-change-transform opacity-20 pointer-events-none"></div>

            <div className="absolute inset-0 noise-bg opacity-[0.15] mix-blend-overlay"></div>

            <div className="container z-10 mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
                >
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm">
                            <span className="text-[12px] font-bold tracking-[0.15em] uppercase text-gray-300">Testimonials</span>
                        </div>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
                        What our clients say
                    </h2>
                    <p className="mt-5 text-gray-400 text-lg md:text-xl font-light">
                        Real feedback from companies and individuals who have sold their IT assets to us.
                    </p>
                </motion.div>

                <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
                    <TestimonialsColumn testimonials={firstColumn} duration={25} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={28} />
                </div>
            </div>
        </section>
    );
}
