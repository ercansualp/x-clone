import {Outlet, useLocation} from "react-router-dom";
import Sidebar from "./sidebar/index.jsx";
import Rightbar from "~/layouts/main/rightbar/index.jsx";
import Messages from "./messages/index.jsx";
import {userAccount} from "~/store/auth/hooks.js";
import {useModal} from "~/store/modal/hooks.js";
import Modal from "~/modals/index.jsx";
import {useEffect} from "react";
import {useAppearance} from "~/store/appearance/hooks.js";

export default function MainLayout() {
    const {pathname} = useLocation();
    const account = userAccount();
    const showMessagesComponent = ["/", "/explore", "/notifications", `/${account.username}/lists`, "/i/bookmarks", `/${account.username}/communities`, `/${account.username}`];
    const modal = useModal();
    const appearance = useAppearance();

    useEffect(() => {
        document.documentElement.style.setProperty("--background-primary", appearance.backgroundColor.primary);
        document.documentElement.style.setProperty("--background-secondary", appearance.backgroundColor.secondary);
        document.documentElement.style.setProperty("--background-third", appearance.backgroundColor.third);
        document.documentElement.style.setProperty("--background-modal", appearance.backgroundColor.modal);

        document.documentElement.style.setProperty("--color-primary", appearance.color.primary);
        document.documentElement.style.setProperty("--color-secondary", appearance.color.secondary);
        document.documentElement.style.setProperty("--color-third", appearance.color.third);
        document.documentElement.style.setProperty("--color-base", appearance.color.base);
        document.documentElement.style.setProperty("--color-base-secondary", appearance.color.baseSecondary);

        document.documentElement.style.setProperty("--box-shadow", appearance.boxShadow);
        document.documentElement.style.setProperty("--font-size", appearance.fontSize + "px");
    }, [appearance])

    return (
        <div className="w-[1325px] mx-auto flex min-h-screen">
            {modal && <Modal />}
            <Sidebar />
            <main className="gap-[30px] flex flex-1 w-[1050px]">
                <main className="max-w-[600px] flex-1 border-x border-[color:var(--background-third)]">
                    <Outlet />
                </main>
                <Rightbar />
            </main>
            {showMessagesComponent.find(path => path === pathname) && (<Messages />)}
        </div>
    )
}