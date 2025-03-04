import { Link } from "react-router-dom";
const About=()=>{
  return(
    <div className="About">
      <h1 className="About-Us">About Us</h1>
      <h4>Hello Mate,We Welcome You On My About Us Page</h4>
      <div className="About-mini">
       <pre>
        {
    `This is Gaurav Yadav,
  I am B.Tech Student,
        I used to Work on Various Projects,
        And You Are Seeing My projet.`}
       </pre>
       <p>Check My LinkedIn Profile</p>
       <Link to="https://www.linkedin.com/in/gaurav-yadav-2b7ab326a/">Click Here</Link>

       <p>Check My GitHub Profile</p>
       <Link to="https://github.com/CODEBREAKERGAURAV">Click Here</Link>
      </div>
      
    </div>
  )
}

export default About;