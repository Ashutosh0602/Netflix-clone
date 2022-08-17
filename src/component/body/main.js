import React from "react";
import list from "./mainlist";
import classes from "./mainStyle.module.css";

export default function Main() {
  return (
    <section className={classes.section_body}>
      {list.map((ls) => {
        return (
          <>
            <div className={classes.news_cont}>
              <div>
                <img src={ls.src} />
              </div>
              <div className={classes.news_topic}>
                <div>{ls.head}</div>
                <div>{list[0].sub_head}</div>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
}
