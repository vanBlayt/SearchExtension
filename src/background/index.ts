import { Action } from "~constants";

export {}
 
console.log(
  "Live now; make now always the most precious time. Now will never come again."
)

chrome.commands.onCommand.addListener(function (command) {
  console.log('inner onCommand', command)
  // 开始搜索过往历史
  if (command === Action.START_RESEARCH) {
    chrome.tabs.query({ active: true }).then((tabs) => {
      console.log('inner oncomand send message', tabs[0].title);
      // 通知当前tab 打开 搜索框
      chrome.tabs.sendMessage(tabs[0].id ?? -1, { action: Action.OPEN_SEARCH_CONTENT }).then((res) => {
        console.log('content response====', res);
      })
    })
  }
});