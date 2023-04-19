import { FC } from 'react';

type ItemAutorPropsType = {
  surname: string;
  name: string;
  patronymic: string;
};

const ItemAutor: FC<ItemAutorPropsType> = ({ surname, name, patronymic }) => {
  return (
    <div>
      {surname} {name.slice(0, 1)}. {patronymic.slice(0, 1)}.
    </div>
  );
};

export default ItemAutor;
