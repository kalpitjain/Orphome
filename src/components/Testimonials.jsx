import React from "react";
import bird from "./images/bird.png";
import egg from "./images/egg.png";
import avocado from "./images/avocado.png";

function Testimonials() {
  const testimonialsData = [
    {
      image: bird,
      name: "Priyanka",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      content:
        "The idea of celebrating social events with a social impact is so inspiring! This website is the perfect platform to make a difference and I'm so glad to be a part of it.",
    },
    {
      image: egg,
      name: "Hari",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      content:
        "I'm amazed by the fact that this website offers to host family or corporate social events for free! It's such a great way to give back to the community and I'm so grateful.",
    },
    {
      image: avocado,
      name: "Jessie",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      content:
        "I recently used this website to find a nearby orphanage to volunteer at and was impressed by the sleek and user-friendly design. It made the whole process so easy and hassle-free. Highly recommend!",
    },
  ];

  return (
    <div id="testimonials" className="testimonials">
      <h1>Testimonials</h1>

      <div
        id="carouselControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="10000"
        data-bs-pause="hover"
      >
        <div className="carousel-inner">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                className="testimonial-image testimonial-item"
                src={testimonial.image}
                alt={`${testimonial.name} profile`}
              />
              <h4 className="testimonial-item">{testimonial.name}</h4>
              <b className="testimonial-item">{testimonial.rating}</b>
              <p className="testimonial-item">{testimonial.content}</p>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
