export default function Home({ token }) {
    return (
        <div className="homePage">
            {token ?
                <div>
                    <h1>Hii {token}!</h1>
                    <h1 >Welcome to Password Reset App</h1>
                    <p>@copyright Nishant Phule 2023</p>
                </div>
                :
                <div>
                    <h1 >Go to Register Page,If you are new or Login</h1>
                    <p>@copyright Nishant Phule 2023</p>
                </div>}

        </div>
    )
}
