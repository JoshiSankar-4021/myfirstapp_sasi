import Counter from "./Counter";
import Media from "./Media";
import {Routes,Route} from 'react-router-dom'
import Navtag from "./Navtag"
import Linktag from "./Linktag"
import Buttonnav from "./Buttonnav";
function App(){
  return(
   <>
    <Routes>
      <Route path="/media" element={<Media/>} />
      <Route path="/counter" element={<Counter/>} />
      <Route path="/navtag" element={<Navtag/>}/>
      <Route path="/linktag" element={<Linktag/>}/>
      <Route path="/" element={<Buttonnav/>}/>
    </Routes>
   </>
  )
}

export default App;