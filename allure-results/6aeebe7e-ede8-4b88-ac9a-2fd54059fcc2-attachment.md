# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Alert.spec.js >> Alert Handling
- Location: tests\Alert.spec.js:6:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demo.automationtesting.in/Alerts.html", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "image not displaying" [ref=e7] [cursor=pointer]:
        - /url: http://www.automationtesting.in
        - img "image not displaying" [ref=e8]
      - heading "Automation Demo Site" [level=1] [ref=e10]
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link "Home" [ref=e16] [cursor=pointer]:
            - /url: Index.html
        - listitem [ref=e17]:
          - link "Register" [ref=e18] [cursor=pointer]:
            - /url: Register.html
        - listitem [ref=e19]:
          - link "WebTable" [ref=e20] [cursor=pointer]:
            - /url: WebTable.html
        - listitem [ref=e21]:
          - link "SwitchTo" [ref=e22] [cursor=pointer]:
            - /url: SwitchTo.html
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link "Widgets" [ref=e25] [cursor=pointer]:
            - /url: Widgets.html
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link "Interactions" [ref=e28] [cursor=pointer]:
            - /url: Interactions.html
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link "Video" [ref=e31] [cursor=pointer]:
            - /url: SwitchTo.html
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link "WYSIWYG" [ref=e34] [cursor=pointer]:
            - /url: WYSIWYG.html
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link "More" [ref=e37] [cursor=pointer]:
            - /url: "#"
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link "Practice Site" [ref=e40] [cursor=pointer]:
            - /url: http://practice.automationtesting.in/
  - generic [ref=e44]:
    - list [ref=e46]:
      - listitem [ref=e47]:
        - link "Alert with OK" [ref=e48]:
          - /url: "#OKTab"
      - listitem [ref=e49]:
        - link "Alert with OK & Cancel" [ref=e50] [cursor=pointer]:
          - /url: "#CancelTab"
      - listitem [ref=e51]:
        - link "Alert with Textbox" [ref=e52] [cursor=pointer]:
          - /url: "#Textbox"
    - button "click the button to display an alert box:" [ref=e54] [cursor=pointer]
  - generic [ref=e56]:
    - insertion [ref=e59]:
      - generic [ref=e62]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e64]: Discover more
        - link "Interaction design tools" [ref=e65] [cursor=pointer]:
          - generic "Interaction design tools" [ref=e66]
          - img [ref=e68]
        - link "File handling solutions" [ref=e70] [cursor=pointer]:
          - generic "File handling solutions" [ref=e71]
          - img [ref=e73]
        - link "Web design templates" [ref=e75] [cursor=pointer]:
          - generic "Web design templates" [ref=e76]
          - img [ref=e78]
        - link "Cross-browser testing" [ref=e80] [cursor=pointer]:
          - generic "Cross-browser testing" [ref=e81]
          - img [ref=e83]
        - link "Modal window scripts" [ref=e85] [cursor=pointer]:
          - generic "Modal window scripts" [ref=e86]
          - img [ref=e88]
        - link "Web accessibility audit" [ref=e90] [cursor=pointer]:
          - generic "Web accessibility audit" [ref=e91]
          - img [ref=e93]
        - link "Development Tools" [ref=e95] [cursor=pointer]:
          - generic "Development Tools" [ref=e96]
          - img [ref=e98]
        - link "TV & Video" [ref=e100] [cursor=pointer]:
          - generic "TV & Video" [ref=e101]
          - img [ref=e103]
    - insertion [ref=e107]:
      - generic [ref=e110]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e112]: Discover more
        - link "WYSIWYG editor plugins" [ref=e113] [cursor=pointer]:
          - generic "WYSIWYG editor plugins" [ref=e114]
          - img [ref=e116]
        - link "Testing training course" [ref=e118] [cursor=pointer]:
          - generic "Testing training course" [ref=e119]
          - img [ref=e121]
        - link "Web development courses" [ref=e123] [cursor=pointer]:
          - generic "Web development courses" [ref=e124]
          - img [ref=e126]
        - link "Automation testing tools" [ref=e128] [cursor=pointer]:
          - generic "Automation testing tools" [ref=e129]
          - img [ref=e131]
        - link "Progress bar components" [ref=e133] [cursor=pointer]:
          - generic "Progress bar components" [ref=e134]
          - img [ref=e136]
        - link "Software testing guides" [ref=e138] [cursor=pointer]:
          - generic "Software testing guides" [ref=e139]
          - img [ref=e141]
        - link "Website automation services" [ref=e143] [cursor=pointer]:
          - generic "Website automation services" [ref=e144]
          - img [ref=e146]
        - link "Javascript frameworks guide" [ref=e148] [cursor=pointer]:
          - generic "Javascript frameworks guide" [ref=e149]
          - img [ref=e151]
    - insertion [ref=e155]:
      - iframe [ref=e157]:
        
    - insertion [ref=e160]:
      - generic [ref=e163]:
        - heading "These are topics related to the article that might interest you" [level=2] [ref=e165]: Discover more
        - link "Software" [ref=e166] [cursor=pointer]:
          - generic "Software" [ref=e167]
          - img [ref=e169]
        - link "UI components library" [ref=e171] [cursor=pointer]:
          - generic "UI components library" [ref=e172]
          - img [ref=e174]
        - link "TV & Video Equipment" [ref=e176] [cursor=pointer]:
          - generic "TV & Video Equipment" [ref=e177]
          - img [ref=e179]
        - link "Data visualization software" [ref=e181] [cursor=pointer]:
          - generic "Data visualization software" [ref=e182]
          - img [ref=e184]
        - link "HTML training modules" [ref=e186] [cursor=pointer]:
          - generic "HTML training modules" [ref=e187]
          - img [ref=e189]
        - link "Charting library access" [ref=e191] [cursor=pointer]:
          - generic "Charting library access" [ref=e192]
          - img [ref=e194]
        - link "Web Apps & Online Tools" [ref=e196] [cursor=pointer]:
          - generic "Web Apps & Online Tools" [ref=e197]
          - img [ref=e199]
        - link "Demo site access" [ref=e201] [cursor=pointer]:
          - generic "Demo site access" [ref=e202]
          - img [ref=e204]
    - contentinfo [ref=e207]:
      - generic [ref=e209]:
        - generic [ref=e210]:
          - text: "\"@ 2016\""
          - link "Automation Testing" [ref=e211] [cursor=pointer]:
            - /url: "#"
          - text: "\"All Rights Reserved.\""
        - generic [ref=e212]:
          - link "" [ref=e213] [cursor=pointer]:
            - /url: https://www.facebook.com/automationtesting2016/
            - generic [ref=e214]: 
          - link "" [ref=e215] [cursor=pointer]:
            - /url: https://twitter.com/krishnasakinala
            - generic [ref=e216]: 
          - link "" [ref=e217] [cursor=pointer]:
            - /url: https://www.linkedin.com/nhome/?trk=hb_signin
            - generic [ref=e218]: 
          - link "" [ref=e219] [cursor=pointer]:
            - /url: https://plus.google.com/105286300926085335367
            - generic [ref=e220]: 
          - link "" [ref=e221] [cursor=pointer]:
            - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
            - generic [ref=e222]: 
  - generic [ref=e223]:
    - generic [ref=e224] [cursor=pointer]:
      - img [ref=e226]
      - link "Go to shopping options for TV & Video Equipment" [ref=e228]: TV & Video Equipment
    - button "Close shopping anchor" [ref=e229]
