import React from "react";

const Cart = ({ cart,wrongAnswer }) => {

  function totalPrice(){
    let price=0;
    for(let item of cart){
      price+=item.price
    }

    return price;
  }

  function totalItems(){
    return cart.length
  }

  return (
    <section className="min-h-screen bg-black px-10 py-10 text-white pt-20">
      <div className="mx-auto max-w-6xl rounded-[50px] border border-cyan-400/10 bg-[#07111f] p-10 shadow-2xl">
        <h1 className="mb-8 text-center text-4xl font-black text-cyan-400">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-slate-400">
            Your cart is empty 
          </p>
        ) : (
          <div className="space-y-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-3xl border border-cyan-400/10 bg-[#0f172a]/80 p-5"
              >
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-24 w-24 rounded-2xl object-cover"
                  />

                  <div>
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-slate-400">
                      Size: {item.selectedSize}
                    </p>
                  </div>
                </div>

                <p className="text-xl font-bold text-cyan-400">
                  ₹{item.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>


      <div className="mt-8 rounded-3xl border border-cyan-400/10 bg-[#0f172a]/80 p-6">
  <div className="flex items-center justify-between">
    <h2 className="text-xl font-bold">Total Items</h2>
    <p className="text-2xl font-black text-cyan-400">{totalItems()}</p>
  </div>

  <div className="mt-4 flex items-center justify-between">
    <h2 className="text-xl font-bold">Total Price</h2>
    <p className="text-2xl font-black text-cyan-400">₹{totalPrice()}</p>
  </div>

  <div  className="mt-6 flex justify-center">
    <button
    onClick={wrongAnswer}
    className="ounded-full bg-cyan-400 px-16 py-3 font-bold text-black transition-all duration-300 hover:scale-105"
  >
    Place Order
  </button>
  </div>
</div>

    </section>
  );
};

export default Cart;