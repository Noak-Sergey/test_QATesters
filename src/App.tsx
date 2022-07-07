import './App.scss';
import Table from 'react-bootstrap/Table';
import { db } from './api/api';
import { Btn } from './component/button/Button';
import { ItemDate } from './component/itemDate/ItemDate';


function App() {
  
  
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
          {db.map((item, i) => {
            return (
          <tr key={item.oguid}>
            <td>№{item.id} / <ItemDate time={item.created_date}/></td>
            <td>{item.order_type.name} / {item.created_user.surname} {item.created_user.name.slice(0, 1)}. {item.created_user.patronymic.slice(0, 1)}</td>
            <td>{item.account.name} / {item.terminal.name}</td>
            <td><Btn status={item.status}/></td>
          </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
