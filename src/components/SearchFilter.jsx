// This is the main component for the search filter.
//This will have all the necessary components to filter the search results.

import { useState } from "react";
const SearchFilter = () => {
  // array of objects with name and url to image
  const items = [
    { name: "Kanjiro", imageUrl: "/src/assets/Kanjiro.jpeg" },
    { name: "Luffy", imageUrl: "/src/assets/Luffy.jpeg" },
    { name: "Zoro", imageUrl: "/src/assets/Zoro.jpeg" },
    { name: "Muzan", imageUrl: "/src/assets/Muzan.jpeg" },
    { name: "Garp", imageUrl: "/src/assets/Garp.jpeg" },
    { name: "Naruto", imageUrl: "/src/assets/Naruto.jpeg" },
    { name: "Sasuke", imageUrl: "/src/assets/Sasuke.jpeg" },
    { name: "Sakura", imageUrl: "/src/assets/Sakura.jpeg" },
    { name: "Goku", imageUrl: "/src/assets/Goku.jpeg" },
    { name: "Vegeta", imageUrl: "/src/assets/Vegeta.jpeg" },
    { name: "Light Yagami", imageUrl: "/src/assets/LightYagami.jpeg" },
    { name: "L", imageUrl: "/src/assets/L.jpeg" },
    { name: "Spike Spiegel", imageUrl: "/src/assets/SpikeSpiegel.jpeg" },
    { name: "Mikasa", imageUrl: "/src/assets/Mikasa.jpeg" },
    { name: "Eren Yeager", imageUrl: "/src/assets/Eren.jpeg" },
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
          <p className="mt-3">No characters Found</p>
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
