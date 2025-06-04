import Content from "../components/Content";

function AboutMe() {
  const data: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque et libero dui. Fusce convallis ligula leo, at tempor dolor ultricies sed. Donec finibus gravida neque, et";
  return (
    <>
      <Content data={data} />
    </>
  );
}

export default AboutMe;
