# The Fencing Club — website

A small static marketing site for a local fencing club training in Eglinton and
at UU Magee (North West of Ireland).

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Home — intro, weekly schedule, competition highlights, call to action |
| `programmes.html` | Beginners' course, club night, squad, juniors; épée and sabre; what to bring |
| `about.html` | Club ethos, coaching, results, safeguarding |
| `contact.html` | How to join, contact details, map, FAQ |
| `assets/style.css` | Single shared stylesheet |
| `assets/nav.js` | Mobile navigation toggle |

No build step. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deployment

`.cpanel.yml` deploys this repo to `staging.thefencing.club` via cPanel Git
Version Control (Pull or Deploy → Deploy HEAD Commit).

`robots.txt` (`Disallow: /`) and `.htaccess` (`X-Robots-Tag: noindex`) keep the
**staging** site out of search results. **A production deploy must drop both**
files — remove them from the `.cpanel.yml` copy line, or overwrite them at the
production document root.

## Notes for the club

Copy that still needs the club's real figures is written so it reads sensibly
until updated — search for these and fill in:

- **Fees** (`contact.html`, "How much does it cost?") — currently "email us for
  the current rates".
- **Course dates** — referenced generally; add specific term dates where useful.
- **Coach / welfare officer names** — `about.html` describes roles without names.

Fonts load from Google Fonts. The contact map is an OpenStreetMap embed centred
on Eglinton village; nudge the `marker=` / `bbox=` values in `contact.html` if
you want it tighter on the community centre.
