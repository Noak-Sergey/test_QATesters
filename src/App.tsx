import React, { useState } from 'react';
import './App.scss';
import Table from 'react-bootstrap/Table';
import { db } from './api/api';
import { Btn } from './component/button/Button';
import { ItemDate } from './component/itemDate/ItemDate';
import { ItemAccount } from './component/itemAccount/ItemAccount';
import { Paginator } from './component/paginator/paginator';


function App() {

  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemsPerPage] = useState<number>(10) //кол-во отображаемых элементов


  const lastItemIndex = currentPage * itemsPerPage
  const firstItemIndex = lastItemIndex - itemsPerPage
  const currentItem = db.slice(firstItemIndex, lastItemIndex)

  const paginate = (num: number) => {
      setCurrentPage(num)
  }

  const nextPage = () => {
    setCurrentPage(prev => prev + 1)
  }

  const prevPage = () => {
    setCurrentPage(prev => prev - 1)
  }
  
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
          {currentItem.map((item) => {
            return (
              <tr key={item.oguid}>
                <td>№{item.id} / <ItemDate time={item.created_date}/></td>
                <td>{item.order_type.name} / {item.created_user.surname} {item.created_user.name.slice(0, 1)}. {item.created_user.patronymic.slice(0, 1)}.</td>
                <td className='item-account'><ItemAccount accountName={item.account.name} terminalName={item.terminal.name}/></td>
                <td><Btn status={item.status}/></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <div >
        <Paginator 
          itemsPerPage={itemsPerPage} 
          totalItems={db.length} 
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}/>
      </div> 
    </div>
  );
}

export default App;
