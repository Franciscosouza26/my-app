"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-1" onMouseLeave={() => setHovered(0)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onMouseEnter={() => setHovered(star)}
          onClick={() => setHovered(star)}
          arial-label={`${star} estrela${star > 1 ? "s" : ""}`}
        >
          <Star
            className={cn(
              "size-8 transition-colors ",
              star <= (hovered || value)
                ? "fill-yellow-400 text-yellow-400"
                : "fill-transparent text-muted-foreground",
            )}
          />
        </button>
      ))}
    </div>
  );
}


export { StarRating }