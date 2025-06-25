"use client";

import { useState, useRef, useEffect } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const drawerRef = useRef<HTMLDivElement>(null);

    // 点击外部关闭抽屉
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node) && isOpen) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // 打开抽屉时阻止背景滚动
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            <div className="flex items-center md:hidden">
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="打开菜单"
                    className="p-2 text-gray-400 hover:text-white dark:hover:text-white"
                >
                    <FiMenu className="h-6 w-6" />
                </button>
            </div>

            {/* 抽屉背景遮罩 */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden"></div>
            )}

            {/* 抽屉菜单 */}
            <div
                ref={drawerRef}
                className={`fixed top-0 right-0 bottom-0 z-50 w-64 bg-white dark:bg-gray-900 rounded-l-lg transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
                    } md:hidden`}
            >
                {/* 优化抽屉头部，与导航栏保持完全相同的高度和样式 */}
                <div className="flex justify-between items-center max-h-[15vh] py-[2vh] px-2 border-b-2 border-gray-100 dark:border-gray-800">
                    <span className="text-2xl handwritten text-black dark:text-white">
                        Menu
                    </span>
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="关闭菜单"
                        className="p-2 text-gray-400 hover:text-black dark:hover:text-white rounded-lg transition-colors"
                    >
                        <FiX className="h-6 w-6" />
                    </button>
                </div>

                {/* 主要导航内容 */}
                <div className="flex-1 overflow-y-auto p-4">
                    <a
                        className="nav-item flex items-center py-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                        href="/files/Zhengzuo_Huo_Resume.pdf"
                        onClick={() => setIsOpen(false)}
                    >
                        <IoIosDocument className="mr-2" />
                        <span>Resume</span>
                    </a>
                    <a
                        className="nav-item flex items-center py-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                        href="https://www.linkedin.com/in/zhengzuo-huo-8ba5a4247/"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaLinkedin className="mr-2" />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        className="nav-item flex items-center py-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                        href="https://github.com/zacharyhuo"
                        onClick={() => setIsOpen(false)}
                    >
                        <FaGithub className="mr-2" />
                        <span>Github</span>
                    </a>
                </div>

                {/* 底部固定主题切换 */}
                <div className="border-t border-gray-100 dark:border-gray-800 py-3 flex justify-center items-center">
                    <ThemeToggle />
                </div>
            </div>
        </>
    );
}