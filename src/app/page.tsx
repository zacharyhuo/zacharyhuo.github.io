import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import ThemeToggle from "@/components/ThemeToggle";
import MobileNav from "@/components/MobileNav";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start px-4 sm:px-6 lg:px-12 bg-white dark:bg-black transition-colors duration-300 h-screen w-screen fixed inset-0 overflow-auto">
            <nav className="flex flex-row items-center justify-between max-w-full w-full max-h-[15vh] border-b-2 border-gray-100 dark:border-gray-800 py-[2vh] px-2">
                <span className="text-2xl text-black dark:text-white handwritten">
                    Zhengzuo Huo
                </span>

                {/* 桌面导航 - 中等屏幕及以上显示 */}
                <div className="hidden md:flex items-center space-x-6">
                    <a
                        className="nav-item flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                        href="/files/Zhengzuo_Huo_Resume.pdf"
                    >
                        <IoIosDocument />
                        <span className="ml-1">Resume</span>
                    </a>
                    <a
                        className="nav-item flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                        href="https://www.linkedin.com/in/zhengzuo-huo-8ba5a4247/"
                    >
                        <FaLinkedin />
                        <span className="ml-1">LinkedIn</span>
                    </a>
                    <a
                        className="nav-item flex items-center text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                        href="https://github.com/zacharyhuo"
                    >
                        <FaGithub />
                        <span className="ml-1">Github</span>
                    </a>
                    <ThemeToggle />
                </div>

                {/* 移动端导航 - 仅在小屏幕上显示 */}
                <MobileNav />
            </nav>

            <div className="flex flex-col w-full items-center justify-center h-full max-h-full">
                <div className="flex flex-col md:flex-row justify-center items-center mb-4 md:mb-8 text-center md:text-left">
                    {/* 将 emoji 和文字包裹在同一个不可分割的容器中 */}
                    <div className="flex flex-row items-center whitespace-nowrap mb-2 md:mb-0">
                        <span className="text-3xl md:text-6xl text-black dark:text-white">
                            👋 Hi, I am
                        </span>
                    </div>
                    <em className="text-3xl md:text-6xl hero p-2 mb-1 ml-3">Zhengzuo Huo</em>
                </div>
                <div className="text-lg md:text-2xl text-gray-800 dark:text-white break-words mb-4 text-center px-2">
                    You can also call me{" "}
                    <em className="hero font-extrabold">Zachary Huo </em>.
                    <br />I am a frontend developer in Shanghai, China.<br />
                    I am currently working at Meituan.<br />
                    For more details about me, please check my resume.
                </div>
            </div>
        </main>
    );
}
