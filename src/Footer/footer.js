import './footer.scss'
let date = new Date().getFullYear()
export default function Footer() {
    return (
        <>
            <p className="center footer">Copyright Andrew {date} </p>
        </>
    )
}
