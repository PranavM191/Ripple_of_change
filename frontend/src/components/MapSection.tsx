import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera, Upload, AlertTriangle, CheckCircle } from "lucide-react";

const MapSection = () => {
  const hotspots = [
    {
      id: 1,
      location: "Thames Estuary",
      severity: "high",
      reports: 23,
      lastUpdated: "2 hours ago",
      description: "Significant plastic debris accumulation"
    },
    {
      id: 2,
      location: "Lake Geneva",
      severity: "medium",
      reports: 8,
      lastUpdated: "1 day ago",
      description: "Chemical runoff detected"
    },
    {
      id: 3,
      location: "Hudson River",
      severity: "low",
      reports: 3,
      lastUpdated: "3 days ago",
      description: "Minor litter scattered"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'destructive';
      case 'medium': return 'warning';
      case 'low': return 'success';
      default: return 'secondary';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'high': return AlertTriangle;
      case 'medium': return Camera;
      case 'low': return CheckCircle;
      default: return MapPin;
    }
  };

  return (
    <section id="impact-map" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Global Water Impact Map
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Track water pollution hotspots worldwide. Upload photos, report issues, and help build the most comprehensive 
            water quality database powered by community contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="h-96 bg-muted/30 border-dashed border-2 border-muted-foreground/30">
              <CardContent className="h-full flex flex-col items-center justify-center text-center p-8">
                <MapPin className="h-16 w-16 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Interactive Map Coming Soon
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Our interactive map will show real-time water quality data, pollution hotspots, and cleanup progress worldwide. 
                  Connect your project to enable full map functionality.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline">
                    <Camera className="mr-2 h-4 w-4" />
                    Upload Photo
                  </Button>
                  <Button>
                    <MapPin className="mr-2 h-4 w-4" />
                    Report Issue
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hotspots Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-destructive" />
                  Active Hotspots
                </CardTitle>
                <CardDescription>
                  Water pollution areas requiring immediate attention
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {hotspots.map((hotspot) => {
                  const SeverityIcon = getSeverityIcon(hotspot.severity);
                  return (
                    <div key={hotspot.id} className="border-l-4 border-primary/20 pl-4 py-2">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium">{hotspot.location}</h4>
                        <Badge variant={getSeverityColor(hotspot.severity) as any} className="text-xs">
                          <SeverityIcon className="mr-1 h-3 w-3" />
                          {hotspot.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{hotspot.description}</p>
                      <div className="text-xs text-muted-foreground">
                        {hotspot.reports} reports • Updated {hotspot.lastUpdated}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="mr-2 h-5 w-5 text-primary" />
                  Contribute Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <Camera className="mr-2 h-4 w-4" />
                  Upload Water Photo
                </Button>
                <Button className="w-full" variant="outline">
                  <MapPin className="mr-2 h-4 w-4" />
                  Report Pollution
                </Button>
                <Button className="w-full" variant="outline">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Mark as Clean
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Data Contribution Stats */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Community Data Contributions</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <Camera className="mx-auto h-8 w-8 text-primary mb-2" />
                <div className="text-2xl font-bold text-foreground">15,432</div>
                <div className="text-sm text-muted-foreground">Photos Uploaded</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <AlertTriangle className="mx-auto h-8 w-8 text-destructive mb-2" />
                <div className="text-2xl font-bold text-foreground">892</div>
                <div className="text-sm text-muted-foreground">Issues Reported</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <CheckCircle className="mx-auto h-8 w-8 text-success mb-2" />
                <div className="text-2xl font-bold text-foreground">1,247</div>
                <div className="text-sm text-muted-foreground">Areas Cleaned</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <MapPin className="mx-auto h-8 w-8 text-accent mb-2" />
                <div className="text-2xl font-bold text-foreground">67</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;