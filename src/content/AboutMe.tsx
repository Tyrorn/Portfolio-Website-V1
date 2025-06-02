import SideContent from "../components/SideContent";

function AboutMe() {
  const data: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque et libero dui. Fusce convallis ligula leo, at tempor dolor ultricies sed. Donec finibus gravida neque, et";
  return (
    <>
      <SideContent data={data} />
    </>
  );
}

export default AboutMe;
