import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Users, Plus, Search } from "lucide-react";

const DriveSection = () => {
  const existingDrives = [
    {
      id: 1,
      title: "Thames River Cleanup",
      location: "London, UK",
      date: "2024-02-15",
      participants: 45,
      description: "Join us for a major Thames cleanup initiative focusing on plastic waste removal."
    },
    {
      id: 2,
      title: "Lake Michigan Shore Clean",
      location: "Chicago, USA",
      date: "2024-02-20",
      participants: 32,
      description: "Protecting our Great Lakes ecosystem through community action."
    },
    {
      id: 3,
      title: "Ganges Restoration Drive",
      location: "Varanasi, India",
      date: "2024-02-25",
      participants: 78,
      description: "Sacred river restoration with local communities and environmental groups."
    }
  ];

  return (
    <div className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        {/* Start a Drive Section */}
        <section id="start-drive" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Start Your Water Cleanup Drive
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be the change you want to see. Create a cleanup drive and rally your community around water conservation.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plus className="mr-2 h-5 w-5 text-primary" />
                  Create New Drive
                </CardTitle>
                <CardDescription>
                  Fill out the details below to organize your water cleanup initiative
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Drive Title (e.g., Local Lake Cleanup)" />
                <Input placeholder="Location" />
                <Input type="date" />
                <Textarea placeholder="Describe your cleanup drive, goals, and what volunteers can expect..." rows={4} />
                <Button className="w-full bg-gradient-ocean">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Drive
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Join Existing Drives Section */}
        <section id="join-drives">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join Existing Drives
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find and join water cleanup drives in your area. Every volunteer makes a difference.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by location or drive name..." className="pl-10" />
            </div>
          </div>

          {/* Drives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {existingDrives.map((drive) => (
              <Card key={drive.id} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{drive.title}</CardTitle>
                  <CardDescription className="flex items-center text-sm">
                    <MapPin className="mr-1 h-4 w-4" />
                    {drive.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{drive.description}</p>
                  <div className="flex justify-between items-center text-sm mb-4">
                    <div className="flex items-center text-primary">
                      <Calendar className="mr-1 h-4 w-4" />
                      {new Date(drive.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-accent">
                      <Users className="mr-1 h-4 w-4" />
                      {drive.participants} joined
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Join Drive
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DriveSection;