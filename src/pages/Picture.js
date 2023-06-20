import React from "react";

function Picture({ data }) {
  return (
    <div className="picture">
      <a target="_blank" href={data.photographer_url}>
        {data.photographer}
      </a>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        <a className="download" target="_blank" href={data.src.large}>
          Click
        </a>{" "}
        to Dowload
      </p>
    </div>
  );
}

export default Picture;
