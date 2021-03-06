import React from 'react';
const MetricCard = ({
  name,
  icon,
  desIcon,
  value,
  optionColor,
  optionIcon,
}) => {
  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-3">
      <div className="bg-white border rounded shadow p-2">
        <div className="flex flex-row items-center">
          <div className="flex-shrink pr-4">
            <div className={desIcon}>
              <i className={icon}></i>
            </div>
          </div>
          <div className="flex-1 text-right md:text-center">
            <h5 className="font-bold uppercase text-gray-500">{name}</h5>
            <h3 className="font-bold text-3xl">
              {value}
              <span className={optionColor}>
                <i className={optionIcon}></i>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
