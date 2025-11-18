import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Waves, Wind, Snowflake, Wrench, Clock, Shield } from "lucide-react"
import { content } from "@/data/content"
import { getTheme } from "@/lib/get-theme"

export default function Services() {
  const theme = getTheme();
  const services = content.services.products;
  const features = content.services.features;

  return (
    <section id="servicos" className={theme.services.section}>
      {/* Background Pattern */}
      <div className={theme.services.backgroundPattern}>
        <svg width="100" height="100" viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="service-dots" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="11" cy="18" r="7" fill="currentColor" fillOpacity="0.02" />
              <circle cx="59" cy="43" r="7" fill="currentColor" fillOpacity="0.02" />
              <circle cx="16" cy="36" r="3" fill="currentColor" fillOpacity="0.02" />
              <circle cx="79" cy="67" r="3" fill="currentColor" fillOpacity="0.02" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#service-dots)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={theme.services.badge.container}>
            <Wrench className={theme.services.badge.icon} />
            <span className={theme.services.badge.text}>Nossos Serviços</span>
          </div>

          <h2 className={theme.services.title.container}>
            <span className={theme.services.title.part1}>Nossos</span>
            <br />
            <span className={theme.services.title.part2}>Serviços</span>
          </h2>
          <p className={theme.services.description}>
            Oferecemos assistência técnica especializada para os principais eletrodomésticos da sua casa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className={theme.services.card.glow}></div>
              <Card className={theme.services.card.container}>
                <div className={theme.services.card.topBar}></div>
                <CardHeader className="pb-4">
                  <div className={theme.services.card.iconContainer}>
                    <service.icon className={theme.services.card.icon} />
                  </div>
                  <CardTitle className={theme.services.card.title}>
                    {service.title}
                  </CardTitle>
                  <CardDescription className={theme.services.card.description}>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={theme.services.card.featureText}>
                        <div className={theme.services.card.featureDot}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className={theme.services.card.price}>{service.price}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className={theme.services.featureCard.iconContainer}>
                <feature.icon className={theme.services.featureCard.icon} />
              </div>
              <h3 className={theme.services.featureCard.title}>
                {feature.title}
              </h3>
              <p className={theme.services.featureCard.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
