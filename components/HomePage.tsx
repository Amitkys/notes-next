





export function HomePage() {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr className="font-bold text-sm">
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody className="font-bold ">
                        {/* row 1 */}
                        <tr>
                            <td>Cy Ganderton</td>
                            <td className="text-[15px] lg:text-[17px]">Quality Control Specialist</td>
                            <td><button className="btn btn-success btn-xs px-2 lg:px-4 text-sm">more..</button></td>
                        </tr>
                        {/* row 2 */}
                        <tr >
                            <td>Hart Hagerty</td>
                            <td className="text-[15px] lg:text-[17px]">Desktop Support Technician</td>
                            <td><button className="btn btn-success btn-xs px-2 lg:px-4 text-sm">more..</button></td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>Brice Swyre</td>
                            <td className="text-[15px] lg:text-[17px]">Tax Accountant</td>
                            <td><button className="btn btn-success btn-xs px-2 lg:px-4 text-sm">more..</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}