import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Star, Medal, Crown, Gift, Zap } from "lucide-react";

const ContributorsSection = () => {
  const topContributors = [
    {
      id: 1,
      name: "Sarah Chen",
      avatar: "/placeholder.svg",
      points: 15420,
      level: "Water Guardian",
      contributions: 89,
      badge: "crown",
      achievements: ["Top Monthly Contributor", "Photo Quality Expert", "Community Leader"]
    },
    {
      id: 2,
      name: "Miguel Rodriguez",
      avatar: "/placeholder.svg",
      points: 12680,
      level: "Ocean Protector",
      contributions: 67,
      badge: "trophy",
      achievements: ["Cleanup Master", "NGO Partner", "Impact Creator"]
    },
    {
      id: 3,
      name: "Aisha Patel",
      avatar: "/placeholder.svg",
      points: 10950,
      level: "River Defender",
      contributions: 54,
      badge: "medal",
      achievements: ["Data Contributor", "Education Ambassador", "Local Hero"]
    }
  ];

  const rewards = [
    {
      name: "Eco-Friendly Water Bottle",
      points: 500,
      description: "Sustainable steel water bottle",
      available: 45,
      icon: Gift
    },
    {
      name: "Cleanup Starter Kit",
      points: 1000,
      description: "Complete cleanup equipment set",
      available: 23,
      icon: Zap
    },
    {
      name: "Tree Planting Certificate",
      points: 1500,
      description: "Plant a tree in your name",
      available: 12,
      icon: Star
    }
  ];

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'crown': return Crown;
      case 'trophy': return Trophy;
      case 'medal': return Medal;
      default: return Star;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'crown': return 'text-yellow-500';
      case 'trophy': return 'text-amber-500';
      case 'medal': return 'text-orange-500';
      default: return 'text-primary';
    }
  };

  return (
    <section id="contributors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top Contributors & Rewards
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognize our water warriors making the biggest impact. Earn points for every contribution 
            and unlock exclusive rewards that support your environmental mission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Top Contributors Leaderboard */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-primary" />
                  Top Contributors This Month
                </CardTitle>
                <CardDescription>
                  Champions making the biggest impact in water conservation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {topContributors.map((contributor, index) => {
                  const BadgeIcon = getBadgeIcon(contributor.badge);
                  const badgeColor = getBadgeColor(contributor.badge);
                  
                  return (
                    <div key={contributor.id} className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-surface">
                      <div className="relative">
                        <div className={`absolute -top-2 -right-2 ${badgeColor}`}>
                          <BadgeIcon className="h-5 w-5" />
                        </div>
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={contributor.avatar} alt={contributor.name} />
                          <AvatarFallback>{contributor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-foreground">{contributor.name}</h4>
                          <Badge variant="secondary">{contributor.level}</Badge>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">
                          {contributor.points.toLocaleString()} points • {contributor.contributions} contributions
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {contributor.achievements.slice(0, 2).map((achievement) => (
                            <Badge key={achievement} variant="outline" className="text-xs">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-2xl font-bold text-primary">
                        #{index + 1}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Points & Level System */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Progress</CardTitle>
                <CardDescription>Keep contributing to level up!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Current Level: River Defender</span>
                      <span>2,150 / 5,000 XP</span>
                    </div>
                    <Progress value={43} className="h-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">2,150</div>
                    <div className="text-sm text-muted-foreground">Total Points</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Earn Points</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Upload photo</span>
                  <Badge variant="outline">+10 pts</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Report pollution</span>
                  <Badge variant="outline">+25 pts</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Join cleanup drive</span>
                  <Badge variant="outline">+100 pts</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Organize drive</span>
                  <Badge variant="outline">+250 pts</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Rewards Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Exclusive Rewards</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rewards.map((reward) => {
              const Icon = reward.icon;
              return (
                <Card key={reward.name} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{reward.name}</CardTitle>
                    <CardDescription>{reward.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary mb-2">{reward.points} pts</div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {reward.available} available
                    </div>
                    <Button className="w-full" variant="outline">
                      Redeem Reward
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributorsSection;