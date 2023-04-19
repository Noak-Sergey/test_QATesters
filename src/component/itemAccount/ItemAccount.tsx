import { FC } from 'react';

type ItemAccountPropsType = {
  accountName: string;
  terminalName: string;
};

const ItemAccount: FC<ItemAccountPropsType> = ({ accountName, terminalName }) => {
  return (
    <div>
      {accountName} / {terminalName}
    </div>
  );
};

export default ItemAccount;
