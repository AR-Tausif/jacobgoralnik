export const MyCart = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <img
            src="https://e-liquids.com/cdn/shop/files/banana-ice-smart-5500-disposable-vape-by-ivg_120x120.jpg?v=1734019929"
            alt="Cart"
            className="w-16 h-16"
          />
          <div>
            <h2 className="text-sm font-regular">
              IVG Smart 5500 Big Puff Disposable Vape Kit - Banana Ice{" "}
            </h2>

            <div className="py-2">
              <span className="rounded-full bg-primary p-1 text-center text-black w-4 h-4">
                -
              </span>
              <span className="">1</span>
              <span className="rounded-full bg-primary p-1 text-center text-black w-4 h-4">
                +
              </span>
            </div>
          </div>
        </div>
      </div>

      <button className="bg-primary text-black text-md font-bold  py-2 px-4 rounded-lg">
        Checkout
      </button>
    </div>
  );
};
