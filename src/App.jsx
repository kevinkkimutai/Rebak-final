import { Routes, Route  } from "react-router-dom";
import {
  AboutPage,
  BarbedFence,
  ChainLinkService,
  Concrete,
  ContactPage,
  Gallery,
  GateFence,
  Landing,
  NotFound,
  Perimeter,
  Wooden,
} from "./pages";

import Layout from "./layouts/Layout";

export default function App() {
 

  return (

      <Routes>
        
          <Route path="" element={<Layout />} >
            
                <Route index element={<Landing />}  />
                <Route path="/about" element={<AboutPage />}  />
                <Route path="/contact" element={<ContactPage />}  />
                <Route path="/gallery" element={<Gallery />}  />
                <Route path="/chainlink" element={<ChainLinkService />}  />
                <Route path="/wooden" element={<Wooden />}  />
                <Route path="/barbed" element={<BarbedFence />}  />
                <Route path="/perimeter" element={<Perimeter />}  />
                <Route path="/gate" element={<GateFence />}  />
                <Route path="/concrete" element={<Concrete />}  />



          </Route>



        {/* not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
   
  );
}
