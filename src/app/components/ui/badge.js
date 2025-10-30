"use client";

import React from "react";

export default function Badge({
  children = "👨‍💻 Work in progress",
  className = "",
  ...props
}) {

  return (
    <div className="flex text-white font-medium badge" {...props}>
      {children}
    </div>
  );
}
