export interface Participant {
  id: string;
  name: string;
  stageName: string;
  origin: string;
  age: number;
  songTitle: string;
  originalArtist: string;
  youtubeUrl: string;
  imageUrl: string;
  voteCount: number;
  badge?: string;
  category: "Spekta" | "Audition" | "Top 6" | "Finalist";
  views?: string;
}
