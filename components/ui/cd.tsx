"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

function CdCover() {
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  function handleClick() {
    setOpen(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setOpen(false), 4000) // gira por 4s
  }

  return (
    <div className="relative w-60 h-60" style={{ overflow: "visible" }}>
      {/* Disco: wrapper cuida do deslizar, filho cuida do girar */}
      <div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 -right-3 z-10 size-56 transition-transform duration-700 ease-out",
          open ? "translate-x-[60%]" : "translate-x-0"
        )}
      >
        <div className={cn("size-full rounded-full", open && "animate-spin")}>
          <Image src="/CD.png" alt="CD" fill className="rounded-full object-cover" />
        </div>
      </div>

      {/* Capa: elemento clicável, sempre por cima */}
      <button
        type="button"
        onClick={handleClick}
        className="absolute inset-0 z-20 rounded-lg shadow-xl cursor-pointer"
      >
        <Image src="/album.png" alt="Capa do álbum" fill className="rounded-lg object-cover" />
      </button>
    </div>
  )
}

export { CdCover}