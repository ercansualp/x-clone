export default function Item(props) {
    const {title, icon, onClick, active} = props;
    console.log("aktif: ", active);
    return (
        <button onClick={onClick} className="py-[11px] px-[15px] flex items-center  hover:bg-[#f7f9f9] transition-colors">
            <div className="pr-[11px]">
                <div className="w-[38px] h-[38px] rounded-full flex items-center justify-center bg-[#f91880] text-white">
                    {icon}
                </div>
            </div>
            <div className="grow text-start font-bold leading-[19px] text-sm">{title}</div>
            <div className="ml-[19px] text-[#f91880]">
                {active ? <svg width={19} height={17.5} viewBox="0 0 24 24"><path fill="currentColor" d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" /></svg> : ""}
            </div>
        </button>
    )
}