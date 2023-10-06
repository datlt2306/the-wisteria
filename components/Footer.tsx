import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import {CiFacebook} from 'react-icons/ci'

const Footer = () => {
  return (
    <div>
      <div className="w-full  h-full bg-[#11395B] ">
        <footer className=" dark:bg-gray-900 ">
          <div className=" w-full  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[20%,35%,35%] px-8 gap-8 py-10">
            <div className="">
              <a href="">
                {" "}
                <img
                  src="https://wisteria.vn/wp-content/uploads/2020/06/trans-logo.png"
                  alt=""
                  className="max-w[160px] max-h-[188.34px]"
                />
              </a>
            </div>
            <div className="grid grid-rows-[20%,40%,40%] ">
               <div>
               <h3 className="text-[#FADE83] font-serif ">THÔNG TIN LIÊN HỆ</h3>
               </div>
             
             
              <div>
                <div className="flex text-[#ffffff] mb-2.5">
                <BsTelephone />
                <span className="ml-3 ">
                   0898.186.999
                </span>
                </div>
                <div className="flex text-[#ffffff] mb-2.5">
                <HiOutlineMail />
                <span className="ml-3 ">
                info@wisteria.vn

                </span>
                </div>
                
                <div className="flex text-[#ffffff] mb-2.5">
                <IoLocationOutline />
                <span className="ml-3 ">
                Km14-16, QL32, xã Kim Chung – Di Trạch, Hoài Đức, Hà Nội
                </span>
                </div>
                
              </div>
              <div>
                   <div className="flex gap-3 mt-16">
                    <a href="">
                   <img width="48" height="48" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/>
                   </a>
                   <a href="">
                   <img width="48" height="48" src="https://img.icons8.com/flat-round/64/youtube-play.png" alt="youtube-play"/>
                   </a>
                    </div> 
              </div>
            </div>
            <div className="grid grid-rows-[20%,40%,40%]">
                <div>
            <h3 className="text-[#FADE83] font-serif">LƯU Ý</h3>
            </div >
            <div>
            <div className="flex text-[#ffffff] mb-2.5">
            <p className="text-[#ffffff] mb-6">Đây là trang thông tin trực tuyến chính thức của dự án The Wisteria – Hinode Royal Park cung cấp tới quý khách hàng các thông tin chính thức về bảng giá, thiết kế và các chính sách bán hàng.</p>
            </div>
            <div>
            <p className="text-[#ffffff]">Trực tiếp đặt lịch hẹn & tham quan căn hộ thực tế và trải nghiệm sống hạnh phúc tại The Wisteria.</p>
            </div>
            </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="text-center bg-[#102947] h-[36px] grid items-center">
        <span className="text-[#ffffff] ">
          Copyright 2023 - The Wisteria. Mọi quyền được bảo lưu!
        </span>
      </div>
    </div>
  );
};
export default Footer;
