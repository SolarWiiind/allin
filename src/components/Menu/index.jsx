import { Link } from "react-router-dom";
import "./index.css";

export let Menu = () => {
  return (
    <ul className="ul">
      <li className="logo">Logo</li>

      <li>
        <Link to="/page1">page 1</Link>
      </li>
      <li>
        <Link to="/page2">page 2</Link>
      </li>
      <li>
        <Link to="/page3">page 3</Link>
      </li>
      <li>
        <Link to="/page4">page 4</Link>
      </li>
      <li>
        <Link to="/page5">page 5</Link>
      </li>
      <li>
        <Link to="/page6">page 6</Link>
      </li>
      <li>
        <Link to="/page7">page 7</Link>
      </li>
      <li>
        <Link to="/page8">page 8</Link>
      </li>
      <li>
        <Link to="/page9">page 9</Link>
      </li>
      <li>
        <Link to="/page10">page 10</Link>
      </li>
    </ul>
  );
};
