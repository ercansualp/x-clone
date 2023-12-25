import Color from "~/modals/appearance/color/index.jsx";
import AppearanceDescription from "~/modals/appearance/appearance-description/index.jsx";
import FontSize from "~/modals/appearance/font-size/index.jsx";
import Background from "~/modals/appearance/background/index.jsx";
import Button from "~/components/button/index.jsx";

export default function AppearanceModal() {
    return (
        <div className="flex flex-col">
            <div className="text-[color:var(--color-base)] font-extrabold leading-[28px] text-[23px] text-center mt-8 mb-3">Görünümünü özelleştir</div>
            <div className="px-8 pb-8 flex flex-col">
                <div className="text-center text-[color:var(--color-third)] font-normal leading-5 mb-5">Bu ayarlar, bu tarayıcıdaki tüm X hesaplarını etkiler.</div>
                <AppearanceDescription />
                <FontSize />
                <Color />
                <Background />
                <div className="flex justify-center mt-4">
                    <Button>Bitti</Button>
                </div>
            </div>
        </div>
    )
}