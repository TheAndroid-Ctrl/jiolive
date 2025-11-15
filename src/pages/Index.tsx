import { VideoPlayer } from '@/components/VideoPlayer';
import { Badge } from '@/components/ui/badge';
import { Radio, Calendar, MapPin } from 'lucide-react';
import indiaFlag from '@/assets/india-flag.png';
import southAfricaFlag from '@/assets/southafrica-flag.png';

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <Radio className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              <h1 className="text-lg md:text-2xl font-bold text-foreground">JioLive</h1>
            </div>
            <Badge className="bg-live text-live-foreground">
              <div className="w-2 h-2 bg-live-foreground rounded-full mr-2 animate-pulse" />
              LIVE
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-4 md:py-6">
        {/* Live Stream Section */}
        <div className="space-y-4 md:space-y-6">
          {/* Match Header */}
          <div className="bg-card rounded-lg border border-border p-4 md:p-6">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-foreground mb-1">
                  India vs South Africa
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground">1st Test • Day 2: Tea Break</p>
              </div>
              <Badge className="bg-live text-live-foreground">
                <div className="w-2 h-2 bg-live-foreground rounded-full mr-2 animate-pulse" />
                LIVE NOW
              </Badge>
            </div>

            {/* Teams */}
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className="flex items-center gap-3 md:gap-4">
                <img
                  src={indiaFlag}
                  alt="India"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-border shadow-sm"
                />
                <div>
                  <h3 className="font-bold text-base md:text-xl text-foreground">India</h3>
                  <p className="text-sm md:text-base text-muted-foreground">189</p>
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4 justify-end">
                <div className="text-right">
                  <h3 className="font-bold text-base md:text-xl text-foreground">South Africa</h3>
                  <p className="text-sm md:text-base text-muted-foreground">159 & 18-1</p>
                </div>
                <img
                  src={southAfricaFlag}
                  alt="South Africa"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-border shadow-sm"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Eden Gardens, Kolkata</span>
            </div>
          </div>

          {/* Video Player */}
          <div className="bg-card rounded-lg overflow-hidden border border-border shadow-md">
            <VideoPlayer src="https://live-en.aisports.cc/moviebox/device01/playlist.m3u8" />
          </div>

          {/* Match Status */}
          <div className="bg-card rounded-lg border border-border p-4 md:p-6">
            <p className="text-sm md:text-base text-foreground font-medium">
              South Africa trail by 12 runs
            </p>
          </div>

          {/* Upcoming Match */}
          <div className="bg-card rounded-lg border border-border p-4 md:p-6">
            <h3 className="text-base md:text-lg font-bold text-foreground mb-4">Upcoming Match</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={indiaFlag}
                    alt="India"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-border"
                  />
                  <span className="font-semibold text-sm md:text-base text-foreground">India</span>
                </div>
                <span className="text-xs md:text-sm font-bold text-muted-foreground">VS</span>
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-sm md:text-base text-foreground">South Africa</span>
                  <img
                    src={southAfricaFlag}
                    alt="South Africa"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-border"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs md:text-sm text-muted-foreground flex-wrap">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Sat, Nov 22 2025 • 9:00 AM IST</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Barsapara Cricket Stadium, Guwahati</span>
              </div>
              <Badge variant="outline" className="text-xs">2nd Test</Badge>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border mt-8 md:mt-12">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="text-center text-xs md:text-sm text-muted-foreground">
            <p>© 2025 JioLive. Watch India vs South Africa Test Series Live</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
