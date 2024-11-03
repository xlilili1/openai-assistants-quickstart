"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  const categories = {
    "纯聊天": "basic-chat",
    "函数调用": "function-calling",
    "文档检索": "file-search",
    "系统整合": "all",
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        舒北鼻舒的AI伴侣
      </div>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/examples/${url}`}>
            {name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
