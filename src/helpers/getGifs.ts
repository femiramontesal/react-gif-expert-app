export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=17KWFf7tZAGiPwpbo5itib8nzyYYP1QE&q=${category}&limit=5`;
  const res = await fetch(url);
  const { data = [] } = await res.json();

  const gifs = data.map((img: { id: any; title: string; images: any }) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
