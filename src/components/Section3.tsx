
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Section3() {
    const t = useTranslations("section3")

    const brands = [
        { src: "/logo.png", boxWidth: "w-[60px]", boxHeight: "h-[60px]", logoWidth: 36, logoHeight: 18 },
        { src: "/logo.png", boxWidth: "w-[60px]", boxHeight: "h-[60px]", logoWidth: 36, logoHeight: 18 },
        { src: "/logo.png", boxWidth: "w-[60px]", boxHeight: "h-[60px]", logoWidth: 36, logoHeight: 18 },
        { src: "/logo.png", boxWidth: "w-[60px]", boxHeight: "h-[60px]", logoWidth: 36, logoHeight: 18 },
        { src: "/logo.png", boxWidth: "w-[60px]", boxHeight: "h-[60px]", logoWidth: 36, logoHeight: 18 },
        { src: "/logo.png", boxWidth: "w-[90px]", boxHeight: "h-[90px]", logoWidth: 48, logoHeight: 24 }, //6
        { src: "/logo.png", boxWidth: "w-[120px]", boxHeight: "h-[120]", logoWidth: 108, logoHeight: 68 }, // 7
        { src: "/logo.png", boxWidth: "w-[90px]", boxHeight: "h-[90px]", logoWidth: 48, logoHeight: 24 },//8
        { src: "/logo.png", boxWidth: "w-[60px]", boxHeight: "h-[60px]", logoWidth: 36, logoHeight: 18 },
        { src: "/logo.png", boxWidth: "w-[60px]", boxHeight: "h-[60px]", logoWidth: 36, logoHeight: 18 },
        { src: "/logo.png", boxWidth: "w-[60px]", boxHeight: "h-[60px]", logoWidth: 36, logoHeight: 18 },
        { src: "/logo.png", boxWidth: "w-[60px]", boxHeight: "h-[60px]", logoWidth: 36, logoHeight: 18 },
        { src: "/logo.png", boxWidth: "w-[60px]", boxHeight: "h-[60px]", logoWidth: 36, logoHeight: 18 },
    ];



    return (
        <section className='flex flex-col items-center  bg-[#F7F9FA] overflow-hidden'>
            <h1 className='md:text-[60px] text-[30px] md:w-[1050px] w-[334px] text-center mt-20'>
                {t.rich('title', {
                    brand: (chunks) => (
                        <span className="text-[#107495] font-semibold">{chunks}</span>
                    ),
                })}
            </h1>

            <p className='md:text-[25px] text-[20px] text-[#1A2E3580] text-center md:w-[1135px] w-[334px] mt-8 leading-[35px]'>{t("subtitle")}</p>

            <div className='mt-20'>


                <div className='flex items-center justify-center w-[398px] h-[398px] bg-linear-to-b from-[#DADEE5] via-[#DBE4EE] to-[#DBE6F0] rounded-[200px]'>
                    <div className='flex items-center justify-center w-[316px] h-[316px] rounded-[200px]'
                        style={{ background: 'linear-gradient(to bottom, rgba(5,10,48,0.35), rgba(75,112,162,0.35), rgba(1,129,253,0.35))' }}>

                        <div className='relative w-[215px] h-[215px] bg-linear-to-b from-[#050A30] via-[#1A3262] to-[#57729F] rounded-[200px] flex items-center justify-center'>

                            <div
                                className="absolute w-[460px] h-[196px] rounded-[100px] bg-[#162B591A] backdrop-blur-[25px]"
                            ></div>

                            <div className="absolute left-[327px] w-screen h-[90px] bg-[#162B591A] backdrop-blur-[25px]"></div>
                            <div
                                className="absolute right-[327px] w-screen h-[90px] bg-[#162B591A] backdrop-blur-[25px]"
                            ></div>


                            <div className="absolute z-10 flex items-center justify-center gap-10 w-screen">
                                {[...brands].map((brand, i) => (
                                    <div key={i} className={`flex items-center justify-center rounded-[5px] shrink-0 ${brand.boxWidth} ${brand.boxHeight} bg-linear-to-b from-[#FFFFFF] to-[#DADDE3]`}>
                                        <Image
                                            src={brand.src}
                                            alt=''
                                            width={brand.logoWidth}
                                            height={brand.logoHeight}
                                        />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>


                <div className='relative mx-auto h-[290px] w-1.5 bg-[#DBE5ED]'>
                    <div className='absolute -bottom-14 left-1/2 -translate-x-1/2 w-28 h-28 bg-[#DBE5ED] rounded-full'></div>
                    <Link href="" className='absolute bottom-1/2 left-1/2 -translate-x-1/2 rounded-[50px] text-white text-[20px] font-medium flex items-center justify-center  py-[15px] w-[228px] bg-linear-to-r from-[#1A2E35]  to-[#29ABE2]'>
                        {t("button")}
                    </Link>
                </div>




            </div>


        </section>
    )
}
