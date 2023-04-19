import { useEffect, useState } from 'react';
import './App.scss';
import Table from 'react-bootstrap/Table';
import { Btn } from './component/button';
import { ItemDate } from './component/itemDate';
import { ItemAccount } from './component/itemAccount';
import { Paginator } from './component/paginator';
import { getData } from './api/api';
import { ItemType } from './type';
import { ItemAutor } from './component/itemAutor';

function App() {
  const [items, setItems] = useState<ItemType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10); // number of displayed items

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItem = items.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    getData('http://localhost:3000/data').then(data => {
      setItems(data);
    });
  }, []);

  const paginate = (num: number) => {
    setCurrentPage(num);
  };

  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="app">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Номер/Дата</th>
            <th>Тип задания/Автор</th>
            <th>Аккаунт/Терминал</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          {currentItem.map(item => {
            return (
              <tr key={item.oguid}>
                <td>
                  №{item.id} / <ItemDate time={item.created_date} />
                </td>
                <td>
                  {item.order_type.name} /{' '}
                  <ItemAutor
                    surname={item.created_user.surname}
                    name={item.created_user.name}
                    patronymic={item.created_user.patronymic}
                  />
                </td>
                <td className="item-account">
                  <ItemAccount
                    accountName={item.account.name}
                    terminalName={item.terminal.name}
                  />
                </td>
                <td>
                  <Btn status={item.status} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div>
        <Paginator
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </div>
  );
}

export default App;
