# 🎭 Twitter Trollface Replacer

Replace `:trollface:` with your custom trollface image on Twitter/X automatically!

![Version](https://img.shields.io/badge/version-1.0-blue)
![Browser](https://img.shields.io/badge/browser-Chrome%20%7C%20Edge%20%7C%20Vivaldi-orange)

## 📥 Download

**Option 1: Download ZIP (Easiest)**
1. Click the green **Code** button at the top of this page
2. Click **Download ZIP**
3. Unzip the file on your computer
4. You'll get a folder called `trollface`

**Option 2: Using Git**
```bash
git clone https://github.com/yourusername/trollface.git
```

## 🚀 Installation

### Step 1: Get Your Trollface Image Ready
- Find or create your trollface image
- Save it as `troll.webp` 
- Put it inside the `trollface` folder

The `trollface` folder should now have:
- manifest.json
- content.js
- LICENSE
- README.md
- **troll.webp** ← your image here

### Step 2: Install in Your Browser

**For Vivaldi / Chrome / Edge:**

1. Open your browser
2. Copy and paste this into the address bar: `chrome://extensions/`
   - (For Vivaldi use: `vivaldi://extensions/`)
   - (For Edge use: `edge://extensions/`)
3. Press Enter
4. Turn on **Developer mode** - look for a switch in the top right corner
5. Click the **Load unpacked** button
6. Find and select your `trollface` folder
7. Click **Select Folder**

**That's it! ✅**

## 🎮 How to Use

1. Go to Twitter (twitter.com) or X (x.com)
2. Type `:trollface:` in any tweet
3. Watch it turn into your image! 🎭

**Example:**
```
This is hilarious :trollface:
```
→ Your trollface image will appear!

## ⚙️ Make the Image Bigger or Smaller

1. Open the `trollface` folder
2. Right-click on `content.js` and open it with Notepad (or any text editor)
3. Look for these two lines (around line 30-31):
```javascript
img.style.width = '1.8em';
img.style.height = '1.8em';
```
4. Change the number:
   - Want it bigger? Try `2.5em`
   - Want it smaller? Try `1.2em`
5. Save the file
6. Go back to your browser extensions page
7. Click the circular arrow ↻ button on the extension card to reload it
8. Refresh Twitter

## ❓ Not Working?

**Can't find the extension after installing?**
- Make sure "Developer mode" is turned ON (the switch should be blue/green)
- Try closing and reopening the extensions page

**Image not showing up?**
- Check that your image file is named exactly `troll.webp` (not `troll (1).webp`)
- Make sure it's in the same folder as the other files
- Try refreshing the Twitter page

**Still having issues?**
- Uninstall the extension and try installing again
- Make sure you selected the `trollface` folder, not a folder inside it

## 📝 Notes

- This extension only works on Twitter/X
- Your trollface image stays on your computer - it's not uploaded anywhere
- Other people won't see your trollface unless they also install the extension

## ⭐ Like This Project?

Give it a star on GitHub! It helps others find it.

---

Made with 🎭 for the culture
