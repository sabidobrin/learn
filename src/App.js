import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { BinaryTree, DuplicateIntegers, LinkedList, Parentheses, ParkingLot,
    RightmostBit, RomanNumeral, Runtime, Todo, WebCrawler } from './tasks';
import { Tasks } from './views';

export default function App () {

    return (<div class="App">
        <BrowserRouter>
            <Routes>
            <Route path='/tasks/todo' element={<Todo />} />
            <Route path='/tasks/linked' element={<LinkedList />} />
            <Route path='/tasks/binary-tree' element={<BinaryTree />} />
            <Route path='/tasks/duplicate-integers' element={<DuplicateIntegers />} />
            <Route path='/tasks/parentheses' element={<Parentheses />} />
            <Route path='/tasks/parking' element={<ParkingLot />} />
            <Route path='/tasks/rightmost-bit' element={<RightmostBit />} />
            <Route path='/tasks/roman' element={<RomanNumeral />} />
            <Route path='/tasks/runtime' element={<Runtime />} />
            <Route path='/tasks/web-crawler' element={<WebCrawler />} />

            <Route path='/tasks' element={<Tasks />} />
            <Route path='/' element={<Tasks />} />
            </Routes>
        </BrowserRouter>
    </div>);
}