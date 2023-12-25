import classNames from "classnames";

export default function MenuItem(props) {
    const {title, icon, isActive, notification} = props;

    return (
        <div className={classNames("p-3 inline-flex items-center rounded-full group-hover:bg-[color:var(--background-third)] transition-colors", {
            "font-bold": isActive
        })}>
            {
                icon && (
                    <div className="text-[color:var(--color-base)] w-[26.25px] h-[26.25px] relative flex items-center">
                        {notification && <div className="border border-[color:var(--background-primary)] w-[18px] h-[18px] rounded-full bg-[color:var(--color-primary)] text-[color:var(--background-primary)] absolute -top-1.5 -right-1 flex items-center justify-center text-[11px]">{notification}</div>}
                        {icon}
                    </div>
                )
            }
            <span className={classNames("mr-4 text-[color:var(--color-base)]", {"ml-4": icon})}>{title}</span>
        </div>
    )
}