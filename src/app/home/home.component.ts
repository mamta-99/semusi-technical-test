﻿import { Component } from '@angular/core';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'
import { User } from '@app/_models';
import { AccountService } from '@app/_services';

@Component({ templateUrl: 'home.component.html', styleUrls: ['./home.component.css'] })
export class HomeComponent {
    user: User;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
    dataEmp :any;

    csvOptions = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      useBom: true,
      noDownload: false,
      headers: ["val", "name", "review", "rating"]
    };
  ngOnInit()
{
    this.dataEmp =[{"val": "0", "name": "sonu mehta", "review": "Doesn't open, no clarity on tabs, low functionality, fails many a times, doesn't update on time. I lost thousands because of glitch in this app. Doesn't update your trade immediately, you will only see your trade after the day has closed and in short sell you lose heavy that way. Worst brokers/deale", "rating": "1"},
    {"val": "1", "name": "Zoheb Hussain", "review": "I used to love and adore the Kotak Mobile App and that's the reason I opened my account. But now with every update its as if providing malware to bug the UI. Everytime I want to refresh, I have to scroll! What is this NSE Webpage?.... Please this is a request bring back the old version. Tampering wi", "rating": "1"},
    {"val": "2", "name": "Swapnil Koshti", "review": "Every time we need to login with username and password. Everyday you need to generate OTP. which should be optional security. Other apps like zerodha have fingerprint authentication which is very handy. Also some of the pages of application are not loading at all. Website is bit better than app. Nee", "rating": "2"},
    {"val": "3", "name": "Heem Bhatt", "review": "Since today   (11-Aug-2020), the app is not working through Vodafone mobile n/w. However, it is working on WiFi. Pls. fix this at the earliest. I tried with 3-4 different cells but problem is same. It is working fine on other mobile n/w.", "rating": "1"},
    {"val": "4", "name": "Simpal Sawant", "review": "So true are the earlier reviews. I can not write an another review under the same name so editing my earlier post only. Its mobile is disastrous, it gives you such a wrong information with worst update regarding your available funds. It made me sell my share and lose a hefty money. Dont ever install", "rating": "1"},
    {"val": "5", "name": "Shailendrasinh Zala", "review": "From 2 hr not able to open app. Also received below sms Hi, if you are unable to open KST app or log in, kindly try changing your network. If the problem persists, contact our customer care for help. bit.ly/longdisc Do I need to buy new sim Card for changing network ? And also mention url is not working","rating": "1"},
    {"val": "6", "name": "Yogeshwar Sharma", "review": "Overall a good app and the company but facing issues. I wish to rate it between 3-4 star but marked 4 and the reasons are 1. The buy value changes when I see scrips in my portfolio. Eg a Rs 10 value will show as 10.08?? 2. If I want to see outstanding to clear off, right amount is not displayed. Then wait till evening see two three different mails and get confuse again. Why is this app then ?? 3. The chat option in app is really very very slow. Takes ages and solutions are not satisfactory.??", "rating": "4"},
    {"val": "7", "name": "hardik patel", "review": "very cumbersome procedure to login.Must develop an easy way to login an account like a 4 digit mpin instead of askin for all details. Also plz. update upper n lower circuit levels on trading screen. All other sites have upper n lower circuit levels displa","rating": "3"},
    {"val": "8", "name": "Dheeraj patel", "review": "From last week app is not working properly. Always show the currently we can't compete your request. I don't know why it's happened suddenly. I reinstalled the app and there is no problem in network connection because my other app working absolutely fine.","rating": "3"},
    {"val": "9", "name": "Emmanuel Martin", "review": "There has been a debit of 10000 from my savings account towards my trading account without my knowledge though I have not been actively trading in the name of margin fee neither is the amount showing up on trading account balance and there is no trace of the amount debited!!!! This has honestly made me very skeptical about the trading app and lost trust in kotak further am closing all active accountv I have with kotak !!!!!", "rating": "1"},
    {"val": "10", "name": "Tejas Gore", "review": "The application can be much better and optimized multiple trading levels. It's very inconvenient to keep logging every time you have to access the application. Also the UI is highly complicated and an average newbie would be discouraged looking at it. The developer needs to make it more simple and there convincing. Also there should be a detailed tutorial on every aspect of trading element covered. The online broking competition is tough after Zerodha and Upstox have captured the market.","rating":"2"},
    {"val": "11", "name": "Chandan Sethi", "review":"The worst app ever ... For the amount of brokerage and other charges that customer pays for trading this app is absolutely useless...The app does not open at all sometimes...hangs a lot ...does not offer interactive chart seems like a vintage app...people can lose money because of the poor performance of the app", "rating": "1"},
    {"val": "12", "name": "Shyam Kurup", "review": "Clearly the app is not working as it used to be. You have to manually refresh and that too with a lag. Figures get stuck. Am wondering who messed up with this lovely app? Impossible to do active quick trades if it continues like this will have to think of shifting to another.", "rating": "3"},
    {"val": "13", "name": "uday kiran", "review": "When I open kotak securities app .. it shows currently we are unable to process ur request. Please try again. Since two days it is coming like this. I have uninstalled this app and installed again. Still no response. This app Update is worst. Before version is good.", "rating": "1"},
    {"val": "14", "name": "Kishan Patel", "review": "Need to Improve app interface like other apps (ie money control, kite, etc). When Each and every time we open the app, it demands user name, password and otp.... This is very worst system. No dark mode. No analyse like money control ", "rating": "1"},
    {"val": "15", "name": "dhaval lekhadia", "review": "My app has changed the way we search options. Before i used the scroll option to select strike price and call or put. Now that option has gone. The scroll and select system for far more user friendly and quick. Now i have to go to option chain then select strike price. It takes a lot of time to load option chain. New feature is not good.", "rating": "3"},
    {"val": "16", "name": "lakshya bhatia", "review": "Very cumbersome procedure to login.Must develop an easy way to login an account like a 4 digit mpin instead of askin for all details. Also plz. update upper n lower circuit levels on trading screen. All other sites have upper n lower circuit levels displayed while trading...It will b very helpful", "rating": "3"},
    {"val": "17", "name": "Manas Kumar", "review": "Team, Please make the application user friendly, its very complicated. Improvement areas 1. Proper chart like other brokers(merge it with trading view) 2. Lite interface ( it should not hang), i use samsung s20 plus and ipad but still it struggles. 3,. Once you consider the above two points it will be useful for traders like me right now its for investors ( not for intraday trading). Thanks ","rating": "2"},
    {"val": "18", "name": "Savan Ganatra", "review": "Crash issues is happening now a days, i cant access this app. Sometimes it takes too much time to access any activity in this app. Required Crash issue update for this app.and also done reinstall process but issue is still coming.", "rating": "2"},

]

}
downloadCSV(){
    //this.dtHolidays : JSONDATA , HolidayList : CSV file Name, this.csvOptions : file options
    new  AngularCsv(this.dataEmp, "data-data", this.csvOptions);
  }
}