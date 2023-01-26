import { Paragraph, Top_bar,CommentUs } from "./about_us_component";

function AboutUs(){
    return(
        <>
        <Top_bar></Top_bar>
        <center>
        <div class="about_us_body">
            <Paragraph></Paragraph>
            <CommentUs></CommentUs>
        </div>
        </center>
        </>
    );
}
export default AboutUs