interface SkillSectionProps {
  title: string
  skills: string[]
}

export default function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div className="bg-dark-charcoal p-6 rounded-2xl border border-medium-charcoal">
      <h3 className="text-lg font-mono mb-4 text-white">{title}</h3>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {skills.map((skill, index) => (
          <span key={index} className="text-medium-gray">
            {skill}
            {index < skills.length - 1 && <span className="text-charcoal ml-4">/</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
