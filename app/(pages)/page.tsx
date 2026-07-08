import styles from "@/styles/main.module.css";
import AnimatedWrapper from "@/components/aos/aoswrapper";
import Image from "next/image";
import Button from "@/components/ui/button";
import border from "@/styles/components/button.module.css";
import Link from "next/link";
import { BsFillPencilFill } from "react-icons/bs";
import ButtonLink from "@/components/ui/button-link";
import myPics from "@/data/mypics";
import ContactForm from "./contactform";

export const metadata = {
    title: "Sky Pierce | Official Website | Model | Actress",
    description:
        "Sky Pierce is a talented model and actress. Explore her portfolio to view recent shoots, commissions, and featured collaborations across photography, videography, and creative direction.",
    keywords: [
        "Sky Pierce, Model, Actress, Portfolio, Photography, Videography, Creative Direction, Adult Content, Professional Standards, Consent, Safety, Booking, Collaboration",
    ],
    alternates: {
        canonical: process.env.NEXT_PUBLIC_WEBSITE_URL,
    },
    openGraph: {
        title: "Sky Pierce | Official Website | Model | Actress",
        description:
            "Sky Pierce is a talented model and actress. Explore her portfolio to view recent shoots, commissions, and featured collaborations across photography, videography, and creative direction.",
        url: process.env.NEXT_PUBLIC_WEBSITE_URL,
        siteName: "Sky Pierce Official Website",
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/all-images/mypics/IMG_5126.png`,
                width: 1200,
                height: 630,
                alt: "Sky Pierce | Official Website | Model | Actress",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Sky Pierce | Official Website | Model | Actress",
        description:
            "Sky Pierce is a talented model and actress. Explore her portfolio to view recent shoots, commissions, and featured collaborations across photography, videography, and creative direction.",
        images: [
            `${process.env.NEXT_PUBLIC_WEBSITE_URL}/all-images/mypics/IMG_5126.png`,
        ],
    },
};


export default function Home() {
    return (
        <>
            <section className={`w-full h-[calc(100vh-115px)] text-[var(--white-color)] ${styles.section} ${styles.slideBg}`}>
                <div className={`${styles.sectionIn} flex`}>
                    <div className={`w-[500px] flex flex-col gap-5 ${styles.textShadow}`}>

                        <AnimatedWrapper>
                            <h1 className="font-extrabold text-[clamp(20px,4vw,40px)]">
                                Welcome to my official website, I'm a talented model and actress.
                            </h1>
                        </AnimatedWrapper>
                        <AnimatedWrapper>
                            <p>
                                Explore my portfolio to view recent shoots, commissions, and featured
                                collaborations across photography, videography, and creative direction.
                                I produce high-quality adult-oriented content with a focus on consent, safety,
                                and professional standards. For bookings, rates, or project proposals,
                                email <Link href="mailto:skypierceevip@gmail.com" className="text-[var(--white-color)] hover:underline">skypierceevip@gmail.com </Link>,
                                use the booking form on my site, or DM on my
                                social media profiles. All collaborators must provide valid age verification and sign standard release and consent
                                forms prior to any session.
                            </p>
                        </AnimatedWrapper>
                        <ButtonLink />
                    </div>
                </div>
            </section>

            <section id="mybio" className={`w-full min-h-[300px] ${styles.section} py-15 ${styles.bgImage}`}>
                <div className={`${styles.sectionIn}`}>
                    <div className="flex justify-center">
                        <div className="w-[97%] flex gap-5 flex-wrap max-[1000px]:flex-col">

                            <div className={`w-[600px] ${styles.waterMarkBg} p-6 rounded-lg max-[1000px]:w-full`}>
                                <h2 className="text-center p-5 bg-[var(--primary-color)] text-white font-bold text-lg rounded-lg">
                                    My Bio
                                </h2>
                                <AnimatedWrapper>
                                    <p className="mt-4">
                                        My Name is Sky Pierce, I'm Adult Actress, Model & Entertainer, Born in Canada.
                                        I love travelling the world shooting all the best content for my fans.
                                        I try to enjoy all the little things in life, go on adventures to make amazing
                                        memories and share them with you.  This is where you will find all of my content (Pics-Vids),
                                        social media links, tour dates, exclusive fan updates & more
                                    </p>
                                </AnimatedWrapper>

                                <AnimatedWrapper>
                                    <p className="mt-4">
                                        I had the Honor of being Nominated for AVN's "BEST New Starlet 2021"
                                        As well as working for the likes of Hustler, Brazzers, Vixen, EvilAngel,
                                        BlackedRaw, Deeper, & More. Stay tuned here for all my newest updated content and Links.
                                    </p>
                                </AnimatedWrapper>

                                <AnimatedWrapper>
                                    <div className="mt-6">
                                        <Link href="mailto:skypierceevip@gmail.com">
                                            <Button
                                                label="Inquiry"
                                                icon={<BsFillPencilFill />}
                                                title="Inquiry"
                                                className={`bg-[var(--primary-color)] text-[var(--white-color)] ${border.buttonBorder}`}
                                            />
                                        </Link>
                                    </div>
                                </AnimatedWrapper>
                            </div>

                            <AnimatedWrapper animation="flip-left" className="w-[500px] h-[580px] flex-1 overflow-hidden rounded-lg max-[1000px]:w-full">
                                <Image
                                    src="/all-images/body-pix/skypierce.PNG"
                                    width={280}
                                    height={180}
                                    alt="Skypierce Picture"
                                    className="w-full h-full object-cover"
                                />
                            </AnimatedWrapper>
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className={`w-full min-h-[300px] ${styles.section} py-15`}>
                <div className={`${styles.sectionIn}`}>

                    <div className="flex justify-center">
                        <div className="w-[97%] flex gap-5 flex-wrap max-[1000px]:flex-col">

                            <div className={`w-[600px] ${styles.waterMarkBg} p-6 rounded-lg max-[1000px]:w-full`}>
                                <h2 className="text-center p-5 bg-[var(--primary-color)] text-white font-bold text-lg rounded-lg">
                                    My Portfolio
                                </h2>

                                <AnimatedWrapper>
                                    <h3 className="mt-4 text-center underline text-2xl">Measurements</h3>

                                    <ul className="mt-2 text-center">
                                        <li>Height: 5'4" *Weight: 115 lb *Bra 34B</li>
                                        <li>Waist: 24 *Dress: 1 (XS) *Shoe: 6.5</li>
                                        <li>Eyes: Blue *Hair: Blonde *Astrology Sign: Sagittarius</li>
                                    </ul>
                                </AnimatedWrapper>

                                <div className="flex gap-1 flex-wrap mt-6">
                                    {myPics.slice(0, 2).map((item, idx) => (
                                        <AnimatedWrapper key={idx} animation="zoom-in" className="w-[250px] h-[250px] overflow-hidden rounded-lg grow">
                                            <Image
                                                src={item.src}
                                                width={280}
                                                height={180}
                                                alt={item.alt}
                                                className="w-full h-full object-cover"
                                            />
                                        </AnimatedWrapper>
                                    ))}
                                </div>

                                <div className="mt-6">
                                    <Link href="mailto:skypierceevip@gmail.com">
                                        <Button
                                            label="Book a Session"
                                            icon={<BsFillPencilFill />}
                                            title="Book a Session"
                                            className={`bg-[var(--primary-color)] text-white ${border.buttonBorder}`}
                                        />
                                    </Link>
                                </div>

                            </div>

                            <div className="w-[500px] min-h-[580px] flex-1 overflow-hidden rounded-lg flex gap-1 flex-wrap max-[1000px]:w-full">

                                {myPics.slice(2, 8).map((item, idx) => (
                                    <AnimatedWrapper key={idx} animation="zoom-in" className="w-[250px] h-[250px] overflow-hidden rounded-lg grow">
                                        <Image
                                            src={item.src}
                                            width={280}
                                            height={180}
                                            alt={item.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </AnimatedWrapper>
                                ))}

                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section id="schedule" className={`w-full min-h-[300px] ${styles.section} py-15 ${styles.bgImage}`}>
                <div className={`${styles.sectionIn}`}>
                    <div className="flex justify-center">
                        <div className="w-[97%] flex gap-5 flex-wrap max-[1000px]:flex-col">

                            <div className={`w-[600px] ${styles.waterMarkBg} p-6 rounded-lg max-[1000px]:w-full`}>
                                <h2 className="text-center p-5 bg-[var(--primary-color)] text-white font-bold text-lg rounded-lg">
                                    Schedule
                                </h2>

                                <AnimatedWrapper>
                                    <h3 className="mt-4 text-center underline text-2xl uppercase font-bold">Tour Schedule</h3>

                                    <ul className="mt-2 text-center">
                                        <li>Location: Seattle - July 7-9</li>
                                        <li>Location: Los Angeles - September 7-13</li>
                                        <li>Location: San Francisco - September 17-19</li>
                                    </ul>
                                </AnimatedWrapper>

                                <AnimatedWrapper>
                                    <h3 className="mt-4 text-center underline text-2xl uppercase font-bold">Moments</h3>

                                    <ul className="mt-2">
                                        <li>1 hour - $1,200</li>
                                        <li>1 hour vip - $2,100</li>
                                        <li>2 hours - $1,800</li>
                                        <li>2 hours vip - $2,700</li>
                                        <li>3 hours - $2,600</li>
                                        <li>3 hours vip - $3,500</li>
                                        <li>4 hours - $3,400</li>
                                        <li>4 hours vip - $4,300</li>
                                        <li>6 hours - $5,000</li>
                                        <li>6 hours vip - $5,900</li>
                                    </ul>
                                </AnimatedWrapper>

                                <AnimatedWrapper>
                                    <h3 className="mt-4 text-center underline text-2xl uppercase font-bold">Fly Me To You</h3>
                                    <p>If you don't see your city on my schedule. I'm happy to fly to you.</p>

                                    <ul className="mt-2">
                                        <li>6 hrs minimum - $6,500</li>
                                        <li>Overnight - $8,500</li>
                                        <li>24 hrs - $12,000</li>
                                        <li>48 hrs - $27000</li>
                                    </ul>

                                    <div className="mt-2">
                                        <p>All travel and accommodation costs are covered by you.</p>
                                        <p>Minimum requirements for:</p>
                                    </div>

                                    <ul className="mt-2">
                                        <li>West Coast travel is overnight</li>
                                        <li>Mid West and East Coast travel - 6hrs</li>
                                    </ul>
                                </AnimatedWrapper>

                                <div className="mt-6 flex justify-center">
                                    <Link href="mailto:skypierceevip@gmail.com">
                                        <Button
                                            label="Message Me"
                                            icon={<BsFillPencilFill />}
                                            title="Message Me"
                                            className={`bg-[var(--primary-color)] text-white ${border.buttonBorder}`}
                                        />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="bookme" className={`w-full min-h-[300px] ${styles.section} py-15 `}>
                <div className={`${styles.sectionIn}`}>
                    <div className="flex justify-center">
                        <div className="w-[97%] flex gap-5 flex-wrap max-[1000px]:flex-col">

                            <div className={`w-[600px] ${styles.waterMarkBg} p-6 rounded-lg max-[1000px]:w-full`}>
                                <h2 className="text-center p-5 bg-[var(--primary-color)] text-white font-bold text-lg rounded-lg">
                                    Book Me
                                </h2>
                                <AnimatedWrapper>
                                    <h3 className="mt-4 text-center underline text-2xl">Booking Policy</h3>
                                    <p className="mt-4">
                                        A 50% deposit is required to secure all booking dates, regardless of location.
                                        Bookings are not confirmed until the deposit has been received.
                                        Accepted payment methods include Venmo, Bitcoin (BTC), Apple Pay, E-Transfer,
                                        Bank Transfer, and Chime.
                                    </p>

                                    <p className="mt-4">
                                        If a client chooses to cancel a confirmed booking, a cancellation fee of 35% of
                                        the amount already paid will apply. The remaining balance of the deposit will be refunded to the original payment method.
                                    </p>
                                </AnimatedWrapper>

                                <AnimatedWrapper>
                                    <h3 className="mt-4 text-center underline text-2xl">Rescheduling Policy</h3>
                                    <p className="mt-4">
                                        Clients wishing to reschedule a confirmed booking must provide notice as soon as possible. Rescheduling
                                        requests are subject to availability and are not guaranteed. Any fees associated with rescheduling will be
                                        discussed and agreed upon before a new date is confirmed.
                                    </p>
                                </AnimatedWrapper>

                                <AnimatedWrapper>
                                    <h3 className="mt-4 text-center underline text-2xl">Travel & Location</h3>
                                    <p className="mt-4">
                                        The 50% deposit requirement applies to all bookings regardless of location. Any travel, accommodation,
                                        venue, or related expenses must be discussed and agreed upon before the booking is confirmed.
                                    </p>

                                    <p className="mt-4">
                                        For international bookings, clients are responsible for ensuring all necessary travel documents, visas, and permissions
                                        are in place. The client will also be responsible for any additional costs or fees associated with international travel.
                                    </p>

                                    <p className="mt-4">
                                        By submitting a booking request and making a payment, the client agrees to these booking terms.
                                    </p>
                                </AnimatedWrapper>

                                <AnimatedWrapper>
                                    <div className="mt-6">
                                        <Link href="mailto:skypierceevip@gmail.com">
                                            <Button
                                                label="Inquiry"
                                                icon={<BsFillPencilFill />}
                                                title="Inquiry"
                                                className={`bg-[var(--primary-color)] text-[var(--white-color)] ${border.buttonBorder}`}
                                            />
                                        </Link>
                                    </div>
                                </AnimatedWrapper>
                            </div>

                            <AnimatedWrapper animation="flip-left" className="w-[500px] min-h-[580px] flex-1 overflow-hidden rounded-lg max-[1000px]:w-full">
                                <ContactForm />
                            </AnimatedWrapper>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
