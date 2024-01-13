import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";


export default function Home() {

    return (
        <main className="flex min-h-screen min-w-screen flex-col items-center justify-start px-12 py-4 bg-black h-screen w-screen">
            <nav className="flex flex-row items-center justify-around max-w-full w-full max-h-[15vh] border-b-2 py-4 px-2">
                <span className="text-2xl text-white handwritten">
                    Zhengzuo Huo
                </span>
                <a
                    className="nav-item flex items-center"
                    href="/files/Zhengzuo_Huo_Resume.pdf"
                >
                    <IoIosDocument />
                    <span className="ml-1">Resume</span>
                </a>
                <a
                    className="nav-item flex items-center"
                    href="https://www.linkedin.com/in/zhengzuo-huo-8ba5a4247/"
                >
                    <FaLinkedin />
                    <span className="ml-1">LinkedIn</span>
                </a>
                <a
                    className="nav-item flex items-center"
                    href="https://github.com/hzz888"
                >
                    <FaGithub />
                    <span className="ml-1">Github</span>
                </a>
            </nav>

            <div className="flex flex-col w-full items-center justify-center h-full max-h-full">
                <div className="flex flex-row justify-center items-center mb-8">
                    <div className="text-6xl text-white p-2 mb-1">
                        👋 Hi, my name is{" "}
                    </div>
                    <div className="text-6xl hero p-2 mb-1">Zhengzuo Huo</div>
                </div>
                <div className="text-xl text-white break-words mb-4">
                    You can also call me{" "}
                    <span className="hero font-extrabold">Zachary Huo</span>. I
                    am a software developer in Sydney, Australia.
                </div>
                <div className="text-xl text-white break-words mb-4">
                    I&#39;m currently a postgraduate student pursuing a Master of Computer Science degree<br /> at The University of Sydney.
                </div>
                <div className="text-xl text-white break-words mb-4">
                    I&#39;m also pursuing a career as a full-stack developer or a frontend developer. 💪
                </div>
                <div className="text-xl text-white break-words mb-4">
                    For more details about me, please check my resume.
                </div>
                <div className="text-xl text-white break-words">
                    Thank you! 🙌
                </div>
            </div>
        </main>
    );
}
