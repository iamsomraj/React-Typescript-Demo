import { ChildAsFC } from "./Child";

const Parent = () => {
  // return <Child color="red" />;
  return <ChildAsFC color="red" />;
};

export default Parent;
