"use client";
import Overview from "@/components/Overview";
import Location from "@/components/Location";
import NewPages from "@/components/news";
import Contacts from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Overview />
      <Location />
      <NewPages />
      <Contacts />
    </div>
  );
}
