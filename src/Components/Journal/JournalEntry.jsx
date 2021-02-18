import React from "react";
import 'antd/dist/antd.css';
import { useMediaQuery } from "my-customhook-collection";
const JournalEntry = () => {
  const mediaQuery = useMediaQuery("(max-width: 1000px)");
  return (
    <div
      className={
        mediaQuery === false ? "journal__entry " : "journal__entry-responsive "
      }
    >

      <div
        className="journal__entry-picture"
      >
        <img src="https://picsum.photos/seed/picsum/200/300" alt="image1"/>
      </div>
      <div
        className={
          mediaQuery === false
            ? "journal__entry-body"
            : "journal__entry-body-responsive"
        }
      >
        <p className="journal__entry-title">
          New Entry
        </p>
      </div>
      <div className="journal__entry-date-box">
          <span>Monday</span>
          <h4>2</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
