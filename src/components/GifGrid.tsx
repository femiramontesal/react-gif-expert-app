import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }: any) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      {<h3>{category}</h3>}
      <div className="card-grid">
        {images.map((img: any) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
