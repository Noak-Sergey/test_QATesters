import './App.scss';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { db } from './api/api';


function App() {
  console.log(db);
  
  return (
    <div className="App">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Номер/Дата</th>
            <th>Тип задания/Автор</th>
            <th>Аккаунт/Терминал</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>№1780 28.10.2021 20:42</td>
            <td>Доставка клиенту Админов Т.Т</td>
            <td>Сысоева Сбыт Липецк</td>
            <td><Button variant="danger">Выполнено</Button></td>
          </tr>
          <tr>
            <td>№1780 28.10.2021 20:42</td>
            <td>Доставка клиенту Админов Т.Т</td>
            <td>Сысоева Сбыт Липецк</td>
            <td><Button variant="danger">Выполнено</Button></td>
          </tr>
          <tr>
            <td>№1780 28.10.2021 20:42</td>
            <td>Доставка клиенту Админов Т.Т</td>
            <td>Сысоева Сбыт Липецк</td>
            <td><Button variant="danger">Выполнено</Button></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
