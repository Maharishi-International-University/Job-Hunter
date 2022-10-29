import { useState, useEffect } from "react";
import JobCard from "./JobCard";

export default function SearchBar() {

    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    const [outPut, setOutput] = useState([]);

    const getData = async () => {
        const res = await fetch("http://localhost:8080/jobHunter/list/jobs")
            .then((res) => res.json())
        setData(res)
        console.log(res)
    };

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setOutput([])
        data.filter(item => {
            if (item.title.toLowerCase().includes(input.toLowerCase())) {
                setOutput(outPut => [...outPut, item])
            }
        })
    }, [input])

    return (
        <>
            <div className="shadow-lg p-3 mb-5 bg-body rounded bg-color">
          
                <div class="row g-3 ">
                    <div className="col-auto">
                        <input
                            class="form-control"
                            type="text"
                            placeholder="Search Job by Title"
                            name="search"
                            onChange={event => setInput(event.target.value)}
                        />
                    </div>
                    <div className="col-auto">
                        <button
                            for="inputPassword6"
                            className="btn btn-lg btn-primary my-2 my-sm-0"
                            type="submit"
                        >Search</button>
                    </div>
                </div>
            </div>

            {
                outPut.map(job => {
                    return <JobCard key={job.job_id}
                        id={job.job_id}
                        title={job.title}
                        postDate={job.postDate}
                        expirationDate={job.expirationDate}
                        description={job.description}
                        website={job.website}

                    />
                })
            }

        </>
    )
}
