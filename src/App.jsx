import {Hero,CoustomerReview,PopularProduct,SupperQuality,Subscribe,Services,SpecialOffer,Footer} from  './sections/index';
import Nav from './component/Nav.jsx';

const App = ()=>(
  <main className="relative ">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
     <Hero/>
    </section>
    <section className="padding">
      <PopularProduct/>
    </section>
    <section className="padding">
    <SupperQuality/>
    </section>
    <section className="padding-x py-10">
    <Services/>
    </section>
    <section className="padding">
    <SpecialOffer/>
    </section>
    <section className="padding bg-pale-blue ">
    <CoustomerReview/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
    <Subscribe/>
    </section>
    <section className="padding-x padding-t pb-8 bg-black">
    <Footer/>
    </section>
  </main>
)

export default App;