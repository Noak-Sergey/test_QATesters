type ItemAutorPropsType = {
  surname: string;
  name: string;
  patronymic: string;
};

function ItemAutor({ surname, name, patronymic }: ItemAutorPropsType) {
  return (
    <div>
      {surname} {name.slice(0, 1)}. {patronymic.slice(0, 1)}.
    </div>
  );
}

export default ItemAutor;
