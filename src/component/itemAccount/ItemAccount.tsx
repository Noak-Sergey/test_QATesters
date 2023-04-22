type ItemAccountPropsType = {
  accountName: string;
  terminalName: string;
};

function ItemAccount({ accountName, terminalName }: ItemAccountPropsType) {
  return (
    <div>
      {accountName} / {terminalName}
    </div>
  );
}

export default ItemAccount;
