import React, {useState} from 'react';
import './App.css';
import Telegram from "./task1/Telegram";
import {v1} from "uuid";
import {BrowserRouter, HashRouter, Route} from "react-router-dom";
import {Menu} from "./common/Menu";


function App() {
    let [arQualities, setarQualities] = useState(
        [
            {id: v1(), toDo: 'JS work', prioritet: 'hight'},
            {id: v1(), toDo: 'watch TV', prioritet: 'low'},
            {id: v1(), toDo: 'games', prioritet: 'middle'},
            {id: v1(), toDo: 'React', prioritet: 'hight'},
            {id: v1(), toDo: 'HTMl', prioritet: 'low'},
        ]
    )

    function Delete(id: string) {
        let newArQualities = arQualities.filter(f => f.id !== id)
        setarQualities(newArQualities)
    }


    let [filtered, setFiltered] = useState('All')
    let filteredarQualities = arQualities;
    if (filtered === 'HightPrioritet') {
        filteredarQualities = arQualities.filter(f => f.prioritet === 'hight');
    }
    if (filtered === 'MiddlePrioritet') {
        filteredarQualities = arQualities.filter(f => f.prioritet === 'middle');
    }
    if (filtered === 'LowPrioritet') {
        filteredarQualities = arQualities.filter(f => f.prioritet === 'low');
    }

    function changeFilter(value: string) {
        setFiltered(value)
    }

    let [opacity, setOpacity] = useState<boolean>(false)

    function MenuFoo(opacityValue: boolean) {
        setOpacity(opacityValue)
    }


    return (
        <div>
            <div className="App">
                <BrowserRouter>
                <Menu callBack={() => MenuFoo(!opacity)} opacity={opacity}/>
                    <Route path={'/monday'} render={() => <Telegram
                        name='Sasha'
                        surName='Yudintsev'
                        arQualities={filteredarQualities}
                        Delete={Delete}
                        changeFilter={changeFilter}
                    />}/>
                </BrowserRouter>
            </div>
        </div>
    );
   }

export default App;


//==============================
// import React, {useState} from 'react';
// import './App.css';
// import Telegram from "./task1/Telegram";
// import {v1} from "uuid";
// import {BrowserRouter, HashRouter} from "react-router-dom";
//
//
// function App() {
//     let [arQualities, setarQualities] = useState(
//         [
//             {id: v1(), toDo: 'JS work', prioritet: 'hight'},
//             {id: v1(), toDo: 'watch TV', prioritet: 'low'},
//             {id: v1(), toDo: 'games', prioritet: 'middle'},
//             {id: v1(), toDo: 'React', prioritet: 'hight'},
//             {id: v1(), toDo: 'HTMl', prioritet: 'low'},
//         ]
//     )
//
//     function Delete(id: string) {
//         let newArQualities = arQualities.filter(f => f.id !== id)
//         setarQualities(newArQualities)
//     }
//
//
//     let [filtered, setFiltered] = useState('All')
//     let filteredarQualities = arQualities;
//     if (filtered === 'HightPrioritet') {
//         filteredarQualities = arQualities.filter(f => f.prioritet === 'hight');
//     }
//     if (filtered === 'MiddlePrioritet') {
//         filteredarQualities = arQualities.filter(f => f.prioritet === 'middle');
//     }
//     if (filtered === 'LowPrioritet') {
//         filteredarQualities = arQualities.filter(f => f.prioritet === 'low');
//     }
//
//     function changeFilter(value: string) {
//         setFiltered(value)
//     }
//
//     return (
//         <div>
//             <div className="App">
//                 <BrowserRouter>
//                     <Route path='/monday' component={<Telegram
//                         name='Sasha'
//                         surName='Yudintsev'
//                         arQualities={filteredarQualities}
//                         Delete={Delete}
//                         changeFilter={changeFilter}
//                     />}/>
//                 </BrowserRouter>
//             </div>
//         </div>
//     );
// }
//
// export default App;