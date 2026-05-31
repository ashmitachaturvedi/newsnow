import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import NewsCard from "../components/NewsCard";

function Home(){
    return (
    <>
      <Navbar />

      <h1>Breaking News</h1>

      <SearchBar />

      <NewsCard />
      <NewsCard />
      <NewsCard />
    </>
  );
}
export default Home;