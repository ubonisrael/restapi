import Head from "next/head";
import Header from "@/components/header";
import Query from "@/components/searchbar";
import Card from "@/components/card";
import Collection from "@/components/collection";
import { useEffect, useState } from "react";

const options = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

export default function Home({ data }) {
  const [option, setOption] = useState("All");
  const [search, setSearch] = useState("");

  const searchRegex = new RegExp(search, "gi");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleOption = (e) => {
    setOption(e.target.innerHTML);
  };

  const filteredData = data
    .filter((dat) => {
      if (option === "All") return dat;
      return dat.region === option;
    })
    .filter((res) => {
      if (
        searchRegex.test(res.name.official) ||
        searchRegex.test(res.name.common)
      )
        return res;
    });

  return (
    <>
      <Head>
        <title>Where in the world?</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Query
        options={options}
        option={option}
        handleOption={handleOption}
        search={search}
        handleSearch={handleSearch}
      />
      {search && filteredData.length === 0 ? (
        <h2>Sorry, nothing matches your search.</h2>
      ) : (
        <Collection>
          {filteredData.map((dat) => (
            <Card key={dat.name.official} country={dat} />
          ))}
        </Collection>
      )}
    </>
  );
}

export async function getStaticProps(context) {
  const data = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,region,capital,cca3,population,flags"
  ).then((res) => res.json());
  return {
    props: {
      data,
    },
  };
}
