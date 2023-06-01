import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
      <h2>Testimonials</h2>
      <section>
        <TestimonialCard name={"Dipankar"} feedback={"I am trying my best."} />
        <TestimonialCard name={"Arjun"} feedback={"Keep it up buddy."} />
        <TestimonialCard name={"Juno"} feedback={"You are doing great."} />
      </section>
    </div>
  )
}

const TestimonialCard = ({name, feedback}) => (
  <article>
    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
)

export default Testimonial
