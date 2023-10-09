import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <div>
      <div className="w-auto h-auto bg-[#11395B]">
        <div className=" dark:bg-gray-900 py-10 ">
          <div className=" w-auto grid sm:grid-cols-1 md:grid-cols-[20%,35%,auto] lg:grid-cols-[20%,35%,35%]  gap-[5%]  lg:px-10">
            <div className="px-1">
              <a href="">
                {" "}
                <img
                  src="https://wisteria.vn/wp-content/uploads/2020/06/trans-logo.png"
                  alt=""
                  className="w-auto max-h-[188.34px]"
                />
              </a>
            </div>
            <div className="w-auto px-1">
              <h3 className="text-[#FADE83] font-serif-[18.2px] font-bold">THÔNG TIN LIÊN HỆ</h3>
              <div className="grid grid-rows  pt-4  justify-start">
                <div className="flex text-[#ffffff] mb-2.5  items-center">
                  <BsTelephone />
                  <span className="ml-3 font-sans">0898.186.999</span>
                </div>
                <div className="flex text-[#ffffff] mb-2.5 items-center">
                  <HiOutlineMail />
                  <span className="ml-3 font-sans">info@wisteria.vn</span>
                </div>

                <div className="flex text-[#ffffff] mb-2.5 items-center">
                  <IoLocationOutline/>
                  <span className="ml-3 font-sans">
                    Km14-16,QL32,Xã Kim Chung – Di Trạch,Hoài Đức, Hà Nội
                  </span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 pt-10 items-center ">
                  <a href="#">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/facebook-new.png"
                      alt="facebook-new"
                    />
                  </a>
                  <a href="#">
                    <img
                      width="44"
                      height="44"
                      src="https://img.icons8.com/flat-round/64/youtube-play.png"
                      alt="youtube-play"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-auto px-1 ">
              <h3 className="text-[#FADE83] font-serif-[18.2px] font-bold">LƯU Ý</h3>
              <div className="grid grid-rows  pt-4 justify-start">
                <div className="flex text-[#ffffff] md:pb-2.5 items-center">
                  <p className="text-[#ffffff] pb-6 font-sans">
                    Đây là trang thông tin trực tuyến chính thức của dự án The
                    Wisteria – Hinode Royal Park cung cấp tới quý khách hàng các
                    thông tin chính thức về bảng giá, thiết kế và các chính sách
                    bán hàng.
                  </p>
                </div>
                <div className="flex items-center  ">
                  <p className="text-[#ffffff] font-sans pb-12 sm:pb-0">
                    Trực tiếp đặt lịch hẹn & tham quan căn hộ thực tế và trải
                    nghiệm sống hạnh phúc tại The Wisteria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#102947] w-auto md:h-[36px]  py-5 text-center  flex sm:justify-center md:justify-center items-center ">
        <span className="text-[#ffffff] font-sans px-2">
          Copyright 2023 - <a href="#" className="no-underline">The Wisteria</a> . Mọi quyền được bảo lưu!
        </span>
      </div>
    </div>
  );
};
export default Footer;

