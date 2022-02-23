import Thumbnails from "./components/thumbnails";
import "./styles.css";

export default function HomePage() {
  return (
    <div className="HomePage">
      <h1 className="welcome-message">
        Welcome to Jot.
        <img
          alt="Pen drawing "
          src="https://img.icons8.com/glyph-neue/32/000000/autograph.png"
          href="https://icons8.com/icon/fx5qUnmt4dAr/autograph"
        />
      </h1>
      <h3>Pick your canvas</h3>
      <div className="canvas-options">
        <Thumbnails />
      </div>
    </div>
  );
}
