import Navpar from "../components/Navpar";
import Footer from "../components/Footer";
import { useState } from "react";
export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      book.author.toLowerCase().includes(searchValue.toLowerCase()) ||
      book.Summry.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div>
      <Navpar Logein={true} />
      <div className="pt-10 ">
        <div className="text-center">
          <div>
            <input
              className="border pr-10 rounded-md border-black pl-1"
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <button
              className="border ml-4 px-4 rounded-md font-bold border-black hover:bg-gray-500 hover:text-white hover:border-gray-500"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 justify-center gap-10 m-10 max-sm:grid-cols-1 ">
        {filteredBooks.map((book, index) => (
          <div
            key={index}
            className="text-center block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
          >
            <a href={book.ref}>
              <img
                className=" object-contain mt-5 ml-8 h-96 w-96 max-sm:ml-0 "
                src={book.img}
                alt=""
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {book.title}
              </h5>
              <h6 className="mb-2 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {book.author}
              </h6>
              <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {book.Summry}
              </p>
              <button
                type="button"
                className=" inline-block rounded bg-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-zinc-800  "
              >
                <a href={book.ref}>Learn More</a>
              </button>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

const books = [
  {
    title: "Kingdom of the Cursed",
    author: "Kerri Maniscalco",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSFAq-qlc1gLJyQsPlOVev_Qkumd1_cQVcyR87DyU56L9mqU10B",
    Summry:
      "One sister. Two sinful princes. Infinite deception with a side of revenge . . . Welcome to Hell.",
    ref: "/books/book1",
  },
  {
    title: "Miss Dior",
    author: "Justine Picardie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK8RC10UTeZmpS48NjUdyqmkohuwrJz2zE7D8Yy2l-ZHeUUIRO",
    Summry:
      "The overdue restoration of Catherine Dior's extraordinary life, from her brother's muse to Holocaust survivor.",
    ref: "/books/book2",
  },
  {
    title: "A Court of Silver Flames",
    author: "Sarah J. Maas",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT7axSp3zMuZqPuZAEJ0Uyr-o7UOu0gbWRBWzIOQWyhOGm16Czw",
    Summry:
      "Sarah J. Maas's sexy, richly imagined series continues with the journey of Feyre's fiery sister, Nesta.",
    ref: "/books/book3",
  },
  {
    title: "Kingdom of the Feared",
    author: "Kerri Maniscalco",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDunBRNhQ28l6kWEPEdLA5Zvb-SGAAXhSHpfj3Tmt7Jj8yh9XK",
    Summry:
      "From the #1 New York Times bestselling author of the Stalking Jack the Ripper series comes the steamy conclusion to Kingdom of the Wicked trilogy.",
    ref: "/books/book4",
  },
  {
    title: "Game of Thrones",
    author: "George R. R. Martin ",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQEGE1KytBRQwODu-8nndeqwN9TOLvp5tYHU3fgTg_eXpCcw6jD",
    Summry:
      "Here is the first volume in George R. R. Martin's magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords.",
    ref: "/books/book5",
  },
  {
    title: "Solo Leveling, Vol. 7",
    author: "Chugong ",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwTcte-cfcRoVjnjyh82MI58kO1weNFrW0WRo8Kc5pmO9YqSB7",
    Summry:
      "The murders of several distinguished S-rank hunters rock the world, and Jinwoo knows it’s only a matter of time before the perpetrators strike again. ",
    ref: "/books/book6",
  },
];
