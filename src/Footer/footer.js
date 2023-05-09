import './footer.scss'
let date = new Date().getFullYear()
export default function Footer() {
    return (
        <div id="footer">
            <p className="center footer">Copyright Andrew {date} </p>
        </div>
    )
}
