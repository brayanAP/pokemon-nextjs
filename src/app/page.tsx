"use client";

import Navbar from "@/components/molecules/MainNavbar";
import MainLayout from "@/components/templates/MainLayout";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b"]; 

const getPokemon = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon'
  const res = await fetch(url)
  const data = await res.json()
  return data
}

const HomePage = () => {
  const pokemon = getPokemon()
  console.log(pokemon)
  return (
    <MainLayout navbar={<Navbar />}>
      {arr.map((key) => (
        <p key={key}>
          {`
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC, making
            it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage, and going
            through the cites of the word in classical literature, discovered the
            undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
            1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
            Evil) by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The first line
            of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32.
          `}
        </p>
      ))}
    </MainLayout>
  );
};

export default HomePage;
