import styles from '../style'
import { discount } from '../assets'
import Navbar from './Navbar'
import Footer from './Footer'
import FetchData from './FetchData'
function Header() {
    return (
        <>
            {/* Sample Navbar just for UI */}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <Navbar />
            </div>
            {/* Sample Hero Sections */}
            <section id="home" className={`mt-20 bg-[#0C0E10] h-screen mb-16 flex md:flex-row flex-col ${styles.paddingY}`}>
                <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
                    <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
                        <img
                            src={discount}
                            alt="discount"
                            className='w-[32px] h-[32px]'
                        />
                        <p className={`${styles.paragraph} ml-2`}>
                            <span className='text-white'>Discover</span> Information About Your {" "}
                            <span className='text-white'>Pincode</span>
                        </p>
                    </div>

                    <div className='flex flex-col items-center justify-center w-full'>
                        <h1 className='font-poppins font-semibold ss:text-[42px] text-[45px] text-white ss:leading-[70px] leading-[75px] text-center'>
                            The <span className='text-gradient'>FASTEST</span> {" "}
                            Way Find  <br className="hidden sm:block" />{" "}
                            Area Information by Entering <br className="hidden sm:block" />{" "}
                            <span className='text-gradient'>Your Postal Code</span>
                        </h1>
                        <p className={`${styles.paragraph} text-center mx-4 mt-4`}>
                        Dive into the world of geographic wonders by entering a postal code (pin code).<br />
                        Your journey to discovering the hidden gems of your area begins with a click.
                        </p>
                        <button
                            className="relative flex items-center px-6 py-3 mt-6 text-sm font-semibold text-white rounded-full animate-bounce bg-gradient-to-r from-sky-500 to-green-500 hover:from-sky-600 hover:to-green-600">
                            Try for Free
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7071 12.7071C16.0976 12.3166 16.0976 11.6834 15.7071 11.2929L11.3431 6.92893C10.9526 6.53841 10.3195 6.53841 9.92893 6.92893C9.53841 7.31946 9.53841 7.95262 9.92893 8.34314L13.5858 12L9.92893 15.6569C9.53841 16.0474 9.53841 16.6805 9.92893 17.0711C10.3195 17.4616 10.9526 17.4616 11.3431 17.0711L15.7071 12.7071ZM8 13H15V11H8V13Z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
            <FetchData />
            {/* Sample Footer just for UI */}
            <Footer />
        </>
    )
}

export default Header
