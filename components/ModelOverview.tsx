import { useEffect, useRef } from 'react';
import ReactModal from 'react-modal';

// ReactModal.setAppElement('#__next');

const Modal = ({ isOpen, onClose, message }) => {

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Thông báo"
            className="modal"
            overlayClassName="modal-overlay"
        >
            <div className='p-1 rounded-[10px] sm:w-[50%] md:w-[60%] lg:w-[70%] xl:w-[80%] 2xl:w-[90%] mx-auto'>

                <div className='fixed inset-0 flex items-center justify-center bg-teal-900 bg-opacity-70 z-20 '>
                    <div className='w-[500px] bg-white p-1 @apply rounded-[10px]'>
                        <div className="relative w-full">
                            <img src="https://wisteria.vn/wp-content/uploads/2022/06/REGISTER-FORM.webp" alt="" className="w-full" />
                            <div className="absolute top-4 right-4 text-white">
                                <button className="text-5xl" onClick={onClose}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 352 512">
                                        <style dangerouslySetInnerHTML={{ __html: "svg{fill:#ffffff}" }} />
                                        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='@apply font-semibold text-[1.6rem] leading-[1.2] tracking-normal text-[color:var(--color-header-middle-bg)] mb-6 text-center'>
                            <h1>ĐĂNG KÝ NHẬN NGAY <br /> THÔNG TIN DỰ ÁN</h1>
                        </div>
                        <div>
                            <form action="">
                                <div>
                                    <label className="sr-only" htmlFor="name">Họ & tên (*)</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm mb-4 @apply border border-solid border-[black]"
                                        placeholder="Họ & tên (*)"
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="name">Số điện thoại (*)</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm mb-4 @apply border border-solid border-[black]"
                                        placeholder="Số điện thoại (*)"
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="name">Email (không bắt buộc)</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm @apply border border-solid border-[black]"
                                        placeholder="Email (không bắt buộc)"
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <p className='@apply text-[16px] font-[bold] text-[#e5c565] leading-[60px] '>Quý khách đang quan tâm tới sản phẩm :</p>
                                <div className="grid grid-cols-1 gap-4 text-center grid-cols-2">
                                    <div>
                                        <input
                                            className="peer sr-only"
                                            id="option1"
                                            type="radio"
                                            tabIndex="-1"
                                            name="option"
                                        />

                                        <label
                                            htmlFor="option1"
                                            className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white @apply border border-solid border-[black]"
                                            tabIndex="0"
                                        >
                                            <span className="text-sm"> Căn hộ </span>
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            className="peer sr-only"
                                            id="option2"
                                            type="radio"
                                            tabIndex="-1"
                                            name="option"
                                        />

                                        <label
                                            htmlFor="option2"
                                            className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white @apply border border-solid border-[black]"
                                            tabIndex="0"
                                        >
                                            <span className="text-sm"> Shophouse  </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="@apply bg-[100%_100%] min-h-[40px] w-full text-center mx-auto my-2.5 px-[35px] py-[3px] rounded-none font-[bold] bg-[linear-gradient(90deg,#B0772A_-29.08%,#DCB560_-13.94%,#B0772A_50.86%,#F5D77F_106.43%,#B0772A_125.76%)] text-base font-bold text-white hover:bg-[#e6c13d] px-3 py-2 text-white border border-solid border-white hover:border-transparent hover:shadow-lg hover:text-[#d91616]"
                                    >
                                        GỬI NGAY
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ReactModal>
    );
};

export default Modal;
