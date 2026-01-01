const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group relative bg-white font-text rounded-xl py-4 sm:py-8 px-6 border border-lightgray/40 shadow-sm">
      <div className="mb-3 sm:mb-4 flex items-center gap-2 sm:gap-4">
        <div className="p-2 sm:p-3 rounded-lg bg-gray-50">
          <span className="text-darkblue w-4 h-4 sm:w-6 sm:h-6" weight="fill">
            {icon}
          </span>
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-darkblue">
          {title}
        </h3>
      </div>

      <div className="pt-6 border-t border-gray-200 mt-auto" />

      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-6 md:leading-loose text-left">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
