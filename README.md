# Team 6632's FRC Scouting App 2026
<img width="1446" height="1022" alt="image" src="https://github.com/user-attachments/assets/7bc67cde-eb00-4dfe-9708-3dfaebfec22e" />

This app is designed for all devices, including mobile.

Simply visit the Github Page, https://luidevo.github.io/scouting-app-2026/dashboard.html, wait a few seconds, and the app will work offline (but you must have visited the site first while online).

In order to sync, go to the password button in the top right of the dashboard page, and input the fields as described by your lead, then press save.

You can prefill your user by pressing new scout button(next to the new log button)

## iOS Notes
- **Add to Home Screen is manual on iOS.** Android will prompt you automatically, but on iPhone/iPad you need to tap the Share button in Safari → "Add to Home Screen" to install the app.
- **Cache eviction.** iOS Safari will automatically clear the app's offline cache after ~7 days of inactivity. If you haven't opened the app in over a week, reload it on wifi before your next event to re-cache everything.

## This app has been **tested**, but there still might be some problems. To limit them, here are some things to be careful of:
- If you put the same match number as a previous log, it will **overwrite the log.** This means that you cant have 2 teams being scouted at the same time on one laptop. __One laptop per robot at a time.__
- Be cautious with your comments. Try not to add slashes or backslashes or anything of that sort that could potentially break the app inside a comment.
- Almost all data is saved in checkpoints, but some data will be erased if you close or refresh the tab mid game (eg. counters get reset on match.html).
