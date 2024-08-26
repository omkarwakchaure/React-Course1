import Examples from "./components/Examples";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Section from "./components/Section";
import Tabs from "./components/Tabs";
 
 

function App() {
  return (
    <>
     <Header/>
      <main>
        <CoreConcepts/>
        <Examples/>
        <Section/>
        <Tabs/>
         
         
      </main>
    </>
  );
}

export default App;
