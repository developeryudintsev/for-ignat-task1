import React, {useState} from 'react';
import './App.css';
import Telegram from "./task1/Telegram";
import {v1} from "uuid";

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
        arQualities = arQualities.filter(f => f.id !== id)
        setarQualities(arQualities)
    }


    let [filtered, setFiltered] = useState('All')
    let filteredarQualities = arQualities;
    if (filtered === 'HightPrioritet') {
        filteredarQualities = arQualities.filter(f => f.prioritet==='hight');
    }
    if (filtered === 'MiddlePrioritet') {
        filteredarQualities = arQualities.filter(f => f.prioritet==='middle');
    }
    if (filtered === 'LowPrioritet') {
        filteredarQualities = arQualities.filter(f => f.prioritet==='low');
    }

    function changeFilter(value: string) {
        setFiltered(value)
    }

    return (
        <div className="App">
            <Telegram
                name='Sasha'
                surName='Yudintsev'
                arQualities={filteredarQualities}
                Delete={Delete}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
//----------------------------------------------------------------------------
// import React, {useState} from 'react';
// import './App.css';
// import Telegram from "./task1/Telegram";
//
// function App() {
//     let [arQualities, setarQualities] = useState(
//         [
//             {id: 1, toDo: 'JS work', prioritet: 'hight'},
//             {id: 2, toDo: 'watch TV', prioritet: 'low'},
//             {id: 3, toDo: 'games', prioritet: 'middle'},
//             {id: 4, toDo: 'React', prioritet: 'hight'},
//             {id: 5, toDo: 'HTMl', prioritet: 'low'},
//         ]
//     )
//
//     function Delete(id: number) {
//         arQualities = arQualities.filter(f => f.id !== id)
//         setarQualities(arQualities)
//     }
//
//
//     let [filtered, setFiltered] = useState('All')
//     let filteredarQualities = arQualities;
//     if (filtered === 'HightPrioritet') {
//         filteredarQualities = arQualities.filter(f => f.prioritet==='hight');
//     }
//     if (filtered === 'MiddlePrioritet') {
//         filteredarQualities = arQualities.filter(f => f.prioritet==='middle');
//     }
//     if (filtered === 'LowPrioritet') {
//         filteredarQualities = arQualities.filter(f => f.prioritet==='low');
//     }
//
//     function changeFilter(value: string) {
//         setFiltered(value)
//     }
//
//     return (
//         <div className="App">
//             <Telegram
//                 name='Sasha'
//                 surName='Yudintsev'
//                 arQualities={filteredarQualities}
//                 Delete={Delete}
//                 changeFilter={changeFilter}
//             />
//         </div>
//     );
// }
//
// export default App;