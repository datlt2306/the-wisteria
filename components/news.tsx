"use client";
import Image from "next/image";
import Link from "next/link";
import { VscCalendar } from "react-icons/vsc";
const NewPages = () => {
    return (
        <section className="xl:px-10">
            <h2 className="text-center text-5xl my-5">TIN TỨC</h2>
            <p className="text-center font-semibold mb-10">
                CẬP NHẬT TIẾN ĐỘ, THÔNG TIN DỰ ÁN
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                    <div className="border border-solid  p-2">
                        <Link href="">
                            <Image
                                src="/img/SG_PV_07_Shophouse.jpg"
                                alt=""
                                layout="responsive"
                                width={300}
                                height={300}
                                objectFit="contain"
                            />
                        </Link>
                    </div>
                    <h5 className="mt-3 font-bold">
                        Tiến độ dự án chung cư The Wisteria tháng 9/2023
                    </h5>
                    <div className="text-sm">
                        <div className="flex gap-5 items-center my-2">
                            <Link href="#" className="text-red-500 font-extrabold text-sm ">
                                Tin tức dự án
                            </Link>
                            <div className="flex items-center gap-2 text-gray-400">
                                <VscCalendar />
                                <p className="font-sans">29/08/2023</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm font-sans">
                        Công ty Cổ phần Thương mại và Xây dựng (WTO) tên cũ là Vietracimex
                        là một…
                    </p>
                </div>
                <div>
                    <div className="border border-solid  p-2">
                        <Link href="">
                            <Image
                                src="/img/SG_PV_07_Shophouse.jpg"
                                alt=""
                                layout="responsive"
                                width={300}
                                height={300}
                                objectFit="contain"
                            />
                        </Link>
                    </div>
                    <h5 className="mt-3 font-bold">
                        Tiến độ dự án chung cư The Wisteria tháng 9/2023
                    </h5>
                    <div className="text-sm">
                        <div className="flex gap-5 items-center my-2">
                            <Link href="#" className="text-red-500 font-extrabold text-sm ">
                                Tin tức dự án
                            </Link>
                            <div className="flex items-center gap-2 text-gray-400">
                                <VscCalendar />
                                <p className="font-sans">29/08/2023</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm font-sans">
                        Công ty Cổ phần Thương mại và Xây dựng (WTO) tên cũ là Vietracimex
                        là một…
                    </p>
                </div>
                <div>
                    <div className="border border-solid  p-2">
                        <Link href="">
                            <Image
                                src="/img/SG_PV_07_Shophouse.jpg"
                                alt=""
                                layout="responsive"
                                width={300}
                                height={300}
                                objectFit="contain"
                            />
                        </Link>
                    </div>
                    <h5 className="mt-3 font-bold">
                        Tiến độ dự án chung cư The Wisteria tháng 9/2023
                    </h5>
                    <div className="text-sm">
                        <div className="flex gap-5 items-center my-2">
                            <Link href="#" className="text-red-500 font-extrabold text-sm ">
                                Tin tức dự án
                            </Link>
                            <div className="flex items-center gap-2 text-gray-400">
                                <VscCalendar />
                                <p className="font-sans">29/08/2023</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm font-sans">
                        Công ty Cổ phần Thương mại và Xây dựng (WTO) tên cũ là Vietracimex
                        là một…
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NewPages;
