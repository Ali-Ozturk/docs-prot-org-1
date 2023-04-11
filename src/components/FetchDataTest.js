import React, {useEffect} from 'react';

const FetchDataTest = () => {
    const [data, setData] = React.useState(null);

    useEffect(async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const jsonData = await response.json();

        setData(jsonData.title);
    }, [])

    if (data) {
        return (
            <div>
                Success!
                <p>Data: {data}</p>
            </div>
        )
    }

    return (
        <div>
            Failed!
        </div>
    );
};

export default FetchDataTest;