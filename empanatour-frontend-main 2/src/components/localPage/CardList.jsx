const CardList = ({ items }) => {
  return (
    <div className="shadow-md">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col lg:flex-row h-auto w-full items-center justify-between p-6 lg:p-8 bg-[#FFECD0] rounded-lg space-y-4 lg:space-y-0"
        >
          <div className="flex flex-1 flex-col items-center justify-center text-center p-6 lg:p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#001e3c]">
              {item.title}
            </h2>
          </div>

          <img
            src={item.img}
            alt={item.title}
            className="lg:w-3/5 w-full h-64 lg:h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  )
}

export default CardList
