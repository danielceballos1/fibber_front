// import React from 'react'
// import './Review.scss'

// const Review = ({review}) => {
  
//   return (
//     <div className="review">
//     <div className="user">
//       <img className="pp" src="/img/mman.png" alt="" />
//       <div className="info">
//         <span>{data.username}</span>
//         <div className="country">
//           <img className="img" src="/img/language.png" alt="" />
//           <span>USA</span>
//         </div>
//       </div>
//     </div>
//     <div className="stars">
//       <img src="/img/star.png" alt="" />
//       <img src="/img/star.png" alt="" />
//       <img src="/img/star.png" alt="" />
//       <img src="/img/star.png" alt="" />
//       <img src="/img/star.png" alt="" />
//       <span>5</span>
//     </div>
//     <p>{review.desc}</p>
//     <div className="helpful">
//       <span>{review.desc}</span>
//       <img src="/img/like.png" alt="" />
//       <span>Yes</span>
//       <img src="/img/dislike.png" alt="" />
//       <span>No</span>
//     </div>
//   </div>
//   )
// }

// export default Review

import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../utils/newRequest";
import "./Review.scss";
const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery(
    {
      queryKey: [review.userId],
      queryFn: () =>
        newRequest.get(`/users/${review.userId}`).then((res) => {
          return res.data;
        }),
    },
  );


  return (
    <div className="review">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="user">
          <img className="pp" src={data.img || "/img/noavatar.jpg"} alt="" />
          <div className="info">
            <span>{data.username}</span>
            <div className="country">
              <span>{data.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review.star)
          .fill()
          .map((item, i) => (
            <img src="/img/star.png" alt="" key={i} />
          ))}
        <span>{review.star}</span>
      </div>
      <p>{review.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src="/img/like.png" alt="" />
        <span>Yes</span>
        <img src="/img/dislike.png" alt="" />
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;