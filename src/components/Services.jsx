import { FaSmileBeam, FaTooth, FaXRay } from "react-icons/fa";
import { GiToothbrush } from "react-icons/gi";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaTooth className="w-10 h-10 text-sky-500" />,
    title: "Comprehensive Dental Exams",
    desc: "Thorough oral examinations to assess your dental health and identify any issues early.",
  },
  {
    icon: <GiToothbrush className="w-10 h-10 text-green-500" />,
    title: "Professional Teeth Cleaning",
    desc: "Expert cleaning services to remove plaque and tartar, promoting healthy gums and a bright smile.",
  },
  {
    icon: <FaSmileBeam className="w-10 h-10 text-yellow-500" />,
    title: "Cosmetic Dentistry",
    desc: "Enhance your smile with services like teeth whitening, veneers, and bonding.",
  },
  {
    icon: <FaXRay className="w-10 h-10 text-sky-500" />,
    title: "Digital X-Rays",
    desc: "State-of-the-art imaging to accurately diagnose dental conditions with minimal radiation exposure.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="scroll-mt-20 py-24 bg-gradient-to-br form-white to-sky-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sky-900 mb-4 ">
            Our Dental Services
          </h2>
          <p className="text-gray-600 m-w-2xl mx-auto">
            We offer a wide range of dental services to meet all your oral
            health needs. Our experienced team is dedicated to providing
            exceptional care in a comfortable environment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-md
            hover:shadow-lg transition-all border border-sky-100
             hover:border-sky-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3
                className="text-lg font-semibold
                 text-sky-800 mb-2 text-center"
              >
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
