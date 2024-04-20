import { useEffect } from "react";
import { Action } from "~constants";

interface Request {
  action: Action;
}

const Index = () => {
  useEffect(() => {
    console.log('====== useEffect');
    chrome.runtime.onMessage.addListener((request: Request) => {
      console.log("Message from the background script:");
      const { action } = request;
      switch (action) {
        // 打开搜索框
        case Action.OPEN_SEARCH_CONTENT:
          console.log('====== open component');
          break;
        default:
          break;
      }
      return Promise.resolve({ response: "Hi from content script123123" });
    });
  }, []);

  return (
    <div>hello world</div>
  )
}

export default Index; 