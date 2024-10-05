export default function add() {
    return (
        <div>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text font-semibold text-[19px]">What is your name?</span>
                </div>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-md text-lg border-2 border-gray-700 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:border-gray-500 focus:ring-0 focus:ring-gray-500"
                />
            </label>
            {/* 2nd labe  */}
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text font-semibold text-[19px]">What is your name?</span>
                </div>
                <textarea
                    placeholder="Type here"
                    className="input input-md text-lg border-2 border-gray-700 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:border-gray-500 focus:ring-0 focus:ring-gray-500"
                />
            </label>
        </div>
    )
}