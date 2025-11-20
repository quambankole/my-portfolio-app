"use client";;
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
import React from "react";

export function GridPattern({
  width = 80,
  height = 80,
  x = -2,
  y = -2,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}) {
  const id = React.useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-900/30 stroke-emerald-400/30",
        className
      )}
      {...props}>
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}>
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y], index) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1} />
          ))}
        </svg>
      )}
    </svg>
  );
}
