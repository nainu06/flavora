import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

function ItemCard({ id, name, price, img, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, quantity }))
          toast(`${name} Removed!`, {
            icon: '👋'
          })
        }}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} className="w-[50px] h-[50px]" alt="" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between items-center">
          <span className="text-green-500 font-bold">{price} PKR</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                quantity > 1
                  ? dispatch(decrementQuantity({ id }))
                  : (quantity = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{quantity}</span>
            <AiOutlinePlus
              onClick={() =>
                quantity >= 1
                  ? dispatch(incrementQuantity({ id }))
                  : (quantity = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
