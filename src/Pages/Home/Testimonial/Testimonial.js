import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review";

const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content It is a long established fact that by the readable content by the readable content of a lot layout",
      location: "California",
      img: people1,
    },
    {
      id: 2,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content It is a long established fact that by the readable content by the readable content of a lot layout",
      location: "California",
      img: people2,
    },
    {
      id: 3,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content It is a long established fact that by the readable content by the readable content of a lot layout",
      location: "California",
      img: people3,
    },
  ];

  return (
    <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl ">What Our Patient Say's</h2>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
