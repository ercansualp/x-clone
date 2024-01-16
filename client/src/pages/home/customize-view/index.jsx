import CustomizeViewSvg from "../../../assets/img/customize-view.svg";

export default function CustomizeView() {
    return (
        <div className="p-[30px] flex flex-col border-b border-b-[#eff3f4]">
            <h1 className="flex items-center text-[25px] font-extrabold">
                <span className="leading-[30px] mr-1">Görünümünü özelleştir</span>
                <img width={30} height={30} src={CustomizeViewSvg} alt="Customize View"/>
            </h1>
            <div className="text-[#536471] text-sm font-normal leading-[19px] mt-2">
                Bazen, renk değiştirme, metin boyutunu büyütme veya karanlık mod seçimini değiştirme gibi değişikliklere ihtiyaç duyabilirsin ve tüm bunları ayarlardan yapabilirsin.
            </div>
            <div className="flex mt-[27px]">
                <button className="transition-colors hover:bg-[#272c30] bg-[#0f1419] flex items-center justify-center text-white rounded-full px-[23px] border border-white h-[42px] text-sm font-bold leading-[19px]">Görünümü değiştir</button>
            </div>
        </div>
    )
}