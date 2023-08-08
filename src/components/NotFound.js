import { useNavigate } from "react-router-dom"

export function NotFound() {

    const navigate = useNavigate();

    return (
        <div className="notFound" onClick={() => navigate('/')}>
        </div>
    )
}
