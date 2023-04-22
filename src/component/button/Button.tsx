import Button from 'react-bootstrap/Button';

type BtnPropsType = {
  status: string;
};

function Btn({ status }: BtnPropsType) {
  let btnStyle = '';
  let btnName = '';

  const onVariant = (condition: string) => {
    switch (condition) {
      case 'completed':
        btnStyle = 'success';
        btnName = 'Выполнено';
        return;
      case 'new':
        btnStyle = 'danger';
        btnName = 'Новое';
        return;
      case 'assigned_to':
        btnStyle = 'warning';
        btnName = 'Назначено';
        return;
      case 'started':
        btnStyle = 'primary';
        btnName = 'Выполняется';
        return;
      case 'declined':
        btnStyle = 'dark';
        btnName = 'Отменено';
        return;
      default:
        btnStyle = '';
        btnName = '';
    }
  };
  onVariant(status);

  return (
    <Button style={{ width: '100px' }} href="#" variant={btnStyle} size="sm">
      {btnName}
    </Button>
  );
}

export default Btn;
