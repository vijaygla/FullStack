export const EventProps = () => {
    const handleWelcomeUser = (user) => {
        alert(`Hey, ${user}`);
    }

    const handleHover = () => {
        alert(`Hey Thanks for hovering on it`);
    }
    return (
        <>
            <WelcomeUser
                onClick={() => handleWelcomeUser("Vijay")}
                onMouseEnter={handleHover}
            />
        </>
    )
}

const WelcomeUser = (props) => {
    const { onClick, onMouseEnter } = props;
    const handleGreeting = () => {
        console.log(`Hey user, Welcome`);
        onClick();
    }
    return (
        <>
            <button onClick={onClick}>click</button>
            <button onMouseEnter={onMouseEnter}>Hover me</button>
            <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}
