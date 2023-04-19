import { FC } from 'react';
import Button from 'react-bootstrap/Button';

type BtnPropsType = {
  status: string;
};

const Btn: FC<BtnPropsType> = ({ status }) => {
  let btnStyle = '';
  let btnName = '';

  const onVariant = (status: string) => {
    switch (status) {
      case 'completed':
        return (btnStyle += 'success'), (btnName += 'Выполнено');
      case 'new':
        return (btnStyle += 'danger'), (btnName += 'Новое');
      case 'assigned_to':
        return (btnStyle += 'warning'), (btnName += 'Назначено');
      case 'started':
        return (btnStyle += 'primary'), (btnName += 'Выполняется');
      case 'declined':
        return (btnStyle += 'dark'), (btnName += 'Отменено');
    }
  };
  onVariant(status);

  return (
    <Button style={{ width: '100px' }} href="#" variant={btnStyle} size="sm">
      {btnName}
    </Button>
  );
};

export default Btn;
