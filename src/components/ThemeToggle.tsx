"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

export default function ThemeToggle() {
    const { resolvedTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // 在组件挂载后才渲染，避免服务端渲染时的不匹配
    useEffect(() => {
        setMounted(true);

        // 点击外部关闭下拉菜单
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const getCurrentIcon = () => {
        if (!mounted) return <div className="w-5 h-5" />;

        // 根据用户选择的主题显示相应的图标
        switch (theme) {
            case 'light':
                return <FiSun className="h-5 w-5 text-yellow-500" />;
            case 'dark':
                return <FiMoon className="h-5 w-5 text-slate-800 dark:text-white" />;
            case 'system':
                return <FiMonitor className="h-5 w-5 text-slate-800 dark:text-white" />;
            default:
                // 默认情况下，回退到根据resolvedTheme显示
                return resolvedTheme === 'dark'
                    ? <FiSun className="h-5 w-5 text-yellow-500" />
                    : <FiMoon className="h-5 w-5 text-slate-800" />;
        }
    };

    if (!mounted) {
        return <div className="w-5 h-5" />;
    }

    // 移动端视图 - 直接显示三个主题选项
    const mobileView = (
        <div className="flex md:hidden space-x-4 items-center">
            <button
                aria-label="Set Light Theme"
                className={`flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 ${theme === 'light' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                onClick={() => setTheme('light')}
            >
                <FiSun className="h-5 w-5 text-yellow-500" />
            </button>
            <button
                aria-label="Set Dark Theme"
                className={`flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 ${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                onClick={() => setTheme('dark')}
            >
                <FiMoon className="h-5 w-5 text-slate-800 dark:text-white" />
            </button>
            <button
                aria-label="Set System Theme"
                className={`flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 ${theme === 'system' ? 'bg-gray-200 dark:bg-gray-700' : ''}`}
                onClick={() => setTheme('system')}
            >
                <FiMonitor className="h-5 w-5 text-slate-800 dark:text-white" />
            </button>
        </div>
    );

    // 桌面端视图 - 带下拉菜单
    const desktopView = (
        <div className="hidden md:block relative" ref={dropdownRef}>
            <button
                aria-label="Toggle Theme Options"
                className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(!isOpen)}
            >
                {getCurrentIcon()}
            </button>

            {isOpen && (
                <div className="absolute right-0 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                    <div className="rounded" role="menu" aria-orientation="vertical">
                        <button
                            className="w-full text-left px-4 py-2 text-sm flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md"
                            onClick={() => {
                                setTheme('light');
                                setIsOpen(false);
                            }}
                        >
                            <FiSun className="mr-3 h-5 w-5 text-yellow-500" />
                            Light
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 text-sm flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {
                                setTheme('dark');
                                setIsOpen(false);
                            }}
                        >
                            <FiMoon className="mr-3 h-5 w-5 text-slate-800 dark:text-white" />
                            Dark
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 text-sm flex items-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-md"
                            onClick={() => {
                                setTheme('system');
                                setIsOpen(false);
                            }}
                        >
                            <FiMonitor className="mr-3 h-5 w-5 text-slate-800 dark:text-white" />
                            System
                        </button>
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <>
            {mobileView}
            {desktopView}
        </>
    );
}