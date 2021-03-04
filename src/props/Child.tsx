interface ChildProps {
  color: string;
}

export const Child = ({ color }: ChildProps) => {
  return <div>Favourite {color}!</div>;
};

export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>This is {color}</div>;
};
