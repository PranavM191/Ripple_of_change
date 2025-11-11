import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Award, Leaf, Recycle, Droplets, Globe, Target, CheckCircle } from "lucide-react";

const SustainabilitySection = () => {
  const globalMetrics = [
    {
      title: "Water Bodies Restored",
      current: 1247,
      target: 2000,
      unit: "locations",
      icon: Droplets,
      trend: "+23%",
      color: "text-blue-500"
    },
    {
      title: "Plastic Waste Removed",
      current: 89.2,
      target: 150,
      unit: "tons",
      icon: Recycle,
      trend: "+34%",
      color: "text-green-500"
    },
    {
      title: "Carbon Footprint Offset",
      current: 456,
      target: 800,
      unit: "tons CO²",
      icon: Leaf,
      trend: "+18%",
      color: "text-emerald-500"
    },
    {
      title: "Communities Educated",
      current: 12580,
      target: 25000,
      unit: "people",
      icon: Globe,
      trend: "+42%",
      color: "text-purple-500"
    }
  ];

  const sdgGoals = [
    {
      number: 6,
      title: "Clean Water and Sanitation",
      progress: 78,
      description: "Ensure access to water and sanitation for all",
      status: "On Track"
    },
    {
      number: 14,
      title: "Life Below Water",
      progress: 65,
      description: "Conserve and sustainably use oceans and marine resources",
      status: "Accelerating"
    },
    {
      number: 15,
      title: "Life on Land",
      progress: 71,
      description: "Sustainably manage forests and restore degraded land",
      status: "On Track"
    },
    {
      number: 17,
      title: "Partnerships",
      progress: 85,
      description: "Strengthen global partnerships for sustainable development",
      status: "Exceeding"
    }
  ];

  const certifications = [
    {
      name: "Carbon Neutral Certified",
      issuer: "Climate Action Reserve",
      validUntil: "2025",
      status: "Active"
    },
    {
      name: "Ocean Positive Impact",
      issuer: "Marine Stewardship Council",
      validUntil: "2024",
      status: "Active"
    },
    {
      name: "UN Global Compact",
      issuer: "United Nations",
      validUntil: "Ongoing",
      status: "Member"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Exceeding': return 'success';
      case 'On Track': return 'default';
      case 'Accelerating': return 'secondary';
      default: return 'outline';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sustainability Impact Rating
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track our collective environmental impact through comprehensive metrics aligned with 
            UN Sustainable Development Goals and third-party certifications.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="text-center mb-12">
          <Card className="max-w-md mx-auto bg-gradient-surface">
            <CardContent className="pt-8">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full border-8 border-primary/20 flex items-center justify-center bg-primary/5">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">A+</div>
                      <div className="text-sm text-muted-foreground">Rating</div>
                    </div>
                  </div>
                  <Award className="absolute -top-2 -right-2 h-8 w-8 text-success" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Exceptional Impact</h3>
              <p className="text-muted-foreground text-sm">
                Top 5% of environmental organizations worldwide
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {globalMetrics.map((metric) => {
            const Icon = metric.icon;
            const progress = (metric.current / metric.target) * 100;
            
            return (
              <Card key={metric.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Icon className={`h-5 w-5 ${metric.color}`} />
                    <div className="flex items-center text-success text-sm">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {metric.trend}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="text-2xl font-bold text-foreground">
                        {typeof metric.current === 'number' && metric.current % 1 !== 0 
                          ? metric.current.toFixed(1) 
                          : metric.current.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">{metric.unit}</div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>{progress.toFixed(0)}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                    
                    <div className="text-sm font-medium">{metric.title}</div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* SDG Goals Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-5 w-5 text-primary" />
                UN Sustainable Development Goals
              </CardTitle>
              <CardDescription>
                Our contribution to global sustainability targets
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {sdgGoals.map((goal) => (
                <div key={goal.number} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {goal.number}
                      </div>
                      <div>
                        <div className="font-medium">{goal.title}</div>
                        <div className="text-sm text-muted-foreground">{goal.description}</div>
                      </div>
                    </div>
                    <Badge variant={getStatusColor(goal.status) as any}>
                      {goal.status}
                    </Badge>
                  </div>
                  <div className="ml-11">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-success" />
                Environmental Certifications
              </CardTitle>
              <CardDescription>
                Third-party verified sustainability credentials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <div className="font-medium">{cert.name}</div>
                    <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                    <div className="text-xs text-muted-foreground">Valid until: {cert.validUntil}</div>
                  </div>
                  <Badge variant="default" className="bg-success">
                    {cert.status}
                  </Badge>
                </div>
              ))}
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-sm mb-2">Transparency Report</h4>
                <p className="text-xs text-muted-foreground">
                  Our annual sustainability report includes detailed metrics, methodologies, 
                  and third-party audits. Available for public download.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Items */}
        <Card className="bg-gradient-surface">
          <CardHeader className="text-center">
            <CardTitle>Help Us Reach Our 2025 Goals</CardTitle>
            <CardDescription>
              Every action contributes to our collective sustainability impact
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <Droplets className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Join a Cleanup</div>
                <div className="text-sm text-muted-foreground">Direct environmental impact</div>
              </div>
              <div className="p-4">
                <Globe className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="font-semibold">Spread Awareness</div>
                <div className="text-sm text-muted-foreground">Educate your community</div>
              </div>
              <div className="p-4">
                <Leaf className="h-8 w-8 text-success mx-auto mb-2" />
                <div className="font-semibold">Support Projects</div>
                <div className="text-sm text-muted-foreground">Fund sustainability initiatives</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SustainabilitySection;