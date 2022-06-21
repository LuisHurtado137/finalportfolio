//styles
import {
  MainContent,
  Article,
  HomeContainer,
  SocialMedia,
} from "../styles/homeStyles";
//styles

//import logos
import github from "../assests/github.png";
import twitter from "../assests/twitter.png";
import linkedin from "../assests/linkedin.png";
import instagram from "../assests/instagram.png";
import twitch from "../assests/twitch.png";
import sharingan from "../assests/sharingan.png";
import { NavigationBar } from "../nav/navbar";
//import logos

export function Home() {
  return (
    <HomeContainer id="home">
      <NavigationBar />
      <MainContent>
        <Article>
          <h1>
            Hi, I'm Luis Hurtad
            <a href="https://www.youtube.com/watch?v=mP-ksrXK4QA">
              <img
                id="sharinganIcon"
                src={sharingan}
                alt="sharingan logo spinning"
              />
            </a>
          </h1>
          <h2>Frontend developer</h2>
        </Article>
        <SocialMedia>
          <a href="https://twitter.com/Luis_Hurtado_1">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://github.com/LuisHurtado137">
            <img src={github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/luis-fernando-h-4b541513a/">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/luis.hurtado18/?hl=es">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.twitch.tv/smasher_137">
            {" "}
            <img src={twitch} alt="Twitch" />
          </a>
        </SocialMedia>
      </MainContent>
    </HomeContainer>
  );
}
