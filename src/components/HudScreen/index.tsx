import Pointer from '@components/Pointer';
import './index.scss';

const HudScreen = () => {
  return (
    <div className="HudScreen">
      <Pointer />
      <div className="HudScreen__Vignette" />
      <div className="HudScreen__Text">
        <h2>great things are coming</h2>
        <h1>
          <span>Plaza</span>
          <br />
          <span>Creative</span>
          <br />
          <span>Collective</span>
        </h1>
      </div>

      <div className="HudScreen__Email">
        <h3>contato@theplaza.cc</h3>
      </div>
    </div>
  );
};

export default HudScreen;
