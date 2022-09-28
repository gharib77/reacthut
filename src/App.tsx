import React from 'react'
import Users from "./composants/Users";
import {DataProvider} from "./contexts/DataProvider";

const App = ()=> {
  return (
    < >
      <DataProvider>
        <Users />
      </DataProvider>
    </>
  );
}

export default App;
