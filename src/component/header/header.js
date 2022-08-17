import { React, useState, useEffect } from "react";
import classes from "./headerStyle.module.css";
import list from "./headerlist";

const len = list.length;
let list_count = 0;
export default function Header() {
  const [list_no, list_change] = useState(0);
  useEffect(() => {
    let call = setTimeout(() => count_plus(), 2000);
    return () => clearTimeout(call);
  });

  function count_plus() {
    list_count++;
    if (list_no === len - 1) {
      list_change(0);
      list_count = 0;
    } else {
      list_change(list_count);
    }
  }
  function count_minus() {
    list_count--;
    if (list_no === 0) {
      list_change(len - 1);
      list_count = len - 1;
    } else {
      list_change(list_count);
    }
  }
  return (
    <section className={classes.section_head}>
      <header>
        <div className={classes.next} onClick={count_plus}>
          &#187;
        </div>
        <div className={classes.previous} onClick={count_minus}>
          &#171;
        </div>
        <div className={classes.img_cont}>
          <img src={list[list_no].src} />
        </div>
        <div className={classes.topic_cont}>
          <p>{list[list_no].head}</p>
          <p>{list[list_no].sub_head}</p>
        </div>
      </header>
    </section>
  );
}
