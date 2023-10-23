import { useEffect, useState } from "react";
import Article from "../components/Article";
import Cards, { Avatar } from "../components/Cards";
import MyFooter from "../components/MyFooter";
import MyNav from "../components/MyNav";
import Loading from "../components/Loading";

function Home() {
  //   const people = [
  //     "Creola Katherine Johnson: mathematician",
  //     "Mario José Molina-Pasquel Henríquez: chemist",
  //     "Mohammad Abdus Salam: physicist",
  //     "Percy Lavon Julian: chemist",
  //     "Subrahmanyan Chandrasekhar: astrophysicist",
  //   ];

  //   state -> special variable
  // state hook
  // state delcare
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  // function take data from API
  const fetchProduct = (limit, offset) => {
    fetch(
      `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setLoading(false);
      });
    //  how take res to use show data
  };

// test command
  //   execute
  useEffect(() => {
    // call to api product
    fetchProduct(8, 0);
  }, []); // [] is mark dependecy
  useEffect(() => {
    console.log("other state count");
  }, [count]); // [count] this code run when count change value
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click Me {count} time</button>
      <Article />

      <main className="container mx-auto">
        <h1 class="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Popular Product
        </h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <a
          href="#"
          class="w-[220px] mx-auto mb-8 block items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Learn more
        </a>

        {/* <Cards /> */}
        {/* loo data from product to cards */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {
            //   product.length > 0 for stop loop take time to take data from api
            loading ? (
              <Loading />
            ) : (
              products.length > 0 &&
              products.map((product) => (
                <Cards
                  key={product.id}
                  url={product.images[0]}
                  desc={product.description}
                  price={product.price}
                />
              ))
            )
          }
        </section>
      </main>

      {/*       
      <Cards name="SOK" />
      <Avatar   
        imgageURL="https://avatars.githubusercontent.com/u/63158539?s=96&v=4"
        size={200}
      />
      <Cards name="OUDOM" />

      {people.map((person) => (
        <>
          <Cards name={person} />
          <Avatar 
          imgageURL="https://avatars.githubusercontent.com/u/63158539?s=96&v=4"
          size={50}
          />
        </>
      ))} */}
    </>
  );
}
export default Home;
