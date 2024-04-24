import './App.css';
import { ProductProvaider } from './Context';
import { RoteConfig } from './RoteConfig';

function App() {
    return <div>
        <ProductProvaider>
            <RoteConfig />
        </ProductProvaider>
    </div>
}

export default App