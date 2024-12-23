import Image from "next/image";
import About from "./component/About";
import Home from "./component/Home";

export default function Page() {
  return (
    <div>
      <Home />
      <About />
    </div>
  );
}
