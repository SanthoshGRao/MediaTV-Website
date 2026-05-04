import {
  Music, Music2, Newspaper, Clapperboard, MonitorPlay, Film,
  Disc3, Smile, Camera, Mic, Music3, Landmark, Video, Moon,
  Stethoscope, Award, Users, Mic2, Megaphone, Briefcase,
  ScrollText, Zap, Target
} from 'lucide-react';

const iconMap = {
  music: Music,
  music2: Music2,
  newspaper: Newspaper,
  clapperboard: Clapperboard,
  monitorPlay: MonitorPlay,
  film: Film,
  disc: Disc3,
  smile: Smile,
  camera: Camera,
  mic: Mic,
  music3: Music3,
  landmark: Landmark,
  video: Video,
  moon: Moon,
  stethoscope: Stethoscope,
  award: Award,
  users: Users,
  mic2: Mic2,
  megaphone: Megaphone,
  briefcase: Briefcase,
  scrollText: ScrollText,
  zap: Zap,
  target: Target,
};

export default function ProgramIcon({ name, size = 20, className = '' }) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <IconComponent size={size} className={className} />;
}