```

# Test source

```ts
  1  | //Alert Handling
  2  | //page.once -------------> Used to handle single alert at a time
  3  | //page.on ---------------> Used to handle multiple alert 
  4  | 
  5  | import { test } from '@playwright/test'
  6  | test('Alert Handling', async ({ page }) => {
> 7  |     await page.goto('https://demo.automationtesting.in/Alerts.html')
     |                ^ Error: page.goto: Test timeout of 30000ms exceeded.
  8  |     //Simple Alert
  9  |     await page.on('dialog', async (dialog) => {
  10 |         await dialog.accept()
  11 |         console.log("Simple Alert :", dialog.message())
  12 |     })
  13 |     await page.locator('//button[@class="btn btn-danger"]').click()
  14 |     // await page.waitForTimeout(3000)
  15 | 
  16 |     //confirmation Alert
  17 |     await page.locator('(//a[@class="analystic"])[2]').click()
  18 | 
  19 |     // await page.once('dialog', async (dialog) => {
  20 |     //     await dialog.dismiss()
  21 |     //     console.log("Confirmation Alert :", dialog.message())
  22 | 
  23 |     // })
  24 |     await page.locator('//button[@class="btn btn-primary"]').click()
  25 | 
  26 |     //Prompt Alert
  27 |     await page.locator('(//a[@class="analystic"])[3]').click()
  28 | 
  29 |     // await page.once('dialog', async (dialog) => {
  30 |     //     await dialog.accept('Hii Buddy')
  31 |     //     console.log("Prompt Alert :", dialog.message())
  32 |     // })
  33 |     await page.locator('//button[@class="btn btn-info"]').click()
  34 | })
  35 | 
  36 | 
  37 | 
```