import React from "react";
import {useDispatch,useSelector} from "react-redux";
import ReactStars from 'react-stars'
import { FaStar } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

import { removeFromCart } from "../../../../Slice/cartSlice";
function RenderCartCourses() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  return (
    <div>
      {cart.map((course, index) => (
        <div>
          <div>
            <img src={course?.thumbnail} />
            <div>
              {" "}
              <p>{course?.courseName}</p>
              <p>{course?.category?.name}</p>
              <div> <span>4.8</span>
                <ReactStars
                count={5}
                size={20}
                edit={false}
                activeColor="#ffd700"
                emptyIcon={<FaStar />}
                fullIcon={<FaStar />} 
                 />
                 <span>{course?.ratingAndReviews?.length}</span>
              </div>
            </div>
          </div>
          <div>
            <button 
            onClick={()=> dispatch(removeFromCart(course._id))}>
            <AiFillDelete />
          <span>Remove</span>
            </button>
           <p>
            {course?.price}
           </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RenderCartCourses;
