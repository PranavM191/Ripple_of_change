import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Globe, Handshake } from "lucide-react";

const NGOSection = () => {
  const ngoPartners = [
    {
      id: 1,
      name: "Ocean Guardians",
      focus: "Marine Conservation",
      impact: "500K+ liters cleaned",
      volunteers: "2.3K active volunteers",
      description: "Leading marine conservation efforts across 15 countries with community-driven cleanup initiatives.",
      tags: ["Marine", "Global", "Research"]
    },
    {
      id: 2,
      name: "River Restoration Alliance",
      focus: "Freshwater Ecosystems",
      impact: "200+ rivers restored",
      volunteers: "1.8K active volunteers",
      description: "Specializing in river ecosystem restoration through technology and community engagement.",
      tags: ["Rivers", "Technology", "Restoration"]
    },
    {
      id: 3,
      name: "Clean Waters Initiative",
      focus: "Community Engagement",
      impact: "50K+ people educated",
      volunteers: "3.1K active volunteers",
      description: "Grassroots organization focusing on water education and local community mobilization.",
      tags: ["Education", "Community", "Local"]
    }
  ];

  const collaborationTypes = [
    {
      icon: Handshake,
      title: "Partnership Programs",
      description: "Form strategic alliances to amplify your impact and reach broader communities."
    },
    {
      icon: Users,
      title: "Volunteer Exchange",
      description: "Share volunteer networks and resources for large-scale cleanup operations."
    },
    {
      icon: Globe,
      title: "Knowledge Sharing",
      description: "Access best practices, research data, and proven methodologies from experienced NGOs."
    },
    {
      icon: Heart,
      title: "Joint Campaigns",
      description: "Collaborate on awareness campaigns and fundraising initiatives for maximum impact."
    }
  ];

  return (
    <section id="ngo-partners" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            NGO Partners & Collaboration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join forces with established NGOs and environmental organizations to maximize your impact. 
            Together, we can achieve more than we ever could alone.
          </p>
        </div>

        {/* Collaboration Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {collaborationTypes.map((type) => {
            const Icon = type.icon;
            return (
              <Card key={type.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured NGO Partners */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Featured Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ngoPartners.map((ngo) => (
              <Card key={ngo.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{ngo.name}</CardTitle>
                  <CardDescription>{ngo.focus}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{ngo.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="text-sm">
                      <span className="font-semibold text-success">Impact:</span> {ngo.impact}
                    </div>
                    <div className="text-sm">
                      <span className="font-semibold text-primary">Community:</span> {ngo.volunteers}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {ngo.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full" variant="outline">
                    Partner with Us
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-surface">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Amplify Your Impact?
              </h3>
              <p className="text-muted-foreground mb-6">
                Connect with like-minded organizations and create lasting change in water conservation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-ocean">
                  Register as NGO Partner
                </Button>
                <Button variant="outline">
                  Browse All Partners
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NGOSection;