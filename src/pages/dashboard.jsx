/* eslint-disable no-unused-vars */
import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";
import bills from "../data/bills";
import expensesBreakdowns from "../data/expense";
import transactions from "../data/transaction";

const DashboardPage = () => {
  const tabs = ["All", "Revenue", "Expense"];
  const billCard = bills.map((bill) => (
    <div key={bill.id} className="flex gap-3 items-center ">
      <div className="flex gap-4 py-4 items-center  justify-center">
        <div className="bg-special-bg py-2  px-3 rounded-lg flex flex-col place-content-center">
          <p className="text-xs">{bill.month}</p>
          <p className="text-md">{bill.date}</p>
        </div>
        <div className="flex flex-col ">
          <img src={`/images/${bill.logo}`} className="w-[20px]" />
          <span className="text-sm">{bill.name}</span>
          <span className="text-xs text-gray-400">
            Last Charge - {bill.lastCharge}
          </span>
        </div>
      </div>
      <div>${bill.amount}</div>
    </div>
  ));

  const expenseCard = expensesBreakdowns.map((expensesBreakdown) => (
    <div key={expensesBreakdown.id} className="flex pb-4 justify-between">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {expensesBreakdown.icon}
        </div>
        <div className="ms-4">
          <span className="text-gray-02">{expensesBreakdown.category}</span>
          <br />
          <span className="font-bold text-lg">${expensesBreakdown.amount}</span>
          <div className="flex">
            <span className="text-gray-02">
              {expensesBreakdown.percentage}%*
            </span>{" "}
            {expensesBreakdown.arrow}
          </div>
        </div>
      </div>
      {/* <div className="flex place-content-center flex-col me-8">
        <Icon.ArrowRight />
      </div> */}
    </div>
  ));

  const transactionCard = transactions.map((transaction) => (
    <div key={transaction.id} className="flex justify-between my-6">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
          {transaction.icon}
        </div>
        <div className="ms-4">
          <span className="text-xl font-bold">
            {transaction.transactionName}
          </span>
          <br />
          <span className="text-gray-02">{transaction.shopName}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-xl font-bold text-gray-02">
          ${transaction.amount}
        </span>
        <br />
        <span className="text-gray-02">{transaction.date}</span>
      </div>
    </div>
  ));

  return (
    <MainLayout type="dashboard">
      {/* top content start*/}
      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <Card title="Total Balance" />
        <Card
          title="Goals"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore sapiente suscipit nam, vel officia ipsam praesentium earum unde provident nisi corrupti sit? Officia minima maxime magni quaerat id exercitationem."
        />
        <Card title="Upcoming Bill" desc={billCard} />
        <Card
          variant="md:col-span-1 md:row-span-2"
          title="Recent Transaction"
          desc={
            <div>
              <div className="mb-4">
                {tabs.map((tab) => (
                  <button
                    className="px-4 font-bold text-gray-01"
                    key={tab}
                    value={tab}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {transactionCard}
            </div>
          }
        />
        <Card variant="md:col-span-2" title="Statistics" />
        <Card
          variant="md:col-span-2"
          title="Expenses Breakdown"
          desc={<div className="lg:grid lg:grid-cols-3"> {expenseCard}</div>}
        />
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default DashboardPage;
