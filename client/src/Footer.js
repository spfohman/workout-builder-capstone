import React from "react";

function Footer() {
  return (
    <div>
      <footer>
        <p>Questions about the app?</p>
        <a
          className="bloglinks"
          target="_blank"
          rel="noreferrer"
          href="mailto:pfohman.sarah@gmail.com"
        >
          Email: Sarah Pfohman
        </a>
        <br />
        <p>
          Check out other projects:{" "}
          <a
            className="bloglinks"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/spfohman"
          >
            Github
          </a>
        </p>
        <br />
        <p>
          Connect:{" "}
          <a
            className="bloglinks"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/sarah-pfohman-998a8246/"
          >
            Linkedin
          </a>
        </p>
      </footer>
    </div>
  );
}
export default Footer;
