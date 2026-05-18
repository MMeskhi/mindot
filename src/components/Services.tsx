import { services, servicesSection } from "@/server/data";
import ServiceIcon from "@/assets/ServiceIcon";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <p className="text-[#FF5A1F] text-xs font-bold tracking-[0.25em] uppercase mb-4">
              {servicesSection.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-tight text-[#F5F7FA]">
              {servicesSection.headingLine1}
              <br />
              {servicesSection.headingLine2}
            </h2>
          </div>
          <div>
            <p className="text-[#76828E] text-base leading-relaxed">
              {servicesSection.description}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0057B8]/10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[#011729] p-8 flex flex-col gap-4 group hover:bg-[#023661] transition-colors border border-[#0057B8]/12"
            >
              <div className="opacity-90">
                <ServiceIcon id={service.iconKey} />
              </div>
              <h3 className="text-[#F5F7FA] font-bold text-sm leading-snug">
                {service.title}
              </h3>
              <p className="text-[#76828E] text-xs leading-relaxed flex-1">
                {service.description}
              </p>
              <div className="w-8 h-0.5 bg-[#FF5A1F] mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
