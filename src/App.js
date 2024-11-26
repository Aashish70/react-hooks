import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import ClassCounterTwo from "./components/ClassCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import ClassCounterEffect from "./components/ClassCounterEffect";
import HookCounterEffect from "./components/HookCounterEffect";
import ClassCounterEffectTwo from "./components/ClassCounterEffectTwo";
import HookCounterEffectTwo from "./components/HookCounterEffectTwo";
import ClassMouse from "./components/ClassMouse";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import ComponentC from "./components/ComponentC";
import ReduceHookCounter from "./components/ReduceHookCounter";
import ReduceHookCounterTwo from "./components/ReduceHookCounterTwo";

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <ClassCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <ClassCounterEffect /> */}
      {/* <HookCounterEffect /> */}
      {/* <ClassCounterEffectTwo /> */}
      {/* <HookCounterEffectTwo /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      
      {/* <UserContext.Provider value={"Ashish"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <ReduceHookCounter /> */}
      <ReduceHookCounterTwo />
    </div>
  );
}

export default App;
