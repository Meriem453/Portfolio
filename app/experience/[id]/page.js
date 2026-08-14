import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import Link from "next/link";
import { BsPersonWorkspace } from "react-icons/bs";

export async function generateStaticParams() {
  return experiences.map((experience) => ({
    id: experience.id.toString(),
  }));
}

async function ExperienceDetails({ params }) {
  const { id } = params;
  const experience = experiences.find(e => e.id === parseInt(id));

  if (!experience) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-3xl font-bold text-white">Experience not found</h1>
        <Link href="/" className="text-[#16f2b3] mt-4 inline-block hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 lg:py-24 relative">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experience Details
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-[#0d1224] border border-[#1b2c68a0] rounded-lg p-6 lg:p-12 relative">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-8">
            <div className="text-violet-500 bg-[#1a1443] p-4 rounded-full">
              <BsPersonWorkspace size={48} />
            </div>
            <div>
              <h2 className="text-2xl lg:text-4xl font-bold text-white uppercase">
                {experience.title}
              </h2>
              <p className="text-[#16f2b3] text-lg lg:text-xl mt-1">
                {experience.company}
              </p>
              <p className="text-gray-400 text-sm lg:text-base">
                {experience.duration}
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-white text-xl font-medium mb-4">Description</h3>
            <ul className="list-disc list-outside ml-6 space-y-3 text-gray-300">
              {experience.description.map((item, index) => (
                <li key={index} className="text-sm lg:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            {experience.fullReport && (
              <Link
                href={experience.fullReport}
                target="_blank"
                className="bg-gradient-to-r from-violet-600 to-pink-600 p-[1px] rounded-full transition-all duration-300 hover:scale-105"
              >
                <button className="px-6 py-2 bg-[#0d1224] rounded-full text-white text-sm lg:text-base font-medium">
                  VIEW FULL REPORT
                </button>
              </Link>
            )}
            {experience.demo && (
              <Link
                href={experience.demo}
                target="_blank"
                className="bg-gradient-to-r from-[#16f2b3] to-[#0ea5e9] p-[1px] rounded-full transition-all duration-300 hover:scale-105"
              >
                <button className="px-6 py-2 bg-[#0d1224] rounded-full text-white text-sm lg:text-base font-medium">
                  VIEW DEMO
                </button>
              </Link>
            )}
            <Link
              href="/#experience"
              className="px-6 py-2 border border-[#1b2c68a0] rounded-full text-white text-sm lg:text-base font-medium hover:bg-[#1b2c68a0] transition-all duration-300"
            >
              BACK TO EXPERIENCES
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceDetails;
