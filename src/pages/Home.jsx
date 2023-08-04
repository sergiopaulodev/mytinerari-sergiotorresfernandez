import Carousel from "../components/Carousel";
import TextContent from "../components/TextContent";

export default function Home() {

  return (

    // <main className="md:flex md:flex-row justify-between md:flex-wrap lg:flex-nowrap  lg:ml-20 lg:mr-5 lg:mb-96 ml-10 mr-5">

    <main className="md:flex ml-10 mr-5">
        <TextContent
        />
        <Carousel
        />
    </main>
  );
}
