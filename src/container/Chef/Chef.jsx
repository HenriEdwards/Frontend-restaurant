import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={ images.chef } alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Excepteur est sunt dolor incididunt sunt exercitation pariatur nostrudet.</p>
        </div>
        <p className="p__opensans">Amet ea esse do occaecat mollit ipsum irure non. Sit irure exercitation incididunt Lorem velit. 
        Et commodo nisi laborum velit do ea eiusmod quis qui ea. Minim magna voluptate velit dolor consectetur et do laborum fugiat. 
        Qui adipisicing consequat aute dolore culpa nulla.</p>
      </div>
      <div className="app__chef-sign">
        <p className="p__opensans">Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
