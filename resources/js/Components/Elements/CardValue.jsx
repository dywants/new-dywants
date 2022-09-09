const CardValue = ({title, icon, description}) => {
    return (
        <div className="text-left border p-4 rounded-md">
            <div className="rounded-full bg-[#FFB400] w-[80px] h-[80px] p-4 mb-4"><img src={icon} alt="" /></div>
            <h3 className="font-semibold text-gray-800 text-md mb-2">{title}</h3>
            <p className="text-muted font-thin leading-tight">{description}</p>
        </div>
    );
};

export default CardValue;
