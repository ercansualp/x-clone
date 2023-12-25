import PropTypes from "prop-types";

export default function MoreItem({title}) {
    return (
        <div className="p-[16px] group-hover:bg-[color:var(--background-secondary)] transition-colors">
            <span className="mx-auto text-[15px]">{title}</span>
        </div>
    )
}

MoreItem.propTypes = {
    title: PropTypes.string
}