import {NavLink} from "react-router-dom";

export default function RightbarSection({title, children, moreUrl, moreVisible}) {
    return (
        <div className="border border-[color:var(--background-secondary)] rounded-2xl bg-[color:var(--background-secondary)] mb-4">
            <div className="py-3 px-4 font-extrabold text-xl text-[color:var(--color-base)]">
                {title}
            </div>
            {children}
            {moreVisible && <NavLink to={moreUrl}
                                     className="block rounded-b-2xl text-[#1d9bf0] font-normal leading-5 p-4 hover:cursor-pointer hover:bg-[color:var(--background-third)] transition-colors">Daha
                fazla göster</NavLink>}
        </div>
    )
}