import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <div>
      <Child color="green" btnClick={() => console.log("Child click")} />
      <ChildAsFC color="red" btnClick={() => console.log("ChildAsFC clicked")}>
        ChildAsFC Children
      </ChildAsFC>
    </div>
  );
};

export default Parent;
