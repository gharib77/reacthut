import React from 'react'
import Users from "./composants/Users";
import {DataProvider} from "./contexts/DataProvider";

const App = ()=> {
  const wdate=new Date()
  console.log(wdate.toLocaleDateString())
  return (
    < >
      <DataProvider>
        <Users />
      </DataProvider>
    </>
  );
}

export default App;
