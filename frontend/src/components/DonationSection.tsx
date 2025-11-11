import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Target, Users, DollarSign, Droplets, Fish, Trees } from "lucide-react";

const DonationSection = () => {
  const campaigns = [
    {
      id: 1,
      title: "Thames River Restoration",
      description: "Large-scale cleanup and ecosystem restoration of the Thames River system.",
      target: 50000,
      raised: 32450,
      donors: 1247,
      daysLeft: 23,
      category: "River Cleanup",
      icon: Droplets
    },
    {
      id: 2,
      title: "Marine Life Protection Fund",
      description: "Protecting marine ecosystems and rehabilitating wildlife affected by pollution.",
      target: 75000,
      raised: 18920,
      donors: 892,
      daysLeft: 45,
      category: "Marine Conservation",
      icon: Fish
    },
    {
      id: 3,
      title: "Reforestation for Clean Water",
      description: "Planting trees to improve water quality and prevent soil erosion.",
      target: 30000,
      raised: 28100,
      donors: 567,
      daysLeft: 12,
      category: "Reforestation",
      icon: Trees
    }
  ];

  const donationTiers = [
    { amount: 25, impact: "Provides cleanup supplies for 5 volunteers" },
    { amount: 50, impact: "Funds water quality testing for 1 location" },
    { amount: 100, impact: "Sponsors a community education workshop" },
    { amount: 250, impact: "Supports a full cleanup drive operation" }
  ];

  const impactStats = [
    { value: "$2.3M", label: "Total Funds Raised", icon: DollarSign },
    { value: "15,000+", label: "Individual Donors", icon: Users },
    { value: "89%", label: "Directly to Projects", icon: Target },
    { value: "200+", label: "Projects Funded", icon: Heart }
  ];

  return (
    <section id="donate" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Support Water Conservation Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your donation directly funds cleanup operations, educational programs, and technology 
            that makes our waters cleaner. Every contribution creates lasting environmental impact.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="text-center">
                <CardContent className="pt-6">
                  <Icon className="mx-auto h-8 w-8 text-primary mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Active Campaigns */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Active Campaigns</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign) => {
              const Icon = campaign.icon;
              const progressPercentage = (campaign.raised / campaign.target) * 100;
              
              return (
                <Card key={campaign.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Icon className="h-6 w-6 text-primary" />
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {campaign.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{campaign.title}</CardTitle>
                    <CardDescription>{campaign.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>${campaign.raised.toLocaleString()} raised</span>
                          <span>${campaign.target.toLocaleString()} goal</span>
                        </div>
                        <Progress value={progressPercentage} className="h-2" />
                      </div>
                      
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{campaign.donors} donors</span>
                        <span>{campaign.daysLeft} days left</span>
                      </div>
                      
                      <Button className="w-full bg-gradient-ocean">
                        <Heart className="mr-2 h-4 w-4" />
                        Donate Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Quick Donation Options */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Make a Direct Impact</CardTitle>
              <CardDescription>
                Choose your donation amount and see the immediate impact of your contribution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Donation Amounts */}
                <div>
                  <h4 className="font-semibold mb-4">Quick Donation</h4>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {donationTiers.map((tier) => (
                      <Button
                        key={tier.amount}
                        variant="outline"
                        className="h-auto flex-col p-4 hover:bg-primary/5"
                      >
                        <span className="text-lg font-bold">${tier.amount}</span>
                        <span className="text-xs text-muted-foreground mt-1 text-center">
                          {tier.impact}
                        </span>
                      </Button>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-wave">
                    <Heart className="mr-2 h-4 w-4" />
                    Donate with Secure Payment
                  </Button>
                </div>

                {/* Impact Calculator */}
                <div>
                  <h4 className="font-semibold mb-4">Your Impact</h4>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center p-3 bg-success/10 rounded-lg">
                      <Droplets className="h-5 w-5 text-success mr-3" />
                      <span>$25 can clean 500 gallons of water</span>
                    </div>
                    <div className="flex items-center p-3 bg-primary/10 rounded-lg">
                      <Users className="h-5 w-5 text-primary mr-3" />
                      <span>$50 supports 10 community volunteers</span>
                    </div>
                    <div className="flex items-center p-3 bg-accent/10 rounded-lg">
                      <Target className="h-5 w-5 text-accent mr-3" />
                      <span>$100 funds educational outreach program</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h5 className="font-semibold text-sm mb-2">Transparency Promise</h5>
                    <p className="text-xs text-muted-foreground">
                      89% of donations go directly to water conservation projects. 
                      Detailed impact reports are sent to all donors quarterly.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;