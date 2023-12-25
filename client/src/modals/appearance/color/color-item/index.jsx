import classNames from "classnames";

export default function ColorItem({ colorIndex, setColorIndex, index, color }) {

    return (
        <button onClick={() => setColorIndex(index)} className={classNames("rounded-full w-[38.63px] h-[38.63px]  flex justify-center items-center", color)}>
            {colorIndex === index ? <svg width={25} height={25} viewBox="0 0 24 24"><path fill="#ffffff" d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" /></svg> : ""}
        </button>
    )
}