import './App.css';
import Card from './components/Card'; 
//import 1536x864_1664298933203 (1) from 

function App() {
  return (
    <div className="App">
      <Card className="card" style="width: 18rem;" img ={"https://mykaleidoscope.ru/uploads/posts/2021-12/1640245588_41-mykaleidoscope-ru-p-krasivie-tortiki-41.jpg"}>
        <div className="card-body">
        <h5 className="card-title">Delicious cake</h5>
        <p className="card-text">this wonderful cake will not leave anyone indifferent...</p>
      </div>
      </Card>
      <Card className="card" style="width: 18rem;" img ="">
        <div className="card-body">
        <h5 className="card-title">Diet cake</h5>
        <p className="card-text">for those who follow the figure, there is also a recipe...</p>
      </div>
      </Card>
    </div>
  );
}

export default App;
