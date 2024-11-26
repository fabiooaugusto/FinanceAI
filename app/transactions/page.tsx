import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButon from "../_components/add-transaction-button";

const TransactionsPage = async () => {
  // cessar as transações do meu Banco
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      {/*Título e botão*/}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>

        <AddTransactionButon />
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
