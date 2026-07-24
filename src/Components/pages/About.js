import "./About.css";
import storyImg from "../../images/plat5.jpg";
import plat4Img from "../../images/plat4.jpg";
import plat6Img from "../../images/plat6.jpg";
import plat3Img from "../../images/plat3.jpg";
import chefImg from "../../images/chef.jpg";
import chef2Img from "../../images/chef2.jpg";
import chef3Img from "../../images/chef3.jpg";
import teamImg from "../../images/team.jpg";
import personnesImg from "../../images/personnes.jpg";
import personnes2Img from "../../images/personnes2.jpg";
import personnes3Img from "../../images/personnes3.jpg";
import restauMediImg from "../../images/restauMedi.jpg";

const About = () => {
    return (
        <>
            <div className="story-container">
                <h1>Our Story</h1>
                <p>Welcome to Little Lemon! We are a family-owned restaurant dedicated to providing the best Italian cuisine in town.</p>
                <p>Our restaurant provides authentic Italian and Spanish cuisine;<br />
                ● Our chefs have mastered the art of creating Mediterranean dishes;<br />
                ● We offer a wide variety of dishes including classic favorites, regional specialties, and contemporary recipes.<br />

                ● Three different locations in the main USA cities with the same menu;<br />
                ● Our staff is friendly, providing an enjoyable dining experience;<br />
                ● We offer great prices so you can enjoy Italian and Spanish cuisine without breaking the bank.<br />

                Our restaurant is a great place to enjoy a unique and delicious dining experience! We offer a wide selection of traditional Mediterranean dishes, from classic Spanish tapas to Italian-style pastas. Our ingredients are always fresh, and our chefs are dedicated to creating flavorful dishes that tantalize the taste buds. We also offer a full bar, with a selection of craft beers, wines, and signature cocktails.</p>
                <div className="story-img">
                    <img src={storyImg} alt="story img" />
                </div>
            </div>
            <div className="description-container">
                <h1>About Our Restaurant</h1>
                <p>Little Lemon is a chain of three top-rated Italian restaurants, 
                    conveniently located in New York, Boston, and Chicago. 
                    For four decades, Little Lemon restaurant has been serving the local community with the world's famous cuisines. 
                    Our diversified menu has something special to meet any taste.</p>
                <p>Signature Mediterranean dishes;<br />
                ● Many vegan and vegetarian options;<br />
                ● High quality of products in all our restaurants.<br />
                Our atmosphere is warm and inviting, perfect for any occasion, 
                whether you're looking for a romantic dinner or a casual night out with friends. 
                Come and experience the exquisite flavors of the Mediterranean with us!</p>
                <div className="gallery">
                    <img src={plat4Img} alt="plat img" />
                    <img src={plat6Img} alt="plat6 img" />
                    <img src={plat3Img} alt="plat3 img" />
                </div>
                
            </div>
            <div className="team-container">
                <h1>Our Team</h1>
                <p>Meet the talented chefs and staff who make Little Lemon a special place to dine!</p>
                <div className="gallery1">
                    <img src={chefImg} alt="chef img" />
                    <img src={chef2Img} alt="chef2 img"  />
                    <img src={chef3Img} alt="chef3 img" id="chef3"/>
                </div>
            </div>
            <div className="vacancy-container">
                <h1>Vacancy</h1>
                <p>Join our team and be a part of the Little Lemon family! 
                    We are currently hiring for various positions in our restaurants. 
                    If you are passionate about food and hospitality, we would love to hear from you. 
                    Please visit our careers page for more information on available positions and how to apply.</p>
                    <div className="vacancy-img">
                    <img src={teamImg} alt="plat img" />
                    </div>
            </div>
            <div className="space-container">
                <h1>Our Space</h1>
                <p>Our restaurants are designed to provide a warm and inviting atmosphere for our guests. 
                    Each location features a unique decor that reflects the vibrant culture of the Mediterranean. 
                    Whether you're dining in our cozy indoor seating area or enjoying the fresh air on our outdoor patio, you'll feel right at home at Little Lemon.</p>
                    <div className="gallery2">
                        <img src={personnesImg} alt="personnes img" />
                        <img src={personnes2Img} alt="personnes2 img" />
                        <img src={personnes3Img} alt="personnes3 img" />
                        <img src={restauMediImg} alt="restauMedi img" />
                    </div>
            </div>
        </>
    );
};

export default About;