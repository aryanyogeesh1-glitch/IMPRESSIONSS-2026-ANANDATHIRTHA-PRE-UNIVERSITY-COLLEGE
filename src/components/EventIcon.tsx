import {
  Drama,
  Flower2,
  Flower,
  Sparkles,
  Megaphone,
  Paintbrush,
  MapPinned,
  type LucideProps,
} from "lucide-react";
import type { FestEvent } from "@/data/fest";

const map: Record<FestEvent["icon"], React.ComponentType<LucideProps>> = {
  mask: Drama,
  rangoli: Sparkles,
  flower: Flower2,
  ramp: Flower,
  ad: Megaphone,
  paint: Paintbrush,
  hunt: MapPinned,
};

export function EventIcon({
  name,
  className,
}: {
  name: FestEvent["icon"];
  className?: string;
}) {
  const Icon = map[name];
  return <Icon className={className} aria-hidden="true" strokeWidth={1.4} />;
}
