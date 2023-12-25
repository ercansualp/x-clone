import classNames from "classnames";
// border-2 border-blue-600
export default function BackgroundItem({ title, bgColor, textColor, isSelected, setSelectedBackgroundColor, index, borderColor }) {
    return (
        <div className="px-5 m-1 rounded border border-[#333639] flex items-center bg-white group cursor-pointer min-h-[64px] w-[156.33px]">
            <div className="relative -ml-[11px] -mr-[11px] w-10 h-10 flex items-center justify-center group-hover:bg-[#71767b1a] rounded-full transition-colors">
                <div className="w-5 h-5 border-2 border-[#b9cad3] rounded-full"></div>
            </div>
            <div className="text-[#0f1419] font-bold leading-5 ml-[5px] flex-1 text-center">Varsayılan</div>
        </div>
    )
}

/*

<div onClick={() => setSelectedBackgroundColor(index)} className={classNames("flex w-[158.33px] items-center group justify-center px-5 m-1 rounded cursor-pointer min-h-[64px] font-bold leading-5", bgColor, textColor, {"border-2 border-blue-600": isSelected})}>
            <div className="flex items-center justify-center w-[40px] h-[40px] bg-red-400 rounded-full transition-colors group-hover:bg-[#71767b1a]">
                <input className={classNames("w-5 h-5 rounded-full", {
                    "bg-blue-600": isSelected,
                    "border-2 border-[#b9cad3]": !isSelected
                })} type="raido"/>
            </div>
            <div className="text-center w-4/5">{title}</div>
        </div>





 */