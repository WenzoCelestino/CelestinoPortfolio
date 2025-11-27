# Git Commit Guide para sa Visual Studio 2022

## 🔍 Mga Posibleng Dahilan Bakit Hindi Nag-u-update ang GitHub

### 1. **Hindi Na-initialize ang Git Repository**
   - Walang `.git` folder sa project
   - Hindi pa naka-link sa GitHub repository

### 2. **Hindi Naka-stage ang Changes**
   - Naka-save lang ang files pero hindi pa na-add sa staging area
   - Kailangan i-stage muna bago i-commit

### 3. **Hindi Naka-push ang Commits**
   - Naka-commit na pero hindi pa na-push sa GitHub
   - Nasa local repository lang, wala pa sa remote (GitHub)

### 4. **Authentication Issues**
   - Expired na ang credentials
   - Hindi naka-configure ang Git credentials sa Visual Studio

---

## ✅ Solusyon: Step-by-Step Guide

### **Option 1: Gamit ang Visual Studio 2022 Git Tools (Recommended)**

#### Step 1: I-check ang Git Status
1. Buksan ang **Team Explorer** sa Visual Studio 2022
   - Pindutin `View` → `Team Explorer` (o `Ctrl+\, Ctrl+M`)
2. Tingnan ang **Changes** tab
   - Dito makikita mo ang lahat ng modified files

#### Step 2: I-stage ang Changes
1. Sa **Team Explorer**, pumunta sa **Changes** tab
2. Makikita mo ang list ng modified files
3. I-check ang files na gusto mong i-commit
   - O pindutin ang **"+"** button para i-stage lahat
4. Mag-type ng **Commit Message** (halimbawa: "Updated portfolio content")
5. Pindutin ang **"Commit All"** button

#### Step 3: I-push sa GitHub
1. Pagkatapos ng commit, makikita mo ang message na "Your branch is X commits ahead"
2. Pindutin ang **"Sync"** o **"Push"** button
3. Kung first time, kailangan mo i-configure ang remote repository:
   - Pumunta sa **Settings** → **Repository Settings**
   - I-verify na naka-set ang **Remote** URL (halimbawa: `https://github.com/WenzoCelestino/CelestinoPortfolio.git`)

#### Step 4: I-verify sa GitHub
1. Buksan ang GitHub repository mo sa browser
2. I-refresh ang page
3. Dapat makita mo na ang latest changes

---

### **Option 2: Gamit ang Git Command Line (Kung Available)**

Kung may Git na naka-install sa system mo:

```powershell
# Pumunta sa project folder
cd "Celestino Portfolio"

# I-check ang status
git status

# I-add ang lahat ng changes
git add .

# I-commit ang changes
git commit -m "Your commit message here"

# I-push sa GitHub
git push origin main
# O kung ang branch mo ay "master":
git push origin master
```

---

### **Option 3: I-initialize ang Git Repository (Kung Wala Pa)**

Kung hindi pa na-initialize ang Git repository:

1. Sa **Team Explorer**, pumunta sa **Settings** → **Repository Settings**
2. Pindutin ang **"Initialize Git Repository"** button
3. I-link sa existing GitHub repository:
   - Pumunta sa **Settings** → **Repository Settings** → **Remotes**
   - I-add ang remote URL: `https://github.com/WenzoCelestino/CelestinoPortfolio.git`

---

## 🔧 Troubleshooting

### Problem: "Authentication failed" o "Permission denied"
**Solusyon:**
1. Sa Visual Studio, pumunta sa **Tools** → **Options** → **Source Control** → **Git Global Settings**
2. I-configure ang Git credentials
3. O gumamit ng **Personal Access Token** sa halip ng password:
   - Pumunta sa GitHub → Settings → Developer settings → Personal access tokens
   - Gumawa ng bagong token
   - Gamitin ang token bilang password

### Problem: "Remote repository not found"
**Solusyon:**
1. I-verify na tama ang remote URL
2. Sa **Team Explorer** → **Settings** → **Repository Settings** → **Remotes**
3. I-check ang URL (dapat: `https://github.com/WenzoCelestino/CelestinoPortfolio.git`)

### Problem: "Nothing to commit"
**Solusyon:**
1. I-verify na may changes ka talaga
2. I-save muna ang lahat ng files (Ctrl+S)
3. I-check ang **Changes** tab sa Team Explorer

### Problem: "Branch is ahead/behind"
**Solusyon:**
1. Pindutin ang **"Sync"** button sa Team Explorer
2. O gawin ang **Pull** muna bago **Push**:
   - **Sync** → **Pull** → **Push**

---

## 📋 Quick Checklist

- [ ] Naka-save ang lahat ng files
- [ ] Naka-stage ang changes (naka-check sa Changes tab)
- [ ] May commit message
- [ ] Na-commit na ang changes
- [ ] Na-push na sa GitHub (hindi lang commit, dapat push din!)
- [ ] Naka-verify sa GitHub website na nag-update na

---

## 💡 Important Reminders

1. **Commit ≠ Push**
   - Ang **Commit** ay nagse-save ng changes sa local repository
   - Ang **Push** ay nagse-send ng commits sa GitHub
   - Parehong kailangan!

2. **Always Pull Before Push** (kung may ibang nag-edit)
   - Para maiwasan ang conflicts
   - Gamitin ang **Sync** button para automatic

3. **Commit Messages**
   - Gumamit ng descriptive messages
   - Halimbawa: "Updated contact form", "Fixed navigation bug", "Added new project"

---

## 🆘 Kung Wala Pa Ring Gumana

1. I-check kung naka-link talaga ang Visual Studio sa tamang repository
2. I-verify sa GitHub website kung existing ang repository
3. Subukan i-clone ulit ang repository at i-copy ang changes
4. O gumamit ng **GitHub Desktop** app bilang alternative

---

**Last Updated:** 2024

