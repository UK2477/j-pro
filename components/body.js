import Access from "./body/access"
import Business from "./body/business"
import Electricity from "./body/electricity"
import Hero_Section from "./body/hero_section"
import Service from "./body/service"
import Testimonial from "./body/testimonial"
import Touch from "./body/touch"

const Body = () => {
  return (
    <div className="main">
        <Hero_Section />
        <Service />
        <Business />
        <Electricity />
        <Testimonial />
        <Access />
        <Touch />
    </div>
  )
}

export default Body