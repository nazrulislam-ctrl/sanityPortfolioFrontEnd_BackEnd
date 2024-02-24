import Logo from "../assets/NazLogo.jpg"
function Footer(){
    return (
        <>
<footer className="bg-white rounded-lg shadow dark:bg-gray-900 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={Logo} className="h-16 w-24" alt="NazrulTech Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NazrulTech</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-900 sm:mb-0 dark:text-gray-600">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-800 lg:my-8" />
        <span className="block text-sm text-gray-900 sm:text-center dark:text-gray-600">© 2024 <a href="" className="hover:underline">NazrulTech™</a>. All Rights Reserved.</span>
    </div>
</footer>


        </>
    )
};
export default Footer;