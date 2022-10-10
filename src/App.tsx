import {RouterProvider} from 'react-router-dom';
import { StrictMode } from "react";
import router from '@/routes';

function App() {
    return ( 
       <StrictMode>
            <RouterProvider router={router} />
       </StrictMode>
     );
}

export default App;