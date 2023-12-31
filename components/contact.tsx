"use client"


const Contacts = () => {
    return (
        <>
            <section className='bg-[#286678]  mt-12 grid grid-cols-1 md:grid-cols-2    gap-6  mx-auto' >
                <div className='py-7 p-2 xl:pl-10 max-w-screen-2xl mx-auto '>
                    <h2 className='text-4xl text-[#f5bd16] font-extralight py-3'>MIỄN PHÍ TƯ VẤN</h2>
                    <p className='font-extrabold text-white'>Cập nhật bảng giá & chính sách bán hàng mới nhất</p>
                    <form action="" className="form-contact">
                        <input
                            type="text"
                            placeholder="Họ và tên(*)"
                            className="input-form-contacts   text-sm px-2 py-2 focus:outline-none outline-none border-solid border-[#f5bd16] w-full border-t-0 my-3 border-r-0 text-white bg-[#286678]"
                        />

                        <input
                            type="text"
                            placeholder='Địa chỉ email'
                            className='input-form-contacts border text-sm  px-2 py-2 outline-none border-solid border-[#f5bd16] w-full border-t-0 my-3 border-r-0 text-white bg-[#286678]'
                        />
                        <input
                            type="text"
                            placeholder='Số điện thoại (*)'
                            className=' input-form-contacts border text-sm px-2 py-2 outline-none border-solid border-[#f5bd16] w-full border-t-0 my-3 border-r-0 text-white bg-[#286678]'
                        />
                        <p className='font-sans text-white text-base mb-2 mt-5'>Quý khách đang quan tâm tới sản phẩm:</p>
                        <div className='flex gap-2  text-white text-sm items-center font-sans'>
                            <input type="radio" name="than" id="" className='border border-solid border-[#f5bd16] p-1' />
                            <span>Căn hộ</span>
                        </div>
                        <div className='flex gap-2  text-white outline-none  text-sm items-center font-sans'>
                            <input type="radio" name="than" id="" className='border outline-none border-solid border-[#f5bd16]' />
                            <span>Penhouse</span>
                        </div>
                        <div className='flex gap-2  text-white text-sm items-center font-sans'>
                            <input type="radio" name="than" id=""
                                className='border border-solid border-[#f5bd16] border-t-0 outline-none' />
                            <span>Shophouse</span>
                        </div>
                        <button className='border-none font-extrabold text-white bg-[#DCB560] py-1 w-full my-10 hover:text-red-600 hover:bg-[#ab873a]'>GỬI NGAY</button>
                    </form>
                    <p className='text-sm text-white font-semibold '>Phòng chăm sóc khách hàng</p>
                    <div className='text-white font-mono mt-10 text-sm '>
                        <span>VPGD: Km14-16, QL32, xã Kim Chung – Di Trạch, Hoài Đức, Hà Nội</span> <br />
                        <span>Hotline 0898.186.999</span> <br />
                        <span>Email: info@wisteria.vn</span> <br />
                    </div>
                </div>
                <div className='w-full'>
                    <img src="https://wisteria.vn/wp-content/uploads/2023/08/chung-cu-wisteria-phoi-canh-5.webp" className='' alt="" />
                </div>
            </section>
            <div className='bg-[#f5bd16] h-1 w-full rounded' />
        </>
    )
}

export default Contacts