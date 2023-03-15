//Isaiah Keith Ferguson
//3-14-2023
//Advice Generator in React
//Peer Review By Brandon Le: Overall I think he did a good job with the assignment. I see that he added his own design styling with the red circle in the background. I do think it looks really close to the original, if I had to nit pick on a few things I think the spacing at the top for the Advice # could go down a little bit more from the top. Also on mobile there was at least one advice that was a little bit too long, and it overlapped with the dividing line at the bottom. Could also position the div up higher, but I'm wondering if that could also be due to us using different size screens so the height may be different even though I viewed it in the 375 for mobile and 1440 for desktop.  But good job 10/10. Also I noticed that we set up our files differently. Isaiah had all fonts, images, and the css and js file in the came components folder. I had my fonts and images in my assets still within the src folder. and only my js and css file were together in the component file. So I might try to organize it differently next time.

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchComponent from './components/fetchcomponent';
function App() {
  return (
    <div>
<FetchComponent></FetchComponent>
    </div>
  );
}

export default App;
