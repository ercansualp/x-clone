import AvatarPicture from "~/assets/img/1645220211246.jpeg";
import {Link} from "react-router-dom";
import WhoCanResponse from "~/pages/home/new-tweet/who-can-response/index.jsx";
import {useState} from "react";
import classNames from "classnames";

export default function NewTweet() {
    const [tweet, setTweet] = useState(null);

    return (
        <>
            <div style={{height: "0.2rem"}} />
            <div className="pt-1 px-[15px] flex gap-[11px]">
                <Link to="/"
                      className="hover:opacity-90 transition-all rounded-full pt-3.5 bg-contain w-[38px] h-[38px]"
                      style={{backgroundImage: `url(${AvatarPicture})`}}/>
                <div className="pt-1 flex flex-col w-full">
                    <textarea
                        value={tweet}
                        onChange={e => setTweet(e.target.value)}
                        className="outline-none placeholder:text-[#536471] placeholder:leading-[23px] placeholder:font-normal placeholder:text-[19px] py-[11px]"
                        placeholder="Neler oluyor?"
                    />
                    <WhoCanResponse />
                    <div className="border-t border-t-[#eff3f4] py-2 flex justify-between items-center">
                        <div className="flex text-[#f91880]">
                            <button className="mx-1 flex items-center justify-center w-[34px] h-[34px] hover:bg-[#f918801a] transition-colors rounded-full">
                                <div className="w-[32px] h-[32px] flex items-center justify-center">
                                    <svg width={21} height={21}><path fill="currentColor" d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z" /></svg>
                                </div>
                            </button>
                        </div>
                        <button disabled={tweet} className={classNames("cursor-pointer bg-[#f91880] transition-colors rounded-full ml-[11px] flex items-center justify-center h-[34px] text-white px-[15px] font-bold leading-[19px] text-sm", {
                            "opacity-50 !cursor-default": !tweet,
                            "hover:bg-[#e01673]": tweet
                        })}>Gönder</button>
                    </div>
                </div>
            </div>
            <button className="transition-colors hover:bg-[#00000008] min-h-[46px] flex items-center justify-center text-[#f91880] text-sm font-normal leading-[19px] border-y border-y-[#eff3f4]">35 gönderiyi göster</button>
        </>
    )
}