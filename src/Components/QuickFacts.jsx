import { FaCheck } from "react-icons/fa";

const QuickFacts = () => {
    return (
        <div>
            <p className="text-center text-4xl font-semibold">Quick Facts</p>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-5 mt-20 mx-auto">
                <p className="flex gap-2 text-lg font-medium "><FaCheck className="text-white bg-blue-600 p-1 mt-[6px] w-7 rounded-full" />The UK undertakes 5% of the world’s scientific research and produces 14% of the world’s most frequently cited papers</p>
                <p className="flex gap-2 text-lg font-medium"><FaCheck className="text-white bg-blue-600 p-1 mt-[6px] w-7 rounded-full" />14 of the best student cities in the world are in The UK (QS Best Student Cities 2023)</p>
                <p className="flex gap-2 text-lg font-medium"><FaCheck className="text-white bg-blue-600 p-1 mt-[6px] w-7 rounded-full" />UK offers 131 universities of international repute to study from</p>
                <p className="flex gap-2 text-lg font-medium"><FaCheck className="text-white bg-blue-600 p-1 mt-[6px] w-7 rounded-full" />UK welcomes over 400,000 students every year</p>
                <p className="flex gap-2 text-lg font-medium"><FaCheck className="text-white bg-blue-600 p-1 mt-[6px] w-7 rounded-full" />12 of world’s top 100 universities are in The UK (QS World Rankings 2023)</p>
                <p className="flex gap-2 text-lg font-medium"><FaCheck className="text-white bg-blue-600 p-1 mt-[6px] w-7 rounded-full" />Admission without IELTS possible</p>
            </div>
        </div>
    );
};

export default QuickFacts;
