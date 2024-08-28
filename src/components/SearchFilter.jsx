// This is the main component for the search filter.
//This will have all the necessary components to filter the search results.

import { useState } from "react";
const SearchFilter = () => {
  // array of objects with name and url to image
  const items = [
    { name: "Kanjiro", imageUrl: "/assets/kanjiro.jpeg" },
    { name: "Luffy", imageUrl: "/assets/luffy.jpeg" },
    { name: "Zoro", imageUrl: "/assets/zoro.jpeg" },
    { name: "Muzan", imageUrl: "/assets/muzan.jpeg" },
    { name: "Garp", imageUrl: "/assets/garp.jpeg" },
    { name: "Naruto", imageUrl: "/assets/naruto.jpeg" },
    { name: "Sasuke", imageUrl: "/assets/sasuke.jpeg" },
    { name: "Sakura", imageUrl: "/assets/sakura.jpeg" },
    { name: "Goku", imageUrl: "/assets/goku.jpeg" },
    { name: "Vegeta", imageUrl: "/assets/vegeta.jpeg" },
    { name: "Light Yagami", imageUrl: "/assets/lightyagami.jpeg" },
    { name: "L", imageUrl: "/assets/l.jpeg" },
    { name: "Spike Spiegel", imageUrl: "/assets/spikespiegel.jpeg" },
    { name: "Mikasa", imageUrl: "/assets/mikasa.jpeg" },
    { name: "Eren Yeager", imageUrl: "/assets/eren.jpeg" },
  ];
  const [searchQuery, setSearchQuery] = useState(""); // state to store search query

  // list of filtered items based on the search query
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="text-center p-8 mx-auto max-w-[1280px]">
      <h1 className="text-3xl font-bold mb-4">Popular Anime Characters</h1>
      <p className="text-lg mb-6">Search Your Favourite Anime Character</p>
      <input
        type="text"
        placeholder="Search Characters..."
        className="w-full p-3  border border-gray-300 rounded-md shadow-sm "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} // update query state on change in input
      />

      <ul className="flex flex-wrap gap-6 mt-">
        {filteredItems.length === 0 && (
          <p className="mt-">No characters Found</p>
        )}

        {filteredItems.map((item, index) => (
          <li
            key={index}
            className="p-2 border-b border-gray-200 flex flex-col items-center rounded-lg"
          >
            <p className="text-md font-semibold">{item.name}</p>
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-40 h-40 rounded-md  ml-5 mb-2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
