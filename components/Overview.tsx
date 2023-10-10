"use client"

import Image from 'next/image';
import { useState } from 'react';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { BsDownload } from 'react-icons/bs';
import { VscTriangleRight } from 'react-icons/vsc';
import Modal from './ModelOverview';


const Overview = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleImageClick = () => {
        setShowVideo(true);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDownloadButtonClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-2 pt-20 pb-24 pl-2 pr-2  bg-[#25334c] ">
                <div className='mb-11 pr-10'>
                    <div>
                        <div>
                            <b className='@apply text-[40pt] text-[#dac37f] font' style={{ fontFamily: "M96" }}>THE WISTERIA</b><br />
                            <b className='text-white mt-3 @apply text-[18pt]'>MỘT SIÊU PHẨM SẮP RA MẮT</b>
                        </div>
                        <br />
                        <div >
                            <label htmlFor="" className=' text-yellow' >Dự án chung cư cao cấp The Wisteria </label>
                            <label htmlFor="" className=' text-white'>
                                được triển khai xây dựng trong quần thể dự án Hinode Royal Park
                                bao gồm 840 căn hộ tại 3 block (A, B, C). Sản phẩm chủ đạo:
                                Căn hộ chung cư, căn hộ Duplex, Penhouse, Shophouse.
                            </label>
                        </div>
                        <br />
                        <div>
                            <label htmlFor="" className=' text-white'>
                                Hãy bắt đầu những trải nghiệm mới mẻ & cơ hội đầu tư vô cùng
                                hấp dẫn tại
                            </label>
                            <label htmlFor="" className=' text-yellow'> The Wisteria.</label>
                        </div>
                        <br />
                        <div>
                            <div>
                                <button className='font-bold flex gap-2 items-center bg-[#11395b] text-[16x] hover:bg-[#1e5896] px-3 py-2 text-white border border-solid border-white float-left mr-3'>
                                    <BsFillTelephoneOutboundFill />
                                    <a href="tel:034.469.9191"><span>Gọi hotline</span></a>
                                </button>
                            </div>

                            <div>
                                <button onClick={handleDownloadButtonClick} className='font-bold flex gap-2 items-center bg-[#f00000] text-[16px] hover:bg-[#11395b] px-3 py-2 text-white border border-solid border-white'>
                                    <BsDownload />
                                    <span>TẢI BẢNG GIÁ</span>
                                </button>

                                <Modal
                                    isOpen={isModalOpen}
                                    onClose={closeModal}
                                    message="Đây là thông báo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <button>
                            <div className="relative">
                                {!showVideo ? (
                                    <>
                                        <img
                                            src="https://wisteria.vn/wp-content/uploads/2023/08/phoi-canh-2.webp"
                                            alt="Ảnh đại diện"
                                            className="object-cover w-full @apply h-[450px]"
                                            onClick={handleImageClick}
                                        />
                                        <div className="@apply absolute mt-[-1.5em] ml-[-1.5em] mr-0 mb-0 left-[65%] top-[65%] leading-[3] w-[2.8em] pl-[0.2em] text-center box-content pointer-events-none rounded-[50%] transition-transform duration-300 text-[70px] hover:scale-200">
                                            <div className="group">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 192 512">
                                                    <style dangerouslySetInnerHTML={{ __html: "svg{fill:#ffffff}" }} />
                                                    <path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z" />
                                                </svg>
                                            </div>
                                        </div>

                                    </>

                                ) : (
                                    <div className='w-full'>
                                        <iframe
                                            width="100%"
                                            height="450px"
                                            src="https://www.youtube.com/embed/S5GB0PMlxW8?si=l2jdi3rLsW_X3asV"
                                            title="YouTube video player"
                                            frameBorder={0}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        />
                                    </div>
                                )}
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 @apply pb-[50px] @apply bg-[#223452] ">
                <div className="">
                    <Image
                        src="https://wisteria.vn/wp-content/uploads/2023/08/phoi-canh-2.webp"
                        alt=""
                        layout='responsive'
                        width={300}
                        height={450}
                        className='@apply border-[4px] border-solid border-[#ffffff]'
                    />
                </div>
                <div className="p-6">
                    <div className='@apply text-center' >
                        <b className='@apply text-[30pt] text-[#dac37f]' style={{ fontFamily: 'M96' }}>
                            TỔNG QUAN DỰ ÁN
                        </b>
                        <br />
                        <b className='@apply text-[15pt] text-[#ffffff]  @apply mx-[0] my-[30px] pb-[50px]'>
                            THE WISTERIA
                        </b>
                    </div>
                    <div className="W_html mt-6  @apply w-['100%'] ">
                        <table className="@apply w-full border-collapse" >
                            <tbody className='leading-7 pl-1 ' >
                                <tr className=''>
                                    <td className='text-white @apply border border-solid border-[white] pl-1' >Tên dự án	</td>
                                    <td className='text-yellow @apply border border-solid border-[white] pl-1'>Chung cư THE WISTERIA</td>
                                </tr>
                                <tr>
                                    <td className='text-yellow @apply border border-solid border-[white] pl-1'>Vị trí	</td>
                                    <td className='text-white @apply border border-solid border-[white] pl-1'>Nội khu dự án Hinode Royal Park</td>
                                </tr>
                                <tr>
                                    <td className='text-yellow @apply border border-solid border-[white] pl-1'>Chủ đầu tư:	</td>
                                    <td className='text-white @apply border border-solid border-[white] pl-1'>Tổng Công ty Cổ phần Thương mại Xây dựng (Vietracimex)</td>
                                </tr>
                                <tr>
                                    <td className='text-yellow @apply border border-solid border-[white] pl-1'>Quy mô dự án</td>
                                    <td className='text-white @apply border border-solid border-[white] pl-1'>1,627 ha</td>
                                </tr>
                                <tr>
                                    <td className='text-yellow @apply border border-solid border-[white] pl-1'>Mật Độ Xậy Dựng</td>
                                    <td className='text-white @apply border border-solid border-[white] pl-1'>53%</td>
                                </tr>
                                <tr>
                                    <td className='text-yellow @apply border border-solid border-[white] pl-1'>Tổng Số Căn Hộ</td>
                                    <td className='text-white @apply border border-solid border-[white] pl-1'>840 căn</td>
                                </tr>
                                <tr>
                                    <td className='text-yellow @apply border border-solid border-[white] pl-1'>Chiều cao tầng</td>
                                    <td className='text-white @apply border border-solid border-[white] pl-1'>25 tầng (3 block)</td>
                                </tr>
                                <tr>
                                    <td className='text-yellow @apply border border-solid border-[white] pl-1'>Số tầng hầm</td>
                                    <td className='text-white @apply border border-solid border-[white] pl-1'>2 tầng</td>
                                </tr>
                                <tr>
                                    <td className='text-yellow @apply border border-solid border-[white] pl-1'>Số tầng thương mại</td>
                                    <td className='text-white @apply border border-solid border-[white] pl-1'>5 tầng</td>
                                </tr>
                                <tr>
                                    <td className='text-yellow @apply border border-solid border-[white] pl-1'>Quy mô dân số</td>
                                    <td className='text-white @apply border border-solid border-[white] pl-1'>2.200 người</td>
                                </tr>
                                <tr>
                                    <td className='text-yellow @apply border border-solid border-[white] pl-1'>Thời gian mở bán</td>
                                    <td className='text-white @apply border border-solid border-[white] pl-1'>Quý III/2023</td>
                                </tr>
                                <tr>
                                    <td className='text-yellow @apply border border-solid border-[white] pl-1'>Dự kiến bàn giao</td>
                                    <td className='text-white @apply border border-solid border-[white] pl-1'>Quý IV/2025</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
