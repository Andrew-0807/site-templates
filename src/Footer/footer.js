import './footer.scss'
let date = new Date().getFullYear()
export default function Footer() {
    return (
        <>
            <hr className="invsBorder" />
            <p className="center footer">Copyright Andrew {date} </p>
        </>
    )
}
