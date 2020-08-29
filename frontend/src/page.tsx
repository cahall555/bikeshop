import * as React from "react";
import  { Frame } from "framer";
import { useCycle } from "framer-motion";
import "./page.css";


class Page extends React.Component {
  render() {
    const [animate, cycle] = useCycle(
      { scale: 1.5, rotate: 0 },
      { scale: 1.0, rotate: 90 }
    );
    return (
      <Frame
        animate={animate}
        onTap={() => cycle()}
        size={150}
        radius={30}
        background={"#fff"}
      />
    );
  }
}

export default Page;
