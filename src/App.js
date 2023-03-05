import {useState} from "react";
import {Route, Routes} from "react-router-dom";

import './styles/reset.css';
import './styles/style.css';

import {HomePage, Editor, News, Database} from "./pages";
import {Header, Footer} from "./components";

function App() {
    const blocks = [
        {
            "title":"Животное",
            "description":"Животные - не люди"
        },
        {
            "title":"Свинья",
            "description":"Свиньи - тоже люди"
        },
        {
            "title":"Не свинья",
            "description":"Ну вот как-то так"
        },
    ]

    const db = [
        {
            "title": 'Title1'
        },
        {
            "title": 'Title2'
        },
        {
            "title": 'Title3'
        },
        {
            "title": 'Title4'
        },
        {
            "title": 'Title5'
        },
    ]
    const [activeTheme, SetactiveTheme] = useState(1)
    const onselectTheme = (v) =>{
        if(v === 0){
            SetactiveTheme(1)
        }else{
            SetactiveTheme(0)
        }
    }
  return(
      <div className={activeTheme === 0 ? 'light': 'dark'}>
      <Header
          tfunc={onselectTheme}
          activeth={activeTheme}
      />
      <Routes>
        <Route path="/" element={blocks.map(blocks =><HomePage
            title={blocks.title}
            desc={blocks.description}
        />)} xact/>)

        <Route path="/Editor" element={<Editor
        actTheme = {activeTheme}
        />} exact/>
          <Route path='/News' element={<News/>} exact/>
          <Route path='/database' element={<Database
            obj = {db}
          />} exact/>
      </Routes>
      <Footer/>
      </div>
  );
}

export default App;
