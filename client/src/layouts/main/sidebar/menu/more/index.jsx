import MenuItem from "~/layouts/main/sidebar/menu/menu-item/index.jsx";
import {moreIcon, moreItems} from "~/utils/consts.jsx";
import {Popover, Disclosure} from "@headlessui/react";
import MoreItem from "~/layouts/main/sidebar/menu/more/more-item/index.jsx";
import {Link, NavLink} from "react-router-dom";
import classNames from "classnames";
import {setModal} from "~/store/modal/actions.js";
import {useState} from "react";

export default function More() {
    const [open, setOpen] = useState(false);
    return (
        <Popover className="relative">
            <Popover.Button className="group w-full flex justify-start outline-none">
                <MenuItem isActive={false} title="Daha fazla" notification={null} icon={moreIcon}/>
            </Popover.Button>
            <Popover.Panel className="w-[318px] bg-[color:var(--background-primary)] bottom-0 left-0 absolute shadow-box rounded-xl">
                {
                    moreItems.map((item, index) => {
                        if (item.icon) {
                            return (
                                <NavLink to="/settings/monetization" key={index}
                                     className="rounded-t-xl hover:cursor-pointer font-bold h-[52px] hover:bg-[color:var(--background-secondary)] transition-colors flex items-center">
                                    <MenuItem key={index} isActive={false} title={item.title} notification={null}
                                              icon={item.icon}/>
                                </NavLink>
                            )
                        }
                        {
                            return ""
                        }
                    })
                }
                <div className="w-full flex justify-center">
                    <div className="h-[1px] w-[89%] bg-[#2f3336]"/>
                </div>
                {
                    moreItems.map((item, index) => {
                        if (item.subItems && !item.icon) {
                            return (
                                <Disclosure key={index}>
                                    <Disclosure.Button
                                        className={classNames("text-[color:var(--color-base)] hover:cursor-pointer font-bold h-[52px] hover:bg-[color:var(--background-secondary)] transition-colors flex items-center w-full justify-between", {"rounded-b-xl": index === item.subItems.length-1 && !open})}>
                                        {({open}) => {
                                            setOpen(open);
                                            return (
                                                (
                                                    <>
                                                        <MoreItem title={item.title}/>
                                                        <svg
                                                            className={classNames("mr-4 transition-all", {"-rotate-180 fill-[color:var(--color-primary)]": open})}
                                                            fill="currentColor" width={18.750} height={18.750}
                                                            viewBox="0 0 24 24">
                                                            <path
                                                                d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"/>
                                                        </svg>
                                                    </>
                                                )
                                            )
                                        }}
                                    </Disclosure.Button>
                                    <Disclosure.Panel>
                                        {
                                            item.subItems.map((subItem, index2) => {
                                                if(subItem.title === "Görünüm") {
                                                    return (
                                                        <button onClick={() => setModal("appearance")} key={index2}
                                                              className="hover:cursor-pointer w-full font-bold h-[44px] hover:bg-[color:var(--background-secondary)] transition-colors flex items-center !text-[15px]">
                                                            <MenuItem key={index} isActive={false} title={subItem.title}
                                                                      notification={null}
                                                                      icon={subItem.icon}/>
                                                        </button>
                                                    )
                                                } else {
                                                    return (
                                                        <Link to={subItem.path} key={index2}
                                                              className={classNames("hover:cursor-pointer font-bold h-[44px] hover:bg-[color:var(--background-secondary)] transition-colors flex items-center !text-[15px]", {
                                                                  "rounded-b-xl": index2 === item.subItems.length-1 && index === moreItems.length-1
                                                              })}>
                                                            <MenuItem key={index} isActive={false} title={subItem.title}
                                                                      notification={null}
                                                                      icon={subItem.icon}/>
                                                        </Link>
                                                    )
                                                }
                                            })
                                        }
                                    </Disclosure.Panel>
                                </Disclosure>
                            )
                        }
                    })
                }
            </Popover.Panel>
        </Popover>
    )
}