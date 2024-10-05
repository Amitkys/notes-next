export function HomePage() {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table text-center">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td><button className="btn btn-success btn-xs px-2 lg:px-4 text-sm">more..</button></td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td><button className="btn btn-success btn-xs px-2 lg:px-4 text-sm">more..</button></td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td><button className="btn btn-success btn-xs px-2 lg:px-4 text-sm">more..</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}