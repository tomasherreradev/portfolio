export default function ExpCard({ year, title, role, description, skills }) {
  return (
    <div className="w-full max-w-[750px] flex md:p-4 py-2 rounded-xl border border-transparent transition-all bg-gray-900 card-exp-container hover:border-[#8AEDC9] group">
      <div className="text-nowrap">
        <p className="text-[18px]">{year}</p>
      </div>

      <div className="flex flex-col items-start px-4">
        <h3 className="text-[15px] xl:text-[18px] font-bold text-white text-wrap transition-all group-hover:text-[#8AEDC9]">{title}</h3>
        <span className="text-[13px] mb-5">{role}</span>

        <p className="text-left mb-5 text-white">
          {description}
        </p>

        <div className="flex flex-wrap gap-3 py-4 rounded-md">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-white text-[13px] bg-[#538572] border border-[#8AEDC9] py-1 px-3 rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
