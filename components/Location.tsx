"use client"

import { useState } from 'react';
import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { BsDownload } from 'react-icons/bs';
import Modal from './ModelOverview';
const Location = () => {
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
        <div className="bg-[#113354]">

            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 ">
                <div className=" pt-[5%] lg:mx-auto mx-[10px] lg:max-w-[80%] max-w-full" >
                    <div className="font-[var(--font-h2)] mb-[17px] " >
                        <h1 className="text-[#fade8c] lg:text-[40pt] font-[M96] font-semibold	mb-[17px] text-[35px]	">VỊ TRÍ VÀNG</h1>
                        <h3 className=" text-[#fff]  font-semibold	lg:text-[20px] text-[16px] mb-[10px]">TÂM ĐIỂM THỊNH VƯỢNG</h3>
                        <span className="text-[#fade8c] font-bold ">Chung cư The Wisteria </span> <span className="text-[14px] text-[#FFFFFF]"> toạ lạc tại đại lộ Bình Minh, khu thiết kế phong cách Nhật (trong quần thể dự án Hinode Royal Park), mặt quốc lộ 32 thuộc địa bàn 2 xã Kim Chung & Di Trạch, Hoài Đức, Hà Nội. Cách trung tâm Hà Nội chỉ 10 phút lái xe, …</span>

                        <p className="mb-[17px] mt-[17px] text-[14px] text-[#fade8c]">Theo quy hoạch chung của thành phố, cụm khu vực phía Tây sẽ trở thành trung tâm Hành chính – Kinh tế – Văn hoá – Du lịch – Thương mại mới.</p>

                        <span className=" text-[14px] text-[#FFFFFF] " >– Trong thời gian tới, việc hoàn thành các tuyến đường dự kiến như quốc lộ 32, Tây Thăng Long, đường vành đai 3.5, tuyến đường sắt trên cao Nhổn – ga Hà Nội sẽ góp phần thay đổi diện mạo giao thông của khu vực, hứa hẹn trở thành trung tâm đô thị sôi động mới của Thủ đô…
                        </span>
                    </div>

                    <div>
                        <div>
                            <button className='font-bold flex gap-2 items-center bg-[#11395b] text-[16x] hover:bg-[#1e5896] px-3 py-2 text-white border border-solid border-white float-left mr-3'>
                                <BsFillTelephoneOutboundFill />
                                <span>Gọi hotline</span>
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
                <div>
                    <img className=" border-4 border-gray-50" src="vi-tri-the-wisteria.jpg" alt="" />
                </div>
            </div>

            <div className="w-full text-center">
                <div className="mt-[20px]">
                    <h1 className="text-[#fade8c] lg:text-[40pt] text-[35px] font-[M96] font-semibold	mb-[17px] text-center	">TIỆN ÍCH</h1>
                    <h3 className="text-[#fff]  font-semibold	text-[15px] mb-[10px] text-center">ĐỒNG BỘ – ĐẲNG CẤP – KHÁC BIỆT</h3>
                </div>
                <div className=" m-[20px] p-[20px] bg-[linear-gradient(270deg,rgba(22,107,156,0) 10.04%,#166B9C 56.52%,rgba(22,107,156,0) 96.69%)] ">
                    <p className="max-w-[713px] font-[var(--font-h2)] m-auto text-white">Với chuỗi tiện ích đẳng cấp trong quần thể dự án Hinode Royal Park, <span className="text-[#fade8c] font-bold">The Wisteria</span> mang đến cho khách hàng những trải nghiệm tuyệt vời nhất…</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <img src="https://wisteria.vn/wp-content/uploads/2023/08/z2629479550659_7ebd377ee3cf06b13388d7e1295c7a39-e1627111236834.webp" alt="" />
                    <img src="https://wisteria.vn/wp-content/uploads/2023/08/z2629479549144_802d83feaed158f9ee3b04fa1f4199a7-scaled-e1627111193176.webp" alt="" />
                    <img src="https://wisteria.vn/wp-content/uploads/2023/08/z2629479548634_5416c56e7a92de0389dfa10c451c7c1a-scaled-1.webp" alt="" />
                    <img src="https://wisteria.vn/wp-content/uploads/2023/08/z2629479537204_a607d2675136942626423b6a3e900419-scaled-e1627110984772.webp" alt="" />
                    <img src="https://wisteria.vn/wp-content/uploads/2023/08/z2629479533389_64eac79739da5e6d0f2609f0af3ffcf0-scaled-e1627110963157.webp" alt="" />
                    <img src="https://wisteria.vn/wp-content/uploads/2023/08/shophouse.webp" alt="" />
                    <img src="https://wisteria.vn/wp-content/uploads/2023/08/be-boi2.webp" alt="" />
                    <img src="https://wisteria.vn/wp-content/uploads/2023/08/be-boi.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Location