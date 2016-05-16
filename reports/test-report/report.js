$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/cucumber/selenium/testng/emailsubscription.feature");
formatter.feature({
  "line": 2,
  "name": "Email Subscription",
  "description": "\r\n  In order to ensure email subscription is successful\r\n  I want to run the cucumber test to verify the displayed message after subscription",
  "id": "email-subscription",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@EmailSubscriptionTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Email Subscription",
  "description": "",
  "id": "email-subscription;email-subscription",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"testSiteURL\" on \"browserType\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters valid \"\u003cEmail\u003e\" and click the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "appropriate email subscription successful message should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "email-subscription;email-subscription;",
  "rows": [
    {
      "cells": [
        "Email"
      ],
      "line": 16,
      "id": "email-subscription;email-subscription;;1"
    },
    {
      "cells": [
        "bsandhya525@rediffmail.com"
      ],
      "line": 17,
      "id": "email-subscription;email-subscription;;2"
    },
    {
      "cells": [
        "bsandhya525@gmail.com"
      ],
      "line": 18,
      "id": "email-subscription;email-subscription;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4236021750,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Email Subscription",
  "description": "",
  "id": "email-subscription;email-subscription;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@EmailSubscriptionTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"testSiteURL\" on \"browserType\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters valid \"bsandhya525@rediffmail.com\" and click the submit button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "appropriate email subscription successful message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testSiteURL",
      "offset": 19
    },
    {
      "val": "browserType",
      "offset": 36
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.givenStatement(String,String)"
});
formatter.result({
  "duration": 9907938516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bsandhya525@rediffmail.com",
      "offset": 19
    }
  ],
  "location": "EmailSubscription_StepDefinitions.user_enters_valid_email_and_click_the_submit_button(String)"
});
formatter.result({
  "duration": 2232635287,
  "status": "passed"
});
formatter.match({
  "location": "EmailSubscription_StepDefinitions.verifyEmailSubscription()"
});
formatter.result({
  "duration": 133540135,
  "status": "passed"
});
formatter.after({
  "duration": 1482714102,
  "status": "passed"
});
formatter.before({
  "duration": 3207898536,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Email Subscription",
  "description": "",
  "id": "email-subscription;email-subscription;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@EmailSubscriptionTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"testSiteURL\" on \"browserType\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user enters valid \"bsandhya525@gmail.com\" and click the submit button",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "appropriate email subscription successful message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testSiteURL",
      "offset": 19
    },
    {
      "val": "browserType",
      "offset": 36
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.givenStatement(String,String)"
});
formatter.result({
  "duration": 2511657859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bsandhya525@gmail.com",
      "offset": 19
    }
  ],
  "location": "EmailSubscription_StepDefinitions.user_enters_valid_email_and_click_the_submit_button(String)"
});
formatter.result({
  "duration": 2430922381,
  "status": "passed"
});
formatter.match({
  "location": "EmailSubscription_StepDefinitions.verifyEmailSubscription()"
});
formatter.result({
  "duration": 124578568,
  "status": "passed"
});
formatter.after({
  "duration": 1302883867,
  "status": "passed"
});
formatter.uri("com/cucumber/selenium/testng/monthlyshoedisplays.feature");
formatter.feature({
  "line": 2,
  "name": "Monthly Shoe Displays",
  "description": "\r\nIn order to ensure monthly shoes are displayed properly\r\nI want to run the cucumber test to verify the displayed shoe data",
  "id": "monthly-shoe-displays",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@monthlyshoedisplaysTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Monthly Shoe Displays",
  "description": "",
  "id": "monthly-shoe-displays;monthly-shoe-displays",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"testSiteURL\" on \"browserType\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the month name \"\u003cMonthName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "corresponding shoe data should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "monthly-shoe-displays;monthly-shoe-displays;",
  "rows": [
    {
      "cells": [
        "MonthName"
      ],
      "line": 17,
      "id": "monthly-shoe-displays;monthly-shoe-displays;;1"
    },
    {
      "cells": [
        "January"
      ],
      "line": 18,
      "id": "monthly-shoe-displays;monthly-shoe-displays;;2"
    },
    {
      "cells": [
        "February"
      ],
      "line": 19,
      "id": "monthly-shoe-displays;monthly-shoe-displays;;3"
    },
    {
      "cells": [
        "November"
      ],
      "line": 20,
      "id": "monthly-shoe-displays;monthly-shoe-displays;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3233227088,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Monthly Shoe Displays",
  "description": "",
  "id": "monthly-shoe-displays;monthly-shoe-displays;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@monthlyshoedisplaysTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"testSiteURL\" on \"browserType\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the month name \"January\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "corresponding shoe data should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testSiteURL",
      "offset": 19
    },
    {
      "val": "browserType",
      "offset": 36
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.givenStatement(String,String)"
});
formatter.result({
  "duration": 2693538459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "January",
      "offset": 31
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.user_clicks_on_the_month_name(String)"
});
formatter.result({
  "duration": 2205197108,
  "status": "passed"
});
formatter.match({
  "location": "MonthlyShoeDisplays_StepDefinitions.verifyShoeData()"
});
formatter.result({
  "duration": 2018962142,
  "status": "passed"
});
formatter.after({
  "duration": 1168467487,
  "status": "passed"
});
formatter.before({
  "duration": 3154499707,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Monthly Shoe Displays",
  "description": "",
  "id": "monthly-shoe-displays;monthly-shoe-displays;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@monthlyshoedisplaysTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"testSiteURL\" on \"browserType\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the month name \"February\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "corresponding shoe data should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testSiteURL",
      "offset": 19
    },
    {
      "val": "browserType",
      "offset": 36
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.givenStatement(String,String)"
});
formatter.result({
  "duration": 2753215205,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "February",
      "offset": 31
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.user_clicks_on_the_month_name(String)"
});
formatter.result({
  "duration": 2157355603,
  "status": "passed"
});
formatter.match({
  "location": "MonthlyShoeDisplays_StepDefinitions.verifyShoeData()"
});
formatter.result({
  "duration": 709035916,
  "status": "passed"
});
formatter.after({
  "duration": 1254221030,
  "status": "passed"
});
formatter.before({
  "duration": 3139789606,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Monthly Shoe Displays",
  "description": "",
  "id": "monthly-shoe-displays;monthly-shoe-displays;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@monthlyshoedisplaysTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user navigates to \"testSiteURL\" on \"browserType\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "user clicks on the month name \"November\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "corresponding shoe data should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "testSiteURL",
      "offset": 19
    },
    {
      "val": "browserType",
      "offset": 36
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.givenStatement(String,String)"
});
formatter.result({
  "duration": 2992150531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "November",
      "offset": 31
    }
  ],
  "location": "MonthlyShoeDisplays_StepDefinitions.user_clicks_on_the_month_name(String)"
});
formatter.result({
  "duration": 2183056699,
  "status": "passed"
});
formatter.match({
  "location": "MonthlyShoeDisplays_StepDefinitions.verifyShoeData()"
});
formatter.result({
  "duration": 499892938,
  "error_message": "java.lang.AssertionError: Image src is null.No Image to display. expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:494)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat com.cucumber.selenium.testng.MonthlyShoeDisplays_StepDefinitions.verifyShoeData(MonthlyShoeDisplays_StepDefinitions.java:99)\r\n\tat ✽.Then corresponding shoe data should be displayed(com/cucumber/selenium/testng/monthlyshoedisplays.feature:13)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is https://enigmatic-reef-29451.herokuapp.com/months/november");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1623113682,
  "status": "passed"
});
});