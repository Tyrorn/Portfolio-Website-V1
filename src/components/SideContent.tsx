interface SideContentProps {
  image?: string;
  title?: string;
  data: string;
}

function SideContent({ image, title, data }: SideContentProps) {
  return (
    <>
      <div className="content">
        {image && <img src={image} alt={title} className="imgDisplay" />}
        {title && <h3 className="titleDisplay">{title}</h3>}
        {data && <p className="dataDisplay">{data}</p>}
      </div>
    </>
  );
}

export default SideContent;
