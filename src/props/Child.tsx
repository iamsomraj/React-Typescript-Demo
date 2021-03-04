interface ChildProps {
  color: string;
  btnClick: () => void;
}

export const Child = ({ color, btnClick }: ChildProps) => {
  return (
    <div>
      Favourite {color}
      <button onClick={btnClick}>Press</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, btnClick, children }) => {
  return (
    <div>
      This is {color}
      <button onClick={btnClick}>Press</button>
      {children}
    </div>
  );
};
