import {Link} from "react-router-dom";
import Verified from "~/components/verified/index.jsx";

export default function PostOwnerName() {
    return (
        <div className="flex items-center">
            <Link to="/" className="flex gap-x-0.5 items-center group">
                <span className="text-sm font-bold leading-[19px] group-hover:underline">Ercan SUALP</span>
                <Verified type="blue" />
            </Link>
        </div>
    )
}