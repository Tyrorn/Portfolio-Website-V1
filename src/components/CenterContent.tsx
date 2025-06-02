import "./CenterContent.css";

interface CenterContentProps {
  image: string;
  title: string;
  data: string;
}

function CenterContent({ image, title, data }: CenterContentProps) {
  return (
    <>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{data}</p>
    </>
  );
}

export default CenterContent;
