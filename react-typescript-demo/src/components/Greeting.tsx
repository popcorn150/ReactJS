type GreetProps = {
    name: {
        first: string
        last: string
    }
    messageCounts?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCounts = 10 } = props
    return (
        <div>
            <h2>
                {
                    //checks if isLoggedIn, if true then render this message if not then render the other message...
                    props.isLoggedIn ? `Welcome ${props.name.first} ${props.name.last}! You have ${messageCounts} unread messages` : `Welcome Guests`
                }
            </h2>
        </div>
    )
}
