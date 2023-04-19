import { FC } from 'react';
import Pagination from 'react-bootstrap/Pagination';

type PaginatorPropsType = {
  itemsPerPage: number;
  totalItems: number;
  paginate: (num: number) => void;
  nextPage: () => void;
  prevPage: () => void;
};

const Paginator: FC<PaginatorPropsType> = ({
  itemsPerPage,
  totalItems,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumber: number[] = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    // <Pagination>
    //     <Pagination.First onClick={()=>{props.paginate(pageNumber[0])}}/>
    //     <Pagination.Prev onClick={props.prevPage} />
    //      <Pagination.Item onClick={()=>{props.paginate(1)}}>{1}</Pagination.Item>
    //      <Pagination.Item onClick={()=>{props.paginate(2)}}>{2}</Pagination.Item>
    //      <Pagination.Item onClick={()=>{props.paginate(3)}}>{3}</Pagination.Item>
    //      <Pagination.Item onClick={()=>{props.paginate(4)}}>{4}</Pagination.Item>
    //      <Pagination.Item onClick={()=>{props.paginate(5)}}>{5}</Pagination.Item>
    //      <Pagination.Item onClick={()=>{props.paginate(6)}}>{6}</Pagination.Item>
    //      <Pagination.Item onClick={()=>{props.paginate(7)}}>{7}</Pagination.Item>
    //      <Pagination.Item onClick={()=>{props.paginate(8)}}>{8}</Pagination.Item>
    //      <Pagination.Item onClick={()=>{props.paginate(9)}}>{9}</Pagination.Item>
    //      <Pagination.Item onClick={()=>{props.paginate(10)}}>{10}</Pagination.Item>
    //     <Pagination.Next onClick={props.nextPage} />
    //     <Pagination.Last onClick={()=>{props.paginate(pageNumber.length)}} />
    // </Pagination>

    //или такой вариант

    <ul className="pagination">
      <li className="page-item">
        <a
          href="#"
          className="page-link"
          onClick={() => {
            paginate(pageNumber[0]);
          }}
        >
          {'<<'}
        </a>
      </li>
      <li className="page-item">
        <a href="#" className="page-link" onClick={prevPage}>
          {'<'}
        </a>
      </li>
      {pageNumber.map(num => (
        <li className="page-item" key={num}>
          <a
            href="#"
            className="page-link"
            onClick={() => {
              paginate(num);
            }}
          >
            {num}
          </a>
        </li>
      ))}
      <li className="page-item">
        <a href="#" className="page-link" onClick={nextPage}>
          {'>'}
        </a>
      </li>
      <li className="page-item">
        <a
          href="#"
          className="page-link"
          onClick={() => {
            paginate(pageNumber.length);
          }}
        >
          {'>>'}
        </a>
      </li>
    </ul>
  );
};

export default Paginator;
