import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Tv } from 'lucide-react';

interface Team {
  name: string;
  shortName: string;
  logo: string;
}

interface MatchCardProps {
  team1: Team;
  team2: Team;
  matchType: string;
  date: string;
  time: string;
  venue: string;
  isLive?: boolean;
  onClick?: () => void;
}

export const MatchCard = ({
  team1,
  team2,
  matchType,
  date,
  time,
  venue,
  isLive = false,
  onClick,
}: MatchCardProps) => {
  return (
    <Card 
      className="p-6 hover:shadow-lg transition-all cursor-pointer border-border"
      onClick={onClick}
    >
      {isLive && (
        <div className="flex items-center gap-2 mb-4">
          <Badge className="bg-live text-live-foreground">
            <div className="w-2 h-2 bg-live-foreground rounded-full mr-2 animate-pulse" />
            LIVE
          </Badge>
        </div>
      )}
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4 flex-1">
          <img 
            src={team1.logo} 
            alt={team1.name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-border"
          />
          <div className="text-left">
            <h3 className="font-bold text-lg md:text-xl text-foreground">{team1.shortName}</h3>
            <p className="text-sm text-muted-foreground hidden md:block">{team1.name}</p>
          </div>
        </div>
        
        <div className="px-4 py-2 bg-muted rounded-lg mx-4">
          <p className="text-xl md:text-2xl font-bold text-foreground">VS</p>
        </div>
        
        <div className="flex items-center gap-4 flex-1 justify-end">
          <div className="text-right">
            <h3 className="font-bold text-lg md:text-xl text-foreground">{team2.shortName}</h3>
            <p className="text-sm text-muted-foreground hidden md:block">{team2.name}</p>
          </div>
          <img 
            src={team2.logo} 
            alt={team2.name}
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-border"
          />
        </div>
      </div>
      
      <div className="border-t border-border pt-4 space-y-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <Badge variant="outline" className="text-xs md:text-sm">
            {matchType}
          </Badge>
          <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{date} • {time}</span>
          </div>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground">{venue}</p>
        {isLive && (
          <div className="flex items-center gap-2 text-primary pt-2">
            <Tv className="w-4 h-4" />
            <span className="text-sm font-medium">Watch Now</span>
          </div>
        )}
      </div>
    </Card>
  );
};
