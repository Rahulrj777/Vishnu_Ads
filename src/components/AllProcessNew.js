import img1 from "../images/ProcessStep/img1.png"
import img2 from "../images/ProcessStep/img2.png"
import img3 from "../images/ProcessStep/img3.png"
import img4 from "../images/ProcessStep/img4.png"
import img5 from "../images/ProcessStep/img5.png"
import img6 from "../images/ProcessStep/img6.png"
import img7 from "../images/ProcessStep/img7.png"
import img8 from "../images/ProcessStep/img8.png"
import img9 from "../images/ProcessStep/img9.png"
import img10 from "../images/ProcessStep/img10.png"
import img11 from "../images/ProcessStep/img11.png"
import img12 from "../images/ProcessStep/img12.png"
import img13 from "../images/ProcessStep/img13.png"
import img14 from "../images/ProcessStep/img14.png"

const steps = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14]

const AllProcessNew = () => {
  return (
    <div className="w-full">
      {steps.map((img, index) => (
        <div key={index} className="h-[100vh] bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${img})` }} />
      ))}
    </div>
  )
}

export default AllProcessNew
