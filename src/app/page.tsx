import Content from "@/components/content";
import Current from "@/components/current";
import Header from "@/components/header";
import Headline from "@/components/headline";
import Offers from "@/components/offers";

export default function Home() {
  return (
    <main>
      <Header />
      <Current />
      <Headline />
      <Content />
      <Offers />
    </main>
  )
}
