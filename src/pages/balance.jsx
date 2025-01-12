/* eslint-disable react/prop-types */
import MainLayout from "../components/Layouts/MainLayout";
import Card from "../components/Elements/Card";

const CardBalance = ({ cardTitle, logoSrc, accountNumber, totalAmount, cardType }) => {
  return (
    <div className="p-8 transition-transform transform hover:scale-105 w-full h-full">
      {/* Header Card */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-500">{cardTitle}</h2>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">{cardType}</span>
          {logoSrc ? (
            <img src={logoSrc} alt={cardType} className="h-6" />
          ) : (
            <span className="text-gray-500 text-sm"></span>
          )}
        </div>
      </div>

      {/* Account Details */}
      <div className="mb-2">
        <p className="text-xl font-bold">{accountNumber}</p>
        <p className="text-gray-500 text-sm">Account number</p>
      </div>
      <div className="mb-4">
        <p className="text-2xl font-bold">{totalAmount}</p>
        <p className="text-gray-500 text-sm">Total amount</p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-4">
        <button className="text-primary font-medium">Remove</button>
        <button className="bg-primary text-white py-1 px-3 rounded-md text-sm">
          Details &gt;
        </button>
      </div>
    </div>
  );
};
const cardData = [
  {
    cardTitle: "Credit Card",
    cardType: "Master Card",
    logoSrc: "/images/mc.png",
    accountNumber: "1234 5678 9012 8***",
    totalAmount: "$25000",
  },
  {
    cardTitle: "Checking",
    cardType: "All Bank Ltd",
    logoSrc: "/images/visa.png",
    accountNumber: "693 456 69 9****",
    totalAmount: "$25000",
  },
  {
    cardTitle: "Savings",
    cardType: "Brsc Bank Ltd",
    logoSrc: "/images/visa.png",
    accountNumber: "693 456 69 9****",
    totalAmount: "$25000",
  },
  {
    cardTitle: "Investment",
    cardType: "All Bank Ltd",
    logoSrc: "",
    accountNumber: "698 456 866 2****",
    totalAmount: "$25000",
  },
  {
    cardTitle: "Loan",
    cardType: "City Bank Ltd",
    logoSrc: "/images/visa.png",
    accountNumber: "383 456 896 6****",
    totalAmount: "$25,000",
  },
];

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      <div className="md:grid grid-cols-1 md:grid-cols-3 md:gap-x-6">
      {cardData.map((card, index) => (
          <Card
            key={index}
            title={index === 0 ? "Balances" : '\u00A0'}
            desc={
              <CardBalance
                cardTitle={card.cardTitle}
                cardType={card.cardType}
                logoSrc={card.logoSrc}
                accountNumber={card.accountNumber}
                totalAmount={card.totalAmount}
              />
            }
          />
        ))}
      </div>
    </MainLayout>
  );
};

export default BalancePage;
