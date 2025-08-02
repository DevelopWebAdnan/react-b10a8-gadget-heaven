const Heading = ({ title, subtitle }) => {
    return (
        <div className='text-center text-white mb-4 md:mb-8'>
            <h1 className='font-bold text-2xl md:text-3xl mb-4'>{title}</h1>
            <p className='text-xs md:text-base'>{subtitle}</p>
        </div>
    );
};

export default Heading;