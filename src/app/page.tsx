import { TopicCard } from "./components/TopicCard";

export default function Home() {


  return (
    <div>
      <h1>Topic-pick</h1>
      <p>雑談のトピックをランダムに提供します</p>
      <TopicCard />
    </div>
  );
}
