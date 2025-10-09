import MyFooter from "../Components/Footer/MyFooter";

export default function FooterPage() {
    return (
    <div className="footer">
        <h2 style={{textAlign: "center", maxWidth: 600, margin: "0 auto"}}></h2>
       <MyFooter author = "HuyNHQ" email = "huynhqhe189004@fpt.edu.vn" linkGithub = "Movie Management Project" />
       </div>
    );
}

