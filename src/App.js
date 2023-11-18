import './App.css';
import BoxComp from './component/BoxComp/boxComp';
import ScrollParagraph from './component/scrollParagraph/scrollParagraph';
import CursorContextProvider from './component/Cursor/CursorContextProvider';
import Cursor from './component/Cursor/Cursor';
import Gallery from './component/Gallery/Gallery';

function App({children}) {
  return (
    <div className="App">
      <CursorContextProvider>
      <Cursor />
      <BoxComp />
    </CursorContextProvider>
      <ScrollParagraph />
      <Gallery/>
    </div>
  );
}

export default App;
