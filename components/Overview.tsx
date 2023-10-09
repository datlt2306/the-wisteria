"use client"

import { BsFillTelephoneOutboundFill } from 'react-icons/bs';
import { BsDownload } from 'react-icons/bs';


const Overview = () => {
    return (
        <div className="over">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-700 pt-16 pb-28 pl-2">
                <div>
                    <div>
                        <div>
                            <b style={{ fontSize: "40pt", color: '#dac37f', }}>THE WISTERIA</b><br />
                            <b className='text-white mt-3 ' style={{ fontSize: "18pt" }}>MỘT SIÊU PHẨM SẮP RA MẮT</b>
                        </div>
                        <br />
                        <div>
                            <label htmlFor="" className='td2'>Dự án chung cư cao cấp The Wisteria </label>
                            <label htmlFor="" className='td1'>
                                được triển khai xây dựng trong quần thể dự án Hinode Royal Park
                                bao gồm 840 căn hộ tại 3 block (A, B, C). Sản phẩm chủ đạo:
                                Căn hộ chung cư, căn hộ Duplex, Penhouse, Shophouse.
                            </label>
                        </div>
                        <br />
                        <div>
                            <label htmlFor="" className='td1'>
                                Hãy bắt đầu những trải nghiệm mới mẻ & cơ hội đầu tư vô cùng
                                hấp dẫn tại
                            </label>
                            <label htmlFor="" className='td2'> The Wisteria.</label>
                        </div>
                        <br />
                        <div>
                            <button className='flex gap-2 items-center bg-[#11395b] hover:bg-[#1e5896] px-3 py-2 text-white border border-solid border-white float-left mr-3'>
                                <BsFillTelephoneOutboundFill />
                                <span>Gọi hotline</span>
                            </button>
                            <button className='flex gap-2 items-center bg-[#f00000] hover:bg-[#11395b] px-3 py-2 text-white border border-solid border-white'>
                                <BsDownload />
                                <span>TẢI BẢNG GIÁ</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <div>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/S5GB0PMlxW8?si=u9oA49wOFyow10nD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="grid grid-cols-1 md:grid-cols-2"
                style={{ backgroundColor: '#223452', paddingBottom: "50px" }}
            >
                <div className="">
                    <img
                        src="https://wisteria.vn/wp-content/uploads/2023/08/phoi-canh-2.webp"
                        alt=""
                        style={{ border: '4px solid #ffffff', marginBottom: '20px' }}
                    />
                </div>
                <div className="p-6">
                    <div style={{ textAlign: "center" }} >
                        <b
                            style={{
                                fontSize: '30pt',
                                color: '#dac37f',
                                fontFamily: 'M96',
                            }}
                        >
                            TỔNG QUAN DỰ ÁN
                        </b>
                        <br />
                        <b
                            style={{
                                fontSize: '15pt',
                                color: '#ffffff',
                                paddingBottom: '50px',
                                margin: "30px 0"
                            }}
                        >
                            THE WISTERIA
                        </b>
                    </div>
                    <div className="W_html">
                        <table className="table ta_ov" style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td className='td1'>Tên dự án	</td>
                                    <td className='td2'>Chung cư THE WISTERIA</td>
                                </tr>
                                <tr>
                                    <td className='td2'>Vị trí	</td>
                                    <td className='td1'>Nội khu dự án Hinode Royal Park</td>
                                </tr>
                                <tr>
                                    <td className='td2'>Chủ đầu tư:	</td>
                                    <td className='td1'>Tổng Công ty Cổ phần Thương mại Xây dựng (Vietracimex)</td>
                                </tr>
                                <tr>
                                    <td className='td2'>Quy mô dự án</td>
                                    <td className='td1'>1,627 ha</td>
                                </tr>
                                <tr>
                                    <td className='td2'>Mật Độ Xậy Dựng</td>
                                    <td className='td1'>53%</td>
                                </tr>
                                <tr>
                                    <td className='td2'>Tổng Số Căn Hộ</td>
                                    <td className='td1'>840 căn</td>
                                </tr>
                                <tr>
                                    <td className='td2'>Chiều cao tầng</td>
                                    <td className='td1'>25 tầng (3 block)</td>
                                </tr>
                                <tr>
                                    <td className='td2'>Số tầng hầm</td>
                                    <td className='td1'>2 tầng</td>
                                </tr>
                                <tr>
                                    <td className='td2'>Số tầng thương mại</td>
                                    <td className='td1'>5 tầng</td>
                                </tr>
                                <tr>
                                    <td className='td2'>Quy mô dân số</td>
                                    <td className='td1'>2.200 người</td>
                                </tr>
                                <tr>
                                    <td className='td2'>Thời gian mở bán</td>
                                    <td className='td1'>Quý III/2023</td>
                                </tr>
                                <tr>
                                    <td className='td2'>Dự kiến bàn giao</td>
                                    <td className='td1'>Quý IV/2025</td>
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
