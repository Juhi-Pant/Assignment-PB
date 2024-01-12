import './App.css';
import Navbar from './components/Navbar'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import img1 from './images/img1.png'
import img2 from './images/img2.png'

function App() {
  return (
    <div>
      <Navbar className="nav"/>
      
      <div className='pageBody'>
      <div className='page'>
        <Page1 className='pg11' image={img1} imgClass='pg1img1' heading="platform" headingClass="headingClass1" h2="NFD.gg" h2class="h2class1"
          pContent="An Alpha community 2.0 with its own platform for participating, searching, and tracking any crypto related information."
          contentpg1="content1pg1"
          btnName="Try Platform"
          btnNext="How it works?"
        />
        <Page1 className='pg12' image={img2} imgClass='pg1img2' heading="software" headingClass="headingClass2" h2="Combine" h2class="h2class2"
        pContent="Handle your crypto-wallets, farm activities and retrodrops on a single app."
        contentpg1="content2pg1"
        btnName="Download"
        btnNext="How it works?"
        />
      </div>
      </div>
       
      
      <Page2/>
      <Page3/>
      

    </div>
  );
}

export default App;
