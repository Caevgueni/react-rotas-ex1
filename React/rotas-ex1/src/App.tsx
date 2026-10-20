import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Promotion from "./routes/Promotion";
import HomeBody from "./routes/HomeBody";
import Subscription from "./routes/Subscription";




function App() {
  

  return (
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Home />} >
    <Route index element= {<HomeBody />} />
    <Route path="sub" element= {<Subscription />} />
    <Route path="promotion" element= {<Promotion />} />
    
 </Route>

 </Routes>
 
 </BrowserRouter>
  );
}

export default App
