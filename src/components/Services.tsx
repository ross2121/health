// components/Services.js
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="flex gap-10 justify-center items-center my-10">
      <ServiceCard
        title="Instant Video Consultation"
        description="Connect with a doctor."
        bgColor="bg-[#A3DAC2]"
        image="/assets/phone2.png"
      />
      <ServiceCard
        title="Find The Doctors Near You"
        description="Certified Appointments."
        bgColor="bg-[#F0DA69]"
        image="/assets/laptop2.png"
      />
      <ServiceCard
        title="24/7 Medicine"
        description="Emergency at Your Doorstep."
        bgColor="bg-[#E7C2D4]"
        image="/assets/horse2.png"
      />
      <ServiceCard
        title="Lab Tests"
        description="Sample Collection at Home."
        bgColor="bg-[#92BDF6]"
        image="/assets/plane2.png"
      />
    </div>
  );
}
