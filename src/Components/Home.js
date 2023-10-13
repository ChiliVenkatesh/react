import React from "react";
import { useContext } from "react";
import { Store } from '../App';
function Home() {
    let sno = 1;
    const [data, setDate] = useContext(Store)
    return (
        <>
            <table className="table table-border">
                <thead>
                    <tr>
                        <th>SNO</th>
                        <th>NAME</th>
                        <th>ROLLNO</th>
                        <th>BRANCH</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((element, index) => {
                            return (
                                <>
                                    <tr>
                                        <td>{sno++}</td>
                                        <td>{element.Name}</td>
                                        <td>{element.Roll}</td>
                                        <td>{element.Branch}</td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}
export default Home;