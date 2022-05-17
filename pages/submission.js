const Submission = () => {

    const handleSubmission = async () => {
        const info = {
            name: "Mohammed",
            age: 29
        };

        const response = await fetch("/api/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(info)
        });

        const data = response.json();
        console.log(data);
    };
    

    return(
        <div>
            <button onClick={handleSubmission}>Hit Route</button>
        </div>
    );
};

export default Submission;