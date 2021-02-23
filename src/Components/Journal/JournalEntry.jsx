import React from "react";
import "antd/dist/antd.css";
import moment from "moment";
import { activeNote } from "../../Redux/Actions/notes";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "my-customhook-collection";
import {Image} from 'antd';
const JournalEntry = ({ id, date, title, body, url }) => {
  const dispatch = useDispatch();
  const noteDate = moment(date);
  const mediaQuery = useMediaQuery("(max-width: 1100px)");
  const handleEntryClick = () => {
    dispatch(activeNote(id, { date, title, body, url }));
  };
  return (
    <div
      className={
        mediaQuery === false ? "journal__entry " : "journal__entry-responsive "
      }
    >
      {url && (
        <div className="journal__entry-picture">
          <Image style={{width:"75px",height:"75px",borderRadius:"100%"}} src={url} alt={url} />
        </div>
      )}
      <div
            onClick={handleEntryClick}
        className={
          mediaQuery === false
            ? "journal__entry-body"
            : "journal__entry-body-responsive"
        }
      >
        <p className="journal__entry-title">{title}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
