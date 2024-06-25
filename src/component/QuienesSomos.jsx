import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import React, { useEffect, useRef, useState } from "react";

const QuienesSomos = ({ QuienesSomos }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutUs">
      {QuienesSomos.history.map((section, i) => {
        return (
          <div
            key={i}
            className={i % 2 === 0 ? "aboutUsSec Inpar" : "aboutUsSec Par"}
            id={section.id}
          >
            <img src={section.image} alt="" />
            <div className="content">
              <h3>{section.title}</h3>
              <p>{section.descript}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuienesSomos;
