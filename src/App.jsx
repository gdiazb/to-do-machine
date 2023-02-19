import React from "react";
import { TodoProvider } from "./TodoConstext";

import { View } from './View'


function App() {
  return (
    <TodoProvider>
      <View />
    </TodoProvider>
  );
}

export default App;
