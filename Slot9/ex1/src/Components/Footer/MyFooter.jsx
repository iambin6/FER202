import Button from "react-bootstrap/Button";
import "./Footer.css";


function MyFooter({author, email, linkGithub}) {
  return (
    <footer>
      <p>Author: {author}</p>
      <p>Created by: {email} </p>
      <p>&copy; {new Date().getFullYear()} HuyNHQ. All rights reserved </p>
      <Button variant="link" href="https://github.com/iambin6/FER202.git" >My Link Github {linkGithub} </Button>
    </footer>
  )
}
export default MyFooter;

