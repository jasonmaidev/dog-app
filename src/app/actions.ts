"use server";

export const getOneRandomDogImage = async () => {
  const res = await fetch(
    `https://dog.ceo/api/breeds/image/random?x=${Math.random()}`
  );
  return res.json();
};
