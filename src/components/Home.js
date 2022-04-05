import { useAuth } from "reactfire";

export function Home() {

    const {user} = useAuth()
    console.log(user);

    return <div>home</div>
}