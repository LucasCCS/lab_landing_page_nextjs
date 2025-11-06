import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Waves, Wind, Snowflake, Wrench, Clock, Shield } from "lucide-react"
import { content } from "@/data/content"

export default function Services() {
  const services = content.services.products;
  const features = content.services.features;

  return (
    <section id="servicos" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
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
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Wrench className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-blue-800 text-sm font-semibold">Nossos Serviços</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gray-900">Nossos</span>
            <br />
            <span className="text-blue-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos assistência técnica especializada para os principais eletrodomésticos da sua casa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-xl group-hover:opacity-20 transition-all duration-500"></div>
              <Card className="relative bg-blue-50 border-0 shadow-xl shadow-gray-900/5 rounded-3xl overflow-hidden group-hover:shadow-2xl transition-all duration-500 hover:scale-105 pt-0">
                <div className="h-1 bg-blue-600"></div>
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xl font-bold text-blue-600">{service.price}</div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-all duration-500">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
