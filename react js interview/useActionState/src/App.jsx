import { useActionState } from "react"

function App() {

    const handleSubmit = async (previousData, formData) => {
        let name = formData.get("name");
        let password = formData.get("password");

        console.log("Name:", name);
        console.log("Password:", password);

        await new Promise(res => setTimeout(res, 5000));
    }

    const [data, action, pending] = useActionState(handleSubmit, undefined);


    return (
        <>
            <h1>useActionState Example</h1>

            <form action={action}>
                <input type="text" name="name" placeholder="enter your name" />
                <br /><br />
                <input type="password" name="password" placeholder="enter your password"/>
                <br /><br />
                <button disabled={pending}>Submit</button>
            </form>
        </>
    )
}

export default App
