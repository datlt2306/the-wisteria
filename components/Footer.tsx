import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <div>
      <div className="w-auto h-auto bg-[#11395B] ">
        <footer className=" dark:bg-gray-900 py-10 ">
          <div className=" w-auto  grid sm:grid-cols-1 md:grid-cols-[20%,35%,auto] lg:grid-cols-[20%,35%,35%]  gap-[5%]  lg:px-10 py-10">
            <div className="">
              <a href="">
                {" "}
                <img
                  src="https://wisteria.vn/wp-content/uploads/2020/06/trans-logo.png"
                  alt=""
                  className="w-auto max-h-[188.34px]"
                />
              </a>
            </div>
            <div className="">
              <h3 className="text-[#FADE83] font-serif ">THÔNG TIN LIÊN HỆ</h3>
              <div className="grid grid-rows gap-2 pt-4  justify-start">
                <div className="flex text-[#ffffff] mb-2.5 mt-4">
                  <BsTelephone />
                  <span className="ml-3 ">0898.186.999</span>
                </div>
                <div className="flex text-[#ffffff] mb-2.5">
                  <HiOutlineMail />
                  <span className="ml-3 ">info@wisteria.vn</span>
                </div>

                <div className="flex text-[#ffffff] mb-2.5">
                  <IoLocationOutline />
                  <span className="ml-3 ">
                    Km14-16,QL32,Xã Kim Chung – Di Trạch,Hoài Đức, Hà Nội
                  </span>
                </div>
              </div>
              <div>
                <div className="flex gap-3 pt-3">
                  <a href="">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/facebook-new.png"
                      alt="facebook-new"
                    />
                  </a>
                  <a href="">
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/flat-round/64/youtube-play.png"
                      alt="youtube-play"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="text-[#FADE83] font-serif">LƯU Ý</h3>
              <div className="grid grid-rows gap-2 pt-4 justify-start">
                <div className="flex text-[#ffffff] pb-2.5">
                  <p className="text-[#ffffff] pb-6">
                    Đây là trang thông tin trực tuyến chính thức của dự án The
                    Wisteria – Hinode Royal Park cung cấp tới quý khách hàng các
                    thông tin chính thức về bảng giá, thiết kế và các chính sách
                    bán hàng.
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="text-[#ffffff]">
                    Trực tiếp đặt lịch hẹn & tham quan căn hộ thực tế và trải
                    nghiệm sống hạnh phúc tại The Wisteria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="bg-[#102947] w-auto md:h-[36px] py-5 text-center  flex sm:justify-center md:justify-center items-center ">
        <span className="text-[#ffffff]">
          Copyright 2023 - The Wisteria. Mọi quyền được bảo lưu!
        </span>
      </div>
    </div>
  );
};
export default Footer;
