import { useState } from 'react';
import { MatchCard } from '@/components/MatchCard';
import { VideoPlayer } from '@/components/VideoPlayer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Radio } from 'lucide-react';
import indiaLogo from '@/assets/india-logo.png';
import australiaLogo from '@/assets/australia-logo.png';
import southAfricaLogo from '@/assets/southafrica-logo.png';

const matches = [
  {
    id: 1,
    team1: {
      name: 'India',
      shortName: 'IND',
      logo: indiaLogo,
    },
    team2: {
      name: 'Australia',
      shortName: 'AUS',
      logo: australiaLogo,
    },
    matchType: 'Test Match - Day 3',
    date: 'Nov 15, 2025',
    time: '09:30 AM IST',
    venue: 'Melbourne Cricket Ground, Melbourne',
    isLive: true,
    streamUrl: 'https://live-en.aisports.cc/moviebox/device01/playlist.m3u8',
  },
  {
    id: 2,
    team1: {
      name: 'India',
      shortName: 'IND',
      logo: indiaLogo,
    },
    team2: {
      name: 'South Africa',
      shortName: 'SA',
      logo: southAfricaLogo,
    },
    matchType: 'Test Match - Day 1',
    date: 'Nov 20, 2025',
    time: '02:00 PM IST',
    venue: 'Centurion Park, Centurion',
    isLive: false,
  },
  {
    id: 3,
    team1: {
      name: 'India',
      shortName: 'IND',
      logo: indiaLogo,
    },
    team2: {
      name: 'Australia',
      shortName: 'AUS',
      logo: australiaLogo,
    },
    matchType: 'Test Match - Day 1',
    date: 'Nov 25, 2025',
    time: '10:00 AM IST',
    venue: 'Sydney Cricket Ground, Sydney',
    isLive: false,
  },
];

const Index = () => {
  const [selectedMatch, setSelectedMatch] = useState<typeof matches[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Radio className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <h1 className="text-xl md:text-2xl font-bold text-foreground">CricketStream</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-live rounded-full animate-pulse" />
              <span className="text-sm font-medium text-foreground hidden md:inline">Live</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        {selectedMatch ? (
          <div className="space-y-6">
            <Button
              variant="ghost"
              onClick={() => setSelectedMatch(null)}
              className="mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Matches
            </Button>

            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {selectedMatch.team1.shortName} vs {selectedMatch.team2.shortName}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {selectedMatch.matchType} • {selectedMatch.venue}
                  </p>
                </div>
                {selectedMatch.isLive && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-live/10 rounded-lg">
                    <div className="w-3 h-3 bg-live rounded-full animate-pulse" />
                    <span className="text-sm font-bold text-live">LIVE NOW</span>
                  </div>
                )}
              </div>

              <div className="bg-card rounded-lg overflow-hidden border border-border">
                <VideoPlayer src={selectedMatch.streamUrl || ''} />
              </div>

              <div className="grid md:grid-cols-2 gap-4 bg-card p-6 rounded-lg border border-border">
                <div className="flex items-center gap-4">
                  <img
                    src={selectedMatch.team1.logo}
                    alt={selectedMatch.team1.name}
                    className="w-16 h-16 rounded-full border-2 border-border"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{selectedMatch.team1.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedMatch.team1.shortName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:justify-end">
                  <img
                    src={selectedMatch.team2.logo}
                    alt={selectedMatch.team2.name}
                    className="w-16 h-16 rounded-full border-2 border-border"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{selectedMatch.team2.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedMatch.team2.shortName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 md:space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Live Matches</h2>
              <p className="text-sm md:text-base text-muted-foreground">Watch cricket matches live in HD quality</p>
            </div>

            <div className="space-y-4">
              {matches
                .filter((match) => match.isLive)
                .map((match) => (
                  <MatchCard
                    key={match.id}
                    {...match}
                    onClick={() => setSelectedMatch(match)}
                  />
                ))}
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">Upcoming Matches</h2>
              <div className="space-y-4">
                {matches
                  .filter((match) => !match.isLive)
                  .map((match) => (
                    <MatchCard key={match.id} {...match} />
                  ))}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-12 md:mt-16">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 CricketStream. All rights reserved.</p>
            <p className="mt-2">Watch live cricket matches in HD quality</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
