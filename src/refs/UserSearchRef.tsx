import { useState, useRef, useEffect } from "react";

const users = [
  { name: "Sarah", age: 20 },
  { name: "Sam", age: 22 },
  { name: "Alex", age: 24 },
  { name: "Michael", age: 26 },
];

const UserSearchRef: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const searchHandler = () => {
    const foundUser = users.find((user) =>
      user.name.toUpperCase().includes(name.toUpperCase())
    );
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={searchHandler}>Search</button>
      <div>{user && "Name: " + user.name}</div>
      <div>{user && "Age: " + user.age}</div>
    </div>
  );
};

export default UserSearchRef;
