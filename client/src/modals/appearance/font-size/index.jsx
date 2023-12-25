export default function FontSize() {
    return (
        <>
            <span className="mb-1 text-xs text-[color:var(--color-third)] font-bold leading-[18px]">Yazı tipi boyutu</span>
            <div className="mb-[11px] p-3.5 flex items-center text-[color:var(--color-base)] font-normal bg-[color:var(--background-secondary)] rounded-2xl">
                <div className="text-xs leading-[14px]">Aa</div>
                <div className="mx-[19px] bg-[#f91880] flex-1 flex justify-center items-center">
                    <div className="h-1 grid grid-cols-4 w-full">
                        <div className="relative rounded-l-full">
                            <div className="w-3 h-3 rounded-full absolute -left-2 -top-1 bg-[#f91880]" />
                            <div className="w-4 h-4 rounded-full absolute -right-2 -top-1.5 bg-[#f91880] z-10" />
                        </div>
                        <div className="relative bg-[#fc8cc0]">
                            <div className="w-4 h-4 rounded-full absolute -right-2 -top-1.5 bg-[#fc8cc0] z-10" />
                        </div>
                        <div className="relative bg-[#fc8cc0]">
                            <div className="w-4 h-4 rounded-full absolute -right-2 -top-1.5 bg-[#fc8cc0] z-10" />
                        </div>
                        <div className="relative rounded-r-full bg-[#fc8cc0]">
                            <div className="w-3 h-3 rounded-full absolute -right-2 -top-1 bg-[#fc8cc0] z-10" />
                        </div>
                    </div>
                </div>
                <div className="leading-[22px] text-lg">Aa</div>
            </div>
        </>
    )
}