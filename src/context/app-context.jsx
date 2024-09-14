import { createContext } from "react";

const AppContext = createContext({
  user: {name: '', id: '', tasks: []},
  updateUser: () => {}
})

export default AppContext