"use client";

import { useSyncExternalStore } from "react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Asia/Thimphu",
});

const subscribe = (onChange: () => void) => {
  const id = window.setInterval(onChange, 15_000);
  return () => window.clearInterval(id);
};

const getSnapshot = () => formatter.format(new Date());

const getServerSnapshot = () => null;

const LocalTime = () => {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return <time className="tabular-nums">{time ?? "--:--"}</time>;
};

export default LocalTime;
