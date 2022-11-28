import Salary from "./salary.png";
import Setup from "./setup.png";
import Speed from "./speed.png";
import Hidden from "./hidden.png";
import Debt from "./nodebt.png";
import Loved from "./loved.png";
import Handshake from "./handshake.png";
import Nocost from "./nocost.png";

const employersBenefitData = [
    {
        bgColor: null,
        heading: "Zero cost",
        description: "No signup fee",
        icon: Nocost,
    },
    {
        bgColor: "#80E4CC",
        heading: "Easy integration",
        description: "Three simple steps to set up Ogreem account",
        icon: Setup,
    },
    {
        bgColor: "#A5BEE2",
        heading: "Productive employee",
        description:
            "Improve employee productivity by eliminating financial stress",
        icon: Salary,
    },
    {
        bgColor: null,
        heading: "Loyalty to the Company",
        description: "Employees tend to stay where they are taken care of.",
        icon: Handshake,
    },
    {
        bgColor: "#80E4CC",
        heading: "Attract Talent",
        description:
            "Attract talent & reduce employee turnover via earned salary access",
        icon: Setup,
    },
    // {
    //     bgColor: "#E9AFAF",
    //     heading: "Mini HRMS Solution",
    //     description: "Zero-cost and compatible with your HRMS",
    //     icon: Speed,
    // },
    // {
    //     bgColor: null,
    //     heading: "Positive Workplace",
    //     description: "Positive attitude with clients and colleagues both .",
    //     icon: Loved,
    // },
];
const employeeBenefitData = [
    {
        bgColor: null,
        heading: "No hidden charges",
        description: "Only pay if you transact.",
        icon: Hidden,
    },
    {
        bgColor: null,
        heading: "Free from debt",
        description: "No more credit cards or loans.",
        icon: Debt,
    },
    {
        bgColor: "#A5BEE2",
        heading: "Salary in 24 hrs",
        description:
            "Improve employee productivity by eliminating financial stress",
        icon: Salary,
    },
    {
        bgColor: "#E9AFAF",
        heading: "Speedy Withdrawal",
        description: "Withdraw earned salary via MFS or Bank in hours",
        icon: Speed,
    },
    {
        bgColor: null,
        heading: "Share with loved ones",
        description: "Send money to your loved ones before payday.",
        icon: Loved,
    },
];

const benefitsData = [
    {
        title: "For Employees",
        data: employeeBenefitData,
    },
    { title: "For Employers", data: employersBenefitData },
];

export default benefitsData;
