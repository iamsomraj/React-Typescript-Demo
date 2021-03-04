import { Component } from "react";

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

class UserSearchCC extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  };

  searchHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const foundUser = this.props.users.find((user) =>
      user.name.toUpperCase().includes(this.state.name.toUpperCase())
    );
    this.setState({
      user: foundUser,
    });
  };

  render() {
    const { user, name } = this.state;
    return (
      <div>
        <h3>User Search</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.searchHandler}>Search</button>
        <div>{user && "Name: " + user.name}</div>
        <div>{user && "Age: " + user.age}</div>
      </div>
    );
  }
}

export default UserSearchCC;
