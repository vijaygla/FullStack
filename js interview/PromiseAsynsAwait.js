async function fetchData() {
    try {
        const result1 = await fetchData();
        const result2 = await fetchData(result1);
        console.log(result2);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

